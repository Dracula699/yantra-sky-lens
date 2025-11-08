import { InstrumentLayout } from "@/components/InstrumentLayout";
import { ContentSection } from "@/components/ContentSection";

const PhalakaYantra = () => {
  return (
    <InstrumentLayout
      title="Phalaka Yantra"
      subtitle="The flat disc instrument that brought unprecedented precision to celestial measurements"
    >
      <ContentSection title="Definition & Origin" icon="📖">
        <p>
          The Phalaka Yantra is a flat circular or square instrument whose name derives from "Phalaka," 
          meaning "board" or "tablet" in Sanskrit. This sophisticated measuring device represents a significant 
          advancement in astronomical instrumentation.
        </p>
        <p className="mt-4">
          <strong>Invention:</strong> The Phalaka Yantra was developed by Raja Jai Singh II in the 18th century CE 
          as part of his ambitious program to construct observatories across India. Raja Jai Singh II was a passionate 
          astronomer and mathematician who sought to improve upon existing instruments and create new tools for 
          more accurate celestial observations.
        </p>
      </ContentSection>

      <ContentSection title="How It Works" icon="⚙️">
        <p>
          The Phalaka Yantra employs a rotating sighting arm called an alidade, which moves across a graduated 
          circular or square plate. This design allows for highly precise angular measurements.
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">1.</span>
            <p>The flat base plate is inscribed with degree markings around its perimeter</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">2.</span>
            <p>The alidade (sighting arm) rotates about the center point of the plate</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">3.</span>
            <p>Sights on the alidade allow precise alignment with celestial objects</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">4.</span>
            <p>The angle is read where the alidade crosses the graduated scale</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">5.</span>
            <p>Multiple readings can be taken and averaged for greater accuracy</p>
          </div>
        </div>
        <p className="mt-4">
          The flat design of the instrument minimized parallax errors and allowed for easier reading of measurements 
          compared to earlier curved instruments. The large size of some Phalaka Yantras also contributed to their precision.
        </p>
      </ContentSection>

      <ContentSection title="Historical Use & Applications" icon="🌟">
        <p>
          Raja Jai Singh II installed Phalaka Yantras in his observatories at Jaipur, Delhi, Ujjain, Varanasi, and Mathura. 
          These instruments were used for a wide range of astronomical purposes:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Measuring the altitude of the sun and stars with unprecedented accuracy</li>
          <li>Determining precise positions of planets and their movements</li>
          <li>Creating accurate astronomical tables for calendar-making</li>
          <li>Verifying and correcting earlier astronomical observations</li>
          <li>Teaching astronomy and observational techniques to students</li>
          <li>Predicting eclipses and other astronomical phenomena</li>
        </ul>
        <p className="mt-4">
          The data collected using Phalaka Yantras was so accurate that it rivaled contemporary European observations, 
          demonstrating the high level of scientific sophistication in 18th-century India. These instruments played a 
          crucial role in refining the Indian astronomical calendar and improving navigation techniques.
        </p>
      </ContentSection>

      <ContentSection title="The Observatories of Jai Singh II" icon="🏛️">
        <p>
          Raja Jai Singh II's observatories, known as Jantar Mantars, housed multiple astronomical instruments including 
          the Phalaka Yantra. These observatories were architectural marvels that combined functionality with aesthetic beauty.
        </p>
        <p className="mt-4">
          The largest and best-preserved of these observatories in Jaipur features several massive stone instruments, 
          including variations of the Phalaka Yantra constructed at monumental scales. Some instruments were built so large 
          that observers could walk within them, allowing for measurements of unprecedented precision.
        </p>
      </ContentSection>

      <ContentSection title="Legacy & Modern Recognition" icon="✨">
        <p>
          The Phalaka Yantra and other instruments at Jai Singh II's observatories represent the culmination of 
          centuries of Indian astronomical knowledge. In 2010, the Jantar Mantar observatory in Jaipur was designated 
          a UNESCO World Heritage Site, recognizing its importance in the history of science.
        </p>
        <p className="mt-4">
          Today, these instruments continue to function and can still be used to make astronomical observations, 
          serving as both working scientific instruments and monuments to human ingenuity. They inspire scientists 
          and visitors alike, demonstrating that precision science and beautiful architecture can coexist harmoniously.
        </p>
      </ContentSection>
    </InstrumentLayout>
  );
};

export default PhalakaYantra;
