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
    description: 'Scott Hanley, a native of Belfast and former British Army officer, brings a unique blend of military leadership and personal triumph to his resilience work. Diagnosed with Parkinson\'s in 2017, he faced debilitating symptoms including muscle rigidity, tremors, and cognitive decline.',
    image: "/assets/our-founder.jpeg"
  },
  {
    title: 'The Journey',
    description: 'Through intentional mindset and expectation discipline, along with functional fitness and lifestyle choices, Scott achieved the \'impossible\' and reversed his symptoms. He is now 3+ years symptom-free and continues to Thrive despite facing a previously incurable condition.',
    image: "/assets/the-journey.jpeg"
  },
  {
    title: 'The Impact',
    description: 'Combining military service experience with his lived experience of overcoming Parkinson\'s Disease, Scott now works with individuals and business leaders to cultivate habits that support both physical and mental performance, inspiring them to strive to Thrive.',
    image: "/assets/the-impact.jpeg"
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