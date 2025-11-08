import { InstrumentLayout } from "@/components/InstrumentLayout";
import { ContentSection } from "@/components/ContentSection";

const DhanurYantra = () => {
  return (
    <InstrumentLayout
      title="Dhanur Yantra"
      subtitle="The bow-shaped instrument that revolutionized angular measurement in the 5th century"
    >
      <ContentSection title="Definition & Origin" icon="📖">
        <p>
          The Dhanur Yantra derives its name from the Sanskrit word "Dhanur," meaning "bow," 
          owing to its distinctive semi-circular, bow-like shape. This elegant instrument represents 
          one of the most significant contributions to astronomical measurement in ancient times.
        </p>
        <p className="mt-4">
          <strong>Invention:</strong> The Dhanur Yantra was invented by the legendary mathematician and astronomer 
          Aryabhatta in the 5th century CE (476-550 CE). Aryabhatta, who lived during the classical age of Indian 
          mathematics and astronomy, revolutionized the field with his innovative instruments and groundbreaking 
          mathematical concepts, including the concept of zero and accurate calculations of π (pi).
        </p>
      </ContentSection>

      <ContentSection title="How It Works" icon="🏹">
        <p>
          The Dhanur Yantra consists of a semi-circular disk with a movable pointer or sight that pivots from 
          the center of the arc. This design allows for precise measurement of angles up to 180 degrees.
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">1.</span>
            <p>The semi-circular arc is graduated with angular measurements, typically in degrees</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">2.</span>
            <p>A movable pointer rotates about the center point of the arc</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">3.</span>
            <p>Sighting mechanisms on the pointer allow precise alignment with celestial objects</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">4.</span>
            <p>The angle is read where the pointer intersects the graduated arc</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">5.</span>
            <p>The instrument can be oriented in various positions for different types of measurements</p>
          </div>
        </div>
        <p className="mt-4">
          The semi-circular design was particularly ingenious because it provided a large measuring arc while 
          maintaining portability and ease of use. The bow shape also provided structural rigidity, ensuring 
          that measurements remained consistent over time.
        </p>
      </ContentSection>

      <ContentSection title="Historical Use & Applications" icon="🌟">
        <p>
          Aryabhatta and subsequent astronomers used the Dhanur Yantra for numerous crucial astronomical observations 
          and calculations:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li><strong>Measuring Celestial Altitudes:</strong> Determining the height of celestial bodies above the horizon</li>
          <li><strong>Calculating Local Time:</strong> Using the sun's position to determine accurate local time</li>
          <li><strong>Direction-Finding:</strong> Establishing cardinal directions and azimuths</li>
          <li><strong>Tracking Planetary Motion:</strong> Observing and recording the movements of planets</li>
          <li><strong>Eclipse Predictions:</strong> Making calculations necessary for predicting solar and lunar eclipses</li>
          <li><strong>Latitude Determination:</strong> Calculating geographical latitude through celestial observations</li>
        </ul>
        <p className="mt-4">
          The precision afforded by the Dhanur Yantra enabled Aryabhatta to make astronomical calculations of 
          remarkable accuracy. He correctly calculated the length of the solar year as 365.25858 days, which is 
          extraordinarily close to modern measurements. He also accurately calculated the Earth's circumference 
          and understood that the Earth rotates on its axis, explaining the apparent movement of stars.
        </p>
      </ContentSection>

      <ContentSection title="Aryabhatta's Legacy" icon="✨">
        <p>
          Aryabhatta's contributions to astronomy and mathematics, supported by instruments like the Dhanur Yantra, 
          laid the foundation for Indian mathematical astronomy for centuries to come. His work influenced scholars 
          across Asia and eventually reached Europe through Arabic translations.
        </p>
        <p className="mt-4">
          The Dhanur Yantra exemplifies how elegant design can enhance scientific precision. Its bow-like shape 
          was not merely aesthetic but served functional purposes in terms of structural stability and measuring accuracy. 
          This synthesis of form and function represents a hallmark of ancient Indian scientific instrumentation.
        </p>
      </ContentSection>

      <ContentSection title="Modern Recognition" icon="🎓">
        <p>
          Today, Aryabhatta is recognized worldwide as one of the greatest mathematicians and astronomers in history. 
          India's first satellite, launched in 1975, was named "Aryabhatta" in his honor. The Dhanur Yantra, 
          along with his other innovations, stands as a testament to the advanced state of scientific knowledge 
          in 5th-century India.
        </p>
        <p className="mt-4">
          Reconstructions of the Dhanur Yantra in modern museums demonstrate that this ancient instrument can still 
          produce accurate measurements, proving that the principles of good scientific design transcend time and technology.
        </p>
      </ContentSection>
    </InstrumentLayout>
  );
};

export default DhanurYantra;
