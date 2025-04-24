import Canvas from './Canvas';
import CardSlider from './CardSlider';
import Card from './Card';

// Gallery images
const galleryImages = [
  {
    title: 'Corporate Resilience Training',
    description: 'Building resilience strategies in the workplace to thrive under pressure and manage challenging situations.',
    image: '/assets/gallery-1.jpeg'
  },
  {
    title: 'Leadership Workshop',
    description: 'Developing leadership skills through practical workshops focused on resilience and growth mindset.',
    image: '/assets/gallery-2.jpeg'
  },
  {
    title: 'Team Building Session',
    description: 'Interactive team activities designed to strengthen resilience and collaboration across organizations.',
    image: '/assets/gallery-3.jpeg'
  },
  {
    title: 'Keynote Presentation',
    description: 'Scott Hanley sharing his inspiring story and practical resilience techniques with large audiences.',
    image: '/assets/gallery-4.jpeg'
  },
  {
    title: 'Executive Coaching',
    description: 'One-on-one coaching sessions helping leaders develop personalized resilience strategies.',
    image: '/assets/gallery-5.jpeg'
  },
  {
    title: 'Media Appearances',
    description: 'Sharing expertise on resilience and growth mindset through various media channels.',
    image: '/assets/gallery-6.jpeg'
  }
];

export default function GalleryCanvas() {
  const renderGalleryCard = (item: any, idx: number, isActive: boolean) => (
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
    <Canvas id="gallery">
      <CardSlider 
        items={galleryImages}
        renderCard={renderGalleryCard}
        title="Gallery"
      />
    </Canvas>
  );
} 