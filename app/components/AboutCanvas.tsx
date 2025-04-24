import Canvas from './Canvas';
import CardSlider from './CardSlider';
import Card from './Card';

// About items data
const aboutItems = [
  {
    title: 'Our Mission',
    description: 'Building growth mindset, resilience and functional health in corporate, sports and community groups and within individuals. Ensuring Thrive Happens consistently even when Sh!* Happens.',
    image: "/assets/our-mission.jpeg"
  },
  {
    title: 'Our Focus',
    description: 'Excellence in resilience and growth mindset development. Thrive Happens aims to inspire, educate and develop individuals, teams and corporate management so that they thrive regardless of challenges.',
    image: "/assets/our-focus.jpeg"
  },
  {
    title: 'Our Founder',
    description: 'The principles and training are based on the Lived Experiences of Founder, Scott Hanley, who is internationally recognised for beating an incurable, degenerative, fatal Neurological disease.',
    image: "/assets/our-founder.jpeg"
  }
];

export default function AboutCanvas() {
  const renderAboutCard = (item: any, idx: number, isActive: boolean) => (
    <Card
      key={idx}
      title={item.title}
      isActive={isActive}
      imageUrl={item.image}
    >
      <p className="text-sm md:text-base text-white/80">{item.description}</p>
    </Card>
  );

  return (
    <Canvas id="about">
      <CardSlider
        items={aboutItems}
        renderCard={renderAboutCard}
        title="About Us"
      />
    </Canvas>
  );
} 