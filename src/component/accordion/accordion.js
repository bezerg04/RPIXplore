"use client";
import { Accordion as FlowbiteAccordion } from "flowbite-react";

export function Accordion({ children }) {
    return (
        <FlowbiteAccordion>
            {children}
        </FlowbiteAccordion>
    );
}
