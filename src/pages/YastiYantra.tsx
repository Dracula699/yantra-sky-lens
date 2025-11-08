import { InstrumentLayout } from "@/components/InstrumentLayout";
import { ContentSection } from "@/components/ContentSection";

const YastiYantra = () => {
  return (
    <InstrumentLayout
      title="Yasti Yantra"
      subtitle="The foundational angular measuring instrument that bridged observation and mathematics"
    >
      <ContentSection title="Definition" icon="📖">
        <p>
          The Yasti Yantra is an ancient angular measuring instrument whose name derives from the Sanskrit word "Yasti," 
          meaning "rod" or "staff." This simple yet ingenious device represents one of the earliest attempts to systematically 
          measure angles in the celestial sphere.
        </p>
        <p className="mt-4">
          Despite its apparent simplicity, the Yasti Yantra embodies profound mathematical principles and demonstrates 
          the sophisticated understanding of geometry that ancient Indian scholars possessed. It served as a fundamental 
          tool for astronomical observations and laid the groundwork for more complex measuring instruments.
        </p>
      </ContentSection>

      <ContentSection title="How It Works" icon="📐">
        <p>
          The Yasti Yantra operates as a basic sighting device for making angular measurements of celestial objects. 
          Its design incorporates principles that would later influence the development of theodolites and other surveying instruments.
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">1.</span>
            <p>A vertical staff or rod serves as the primary sighting axis</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">2.</span>
            <p>Graduated markings along the staff enable angular measurements</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">3.</span>
            <p>A movable sighting arm allows alignment with celestial objects</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">4.</span>
            <p>The intersection point determines the angular position</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Evolution & Mathematical Foundation" icon="🔢">
        <p>
          The Yasti Yantra represents a crucial link between physical measurements and trigonometric principles. 
          Ancient Indian mathematicians recognized that angular measurements could be related to geometric ratios, 
          leading to the development of sophisticated trigonometric tables.
        </p>
        <p className="mt-4">
          This instrument demonstrated that:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Angular positions could be precisely quantified using simple geometric principles</li>
          <li>Physical measurements could be converted into mathematical relationships</li>
          <li>Systematic observation required standardized measuring tools</li>
          <li>The connection between terrestrial and celestial measurements could be established</li>
        </ul>
      </ContentSection>

      <ContentSection title="Historical Use & Applications" icon="🌟">
        <p>
          Ancient astronomers employed the Yasti Yantra for various critical measurements:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Measuring the angular heights of celestial bodies above the horizon</li>
          <li>Determining the zenith distances of stars and planets</li>
          <li>Calculating the altitude of the sun at different times of day</li>
          <li>Establishing reference points for astronomical observations</li>
          <li>Training students in the fundamentals of angular measurement</li>
        </ul>
        <p className="mt-4">
          The data collected using Yasti Yantras contributed to the development of astronomical tables and calendars, 
          helping ancient societies track time, predict seasons, and organize agricultural activities with remarkable precision.
        </p>
      </ContentSection>

      <ContentSection title="Legacy in Modern Science" icon="✨">
        <p>
          The principles embodied in the Yasti Yantra continue to influence modern measuring instruments. 
          The concept of using a graduated scale with a movable sighting mechanism forms the basis of many contemporary tools, 
          from theodolites to sextants.
        </p>
        <p className="mt-4">
          This ancient instrument reminds us that scientific progress builds upon fundamental principles, 
          and that the quest for precision measurement has been a constant throughout human history, 
          transcending cultures and epochs.
        </p>
      </ContentSection>
    </InstrumentLayout>
  );
};

export default YastiYantra;
