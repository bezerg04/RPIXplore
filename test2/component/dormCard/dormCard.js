import { Card } from 'flowbite-react';

const DormCard = ({ dormData }) => {
  const { dormName, dormType, dormLink, dormSize } = dormData; 

  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={dormLink}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {dormName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {dormType}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7H7m2 3H7m2 3H7m4 2v2m3-2v2m3-2v2M4 5v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-9a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1Z"/>
      </svg>
      {dormSize}

      </p>
      {/* Example usage of dormLink and dormSize, remove or update according to your needs */}
      {/* <a href={dormLink} className="text-blue-600 hover:underline">More info</a>
      <p className="text-sm text-gray-600">{dormSize} sqft</p> */}
    </Card>
  );
};

export default DormCard;
