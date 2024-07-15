'use client';
import React, { useState, useEffect } from "react";
import NavBar from "@/component/navbar/page";
import { Footer, Accordion } from "flowbite-react";
import data from "../../../resources/resources.json";
import "../globals.css";

// Function to highlight the search term
const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} className="bg-yellow-300">
                {part}
            </span>
        ) : (
            part
        )
    );
};

// Function to convert URLs to clickable links and handle new lines
const handleText = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+[^.,:;\"')\s])/g;
    return text.split("\n").map((item, index) => (
        <React.Fragment key={index}>
            {item.split(urlRegex).map((part, partIndex) => 
                urlRegex.test(part) ? (
                    <a key={partIndex} href={part} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                        {part}
                    </a>
                ) : (
                    part
                )
            )}
            <br />
        </React.Fragment>
    ));
};

export default function Resources() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    const [openPanels, setOpenPanels] = useState({});

    useEffect(() => {
        if (!searchQuery) {
            setFilteredData(data);
            return;
        }

        const lowercasedQuery = searchQuery.toLowerCase();
        const queryWords = lowercasedQuery.split(" ").filter((word) => word);

        const filtered = data.filter((item) => {
            return queryWords.some(
                (word) =>
                    item.title.toLowerCase().includes(word) ||
                    item.content.toLowerCase().includes(word)
            );
        });

        setFilteredData(filtered);
    }, [searchQuery]);

    const groupedData = filteredData.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    const togglePanel = (category, index) => {
        setOpenPanels((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                [index]: !prev[category]?.[index],
            },
        }));
    };

    return (
        <div>
            <NavBar activeLink="Resources" />
            <div className="container mx-auto p-4">
                <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded w-full"
                />
                {Object.keys(groupedData).map((category, catIndex) => (
                    <div key={catIndex} className="mb-6">
                        <h2 className="text-xl font-bold mb-1 ">{category}</h2>
                        {groupedData[category].map((item, index) => (
                            <div key={index} className="mb-2">
                                <Accordion alwaysOpen={false}>
                                    <Accordion.Panel>
                                        <Accordion.Title onClick={() => togglePanel(category, index)}>
                                            {highlightText(item.title, searchQuery)}
                                        </Accordion.Title>
                                        {openPanels[category]?.[index] && (
                                            <Accordion.Content>
                                                <p className="text-gray-500 dark:text-gray-400 Inter">
                                                    {handleText(highlightText(item.content, searchQuery))}
                                                </p>
                                            </Accordion.Content>
                                        )}
                                    </Accordion.Panel>
                                </Accordion>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
