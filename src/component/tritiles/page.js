import Link from 'next/link';
import { Navbar, Button, Card } from 'flowbite-react';
import Image from 'next/image';
import community from './community.png';
import search from './search.png'
import model from './model.png'

const cardContents = [
    {
      title: "Forum",
      description: "Our forum is in the works! No more need to search through Reddit, Facebook, and Discord to find answers. Made for both parents and students alike.",
      buttonText: "Forum Coming Soon",
      imgAlt: "image 1",
      imgSrc: community, // Assign the imported image for the first card
      href: "",
    },
    {
      title: "Resources and FAQ",
      description: "Our Resources section has any frequently asked questions for quick browsing of common information. Anything not found? Visit our forum and ask!",
      buttonText: "FAQ and Resources",
      imgAlt: "image 2",
      imgSrc: search, // Assign a different imported image for the second card
      href: "../resources",
    },
    {
      title: "Dorms",
      description: "Explore, with RPI Xplore. Visit our dorm explore page and see all our dorm information to date. Why us? Made by students, our website has everything we believe you'll need.",
      buttonText: "Browse Dorms",
      imgAlt: "image 3",
      imgSrc: model, // And another for the third
      href: "../dorms",
    },
  ];
  
  export default function Tritiles() {
    return (
      <div className="flex justify-center space-x-4 mt-4 mx-4">
        {cardContents.map((content, index) => (
          <Card
            key={index}
            className="max-w-xs"
            renderImage={() => (
              <div className="w-full h-full" style={{ height: '100%', overflow: 'hidden' }}>
                <Image
                  width={300}
                  height={200}
                  src={content.imgSrc}
                  alt={content.imgAlt}
                  className="w-full h-full rounded-lg"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
          >
            <h5 className="text-2xl font-bold text-black">{content.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-0">
              {content.description}
            </p>
            <div>
                    
            </div>
            <Button as={Link} href={content.href}>
              {content.buttonText}
              <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        ))}
      </div>
    );
  }