import { InstrumentLayout } from "@/components/InstrumentLayout";
import { ContentSection } from "@/components/ContentSection";

const VernierCaliper = () => {
  return (
    <InstrumentLayout
      title="Vernier Caliper"
      subtitle="The precision measuring tool that revolutionized accurate length measurement"
    >
      <ContentSection title="Definition & Origin" icon="📖">
        <p>
          The Vernier Caliper is a precision measuring instrument used for measuring internal and external lengths, 
          depths, and in some cases, step measurements with high accuracy. It consists of two scales: a main scale 
          and a sliding Vernier scale that provides precise fractional readings.
        </p>
        <p className="mt-4">
          <strong>Inventor:</strong> The Vernier scale was invented by French mathematician Pierre Vernier in 1631. 
          Vernier was seeking a way to improve the accuracy of angular measurements on quadrants and astronomical 
          instruments. His innovation allowed readings to be made with much greater precision than was possible 
          with the main scale alone.
        </p>
        <p className="mt-4">
          The Vernier Caliper as we know it today evolved from Vernier's original concept, combining his sliding 
          scale principle with caliper jaws to create a versatile measuring tool that has become indispensable in 
          engineering, science, and manufacturing.
        </p>
      </ContentSection>

      <ContentSection title="How It Works" icon="🔧">
        <p>
          The Vernier Caliper operates on an ingenious principle that allows measurements to a fraction of the 
          smallest division on the main scale:
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">1.</span>
            <p><strong>Main Scale:</strong> The fixed scale provides the primary measurement in millimeters or inches</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">2.</span>
            <p><strong>Vernier Scale:</strong> A sliding scale with divisions slightly smaller than the main scale divisions</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">3.</span>
            <p><strong>Jaws:</strong> Upper jaws for measuring internal dimensions and lower jaws for external measurements</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">4.</span>
            <p><strong>Depth Probe:</strong> An extending bar for measuring depth of holes or recesses</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">5.</span>
            <p><strong>Locking Screw:</strong> Secures the sliding scale in position for reading</p>
          </div>
        </div>
        <p className="mt-4">
          <strong>Reading Principle:</strong> The measurement is taken by adding the main scale reading to the 
          fractional reading from the Vernier scale. The Vernier scale division that aligns perfectly with a 
          main scale division indicates the fractional component. Standard Vernier calipers can measure to 
          0.02mm or 0.001 inch accuracy.
        </p>
      </ContentSection>

      <ContentSection title="Step-by-Step Measurement Process" icon="📏">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">Step 1:</span>
            <p>Close the jaws completely and check that the zero marks align (zero error check)</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">Step 2:</span>
            <p>Place the object to be measured between the appropriate jaws</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">Step 3:</span>
            <p>Gently tighten the jaws until they just touch the object without applying pressure</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">Step 4:</span>
            <p>Lock the sliding scale with the locking screw</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">Step 5:</span>
            <p>Read the main scale value at the zero mark of the Vernier scale</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">Step 6:</span>
            <p>Find the Vernier division that aligns with a main scale division</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">Step 7:</span>
            <p>Add the Vernier reading to the main scale reading for the final measurement</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Applications" icon="🔬">
        <p>
          The Vernier Caliper has become one of the most widely used precision measuring instruments across 
          numerous fields:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li><strong>Engineering:</strong> Measuring dimensions of machined parts, checking tolerances</li>
          <li><strong>Science Labs:</strong> Precise measurement of specimens, equipment components</li>
          <li><strong>Medical Tools:</strong> Measuring bone structures, dental applications, medical implants</li>
          <li><strong>Manufacturing:</strong> Quality control, dimensional verification of products</li>
          <li><strong>Jewelry Making:</strong> Measuring gemstones and precious metal dimensions</li>
          <li><strong>Education:</strong> Teaching precision measurement techniques in physics and engineering</li>
          <li><strong>Woodworking:</strong> Fine measurement for joinery and detailed work</li>
        </ul>
        <p className="mt-4">
          Modern variations include dial calipers (with a dial gauge instead of a Vernier scale) and 
          digital calipers (with electronic display), but all operate on the same fundamental principle 
          invented by Pierre Vernier nearly 400 years ago.
        </p>
      </ContentSection>

      <ContentSection title="Advantages & Limitations" icon="⚖️">
        <p><strong>Advantages:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>High precision (±0.02mm typical accuracy)</li>
          <li>Versatile - can measure internal, external, and depth dimensions</li>
          <li>No power required (for manual versions)</li>
          <li>Relatively inexpensive compared to other precision tools</li>
          <li>Portable and easy to use</li>
        </ul>
        <p className="mt-4"><strong>Limitations:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Requires skill and practice to read accurately</li>
          <li>Subject to parallax error if not read carefully</li>
          <li>Less precise than micrometers for very small dimensions</li>
          <li>Can be affected by temperature variations</li>
        </ul>
      </ContentSection>

      <ContentSection title="Legacy & Modern Evolution" icon="✨">
        <p>
          Pierre Vernier's innovation has stood the test of time, remaining relevant for nearly four centuries. 
          While the basic principle remains unchanged, modern technology has enhanced the Vernier Caliper's 
          capabilities:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Digital displays eliminate reading errors and provide instant metric/imperial conversion</li>
          <li>Data output capabilities allow integration with computer systems for quality control</li>
          <li>Improved materials and manufacturing ensure better accuracy and durability</li>
          <li>Specialized designs for specific industries and applications</li>
        </ul>
        <p className="mt-4">
          The Vernier Caliper exemplifies how a simple yet brilliant concept can have enduring practical value. 
          It remains one of the most taught instruments in science and engineering education worldwide, 
          introducing students to the principles of precision measurement that underlie all modern technology.
        </p>
      </ContentSection>
    </InstrumentLayout>
  );
};

export default VernierCaliper;
