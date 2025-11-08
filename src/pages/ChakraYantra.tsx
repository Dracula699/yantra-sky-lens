import { InstrumentLayout } from "@/components/InstrumentLayout";
import { ContentSection } from "@/components/ContentSection";

const ChakraYantra = () => {
  return (
    <InstrumentLayout
      title="Chakra Yantra"
      subtitle="The wheel-shaped instrument that revolutionized celestial tracking in ancient India"
      visualContent={
        <div className="text-muted-foreground text-center p-6">
          <p className="text-sm">📷 Add your image or 3D model here</p>
        </div>
      }
    >
      <ContentSection title="Definition" icon="📖">
        <p>
          "Chakra" means "wheel" or "circle" in Sanskrit, and this instrument embodies that circular form. 
          The Chakra Yantra is one of the most elegant astronomical instruments developed in ancient India, 
          featuring rotating discs or rings that could be aligned to track celestial bodies with remarkable precision.
        </p>
        <p className="mt-4">
          This instrument represents the sophisticated understanding of circular motion and angular measurement 
          that ancient Indian astronomers possessed, allowing them to map the heavens with unprecedented accuracy.
        </p>
      </ContentSection>

      <ContentSection title="How It Works" icon="⚙️">
        <p>
          The Chakra Yantra operates on the principle of rotating discs or rings mounted concentrically. 
          Each ring can rotate independently, allowing observers to align different components with various celestial objects.
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">1.</span>
            <p>The outer ring represents the horizon and is marked with degree measurements</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">2.</span>
            <p>Inner rings can be rotated to align with specific celestial bodies</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">3.</span>
            <p>Sighting mechanisms on the rings allow precise angular measurements</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">4.</span>
            <p>The circular design enables continuous tracking of celestial motion</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Historical Use & Applications" icon="🌟">
        <p>
          Ancient Indian astronomers used the Chakra Yantra extensively to track celestial bodies across the night sky. 
          The instrument was particularly valuable for:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Tracking the paths of planets and their retrograde motions</li>
          <li>Measuring the angular separation between stars</li>
          <li>Determining the positions of constellations throughout the year</li>
          <li>Calculating the timing of eclipses and other astronomical events</li>
          <li>Creating accurate star charts and celestial maps</li>
        </ul>
        <p className="mt-4">
          The precision of the Chakra Yantra enabled ancient astronomers to make predictions about celestial events 
          that were remarkably accurate, contributing to the development of the Indian astronomical calendar system 
          and advancing our understanding of planetary motion.
        </p>
      </ContentSection>

      <ContentSection title="Legacy" icon="✨">
        <p>
          The principles embodied in the Chakra Yantra influenced the development of more sophisticated astronomical 
          instruments in later centuries. Its circular design and rotating mechanism became a template for various 
          observational tools, and its influence can be seen in the great observatories built by Raja Jai Singh II 
          in the 18th century.
        </p>
        <p className="mt-4">
          Today, the Chakra Yantra stands as a testament to the advanced state of scientific knowledge in ancient India, 
          demonstrating that precision measurement and systematic observation were well-established practices long before 
          the modern scientific era.
        </p>
      </ContentSection>
    </InstrumentLayout>
  );
};

export default ChakraYantra;
