import Link from 'next/link';
import { Navbar, Button, Card } from 'flowbite-react';
import Image from 'next/image';
import community from './community.png';
import search from './search.png'
import model from './model.png'

const cardContents = [
    {
      title: "Card 1 Title",
      description: "Here is the first card description. It contains specific information about the first item.",
      buttonText: "Read More 1",
      imgAlt: "image 1",
      imgSrc: community, // Assign the imported image for the first card
    },
    {
      title: "Card 2 Title",
      description: "This is the second card's description, highlighting different details or features.",
      buttonText: "Read More 2",
      imgAlt: "image 2",
      imgSrc: search, // Assign a different imported image for the second card
    },
    {
      title: "Card 3 Title",
      description: "Finally, the third card offers its own unique description, distinct from the first two.",
      buttonText: "Read More 3",
      imgAlt: "image 3",
      imgSrc: model, // And another for the third
    },
  ];
  
  export default function Tritiles() {
    return (
      <div className="flex justify-center space-x-4 mt-4 mx-4">
        {cardContents.map((content, index) => (
          <Card
            key={index}
            className="max-w-xs bg-black"
            renderImage={() => (
              <div className="flex justify-center" style={{ height: '66.66%', overflow: 'hidden' }}>
                <Image width={200} height={200} src={content.imgSrc} alt={content.imgAlt} style={{  objectFit: 'cover' }}/>
              </div>
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white mb-2">{content.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              {content.description}
            </p>
            <div>
                    
            </div>
            <Button>
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