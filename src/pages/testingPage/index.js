import Jumbotron2 from '../../component/JumbotronWithText/page.js';


export default function Home() {
  return (
    <div>
      <Jumbotron2
        titleText="Welcome to RPXplore!"
        subtitleText="Explore the campus and learn more about what it has to offer."
        lowerText="Explore, with RPXplore"
        backgroundImage="/images/your-image-name.jpg" // Replace with actual image path
      />
    </div>
  );
}
