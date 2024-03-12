import { Card } from 'flowbite-react';

const DormCard = ({ dormData }) => {
  const { dormName, dormType, dormLink, dormSize } = dormData; 

  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/blog/image-1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {dormName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {dormType}
      </p>
      {/* Example usage of dormLink and dormSize, remove or update according to your needs */}
      {/* <a href={dormLink} className="text-blue-600 hover:underline">More info</a>
      <p className="text-sm text-gray-600">{dormSize} sqft</p> */}
    </Card>
  );
};

export default DormCard;
