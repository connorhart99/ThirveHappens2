import Canvas from './Canvas';
import CardSlider from './CardSlider';
import Card from './Card';

// Service items data
const services = [
  {
    title: 'Platform Speaker',
    description: 'Engaging and impactful keynote presentations on resilience, leadership, and personal growth.',
    image: "/assets/platform speaker.jpg"
  },
  {
    title: 'Executive Coaching',
    description: 'Personalized coaching to help leaders develop resilience strategies and overcome challenges.',
    image: "/assets/executive coaching.jpg"
  },
  {
    title: 'Resilience Workshops',
    description: 'Interactive workshops that provide practical tools for building resilience in various contexts.',
    image: "/assets/resillience workshops.jpg"
  },
  {
    title: 'Media',
    description: 'Expert commentary, interviews, and content creation on topics related to resilience and leadership.',
    image: "/assets/media.jpg"
  }
];

export default function ServicesCanvas() {
  const renderServiceCard = (service: any, idx: number, isActive: boolean) => (
    <Card
      key={idx}
      title={service.title}
      isActive={isActive}
      imageUrl={service.image}
    >
      <p className="text-sm md:text-base text-white/80">{service.description}</p>
    </Card>
  );

  return (
    <Canvas id="services">
      <CardSlider 
        items={services}
        renderCard={renderServiceCard}
        title="Our Services"
      />
    </Canvas>
  );
} 