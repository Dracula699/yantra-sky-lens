import { InstrumentLayout } from "@/components/InstrumentLayout";
import { ContentSection } from "@/components/ContentSection";

const Micrometer = () => {
  return (
    <InstrumentLayout
      title="Micrometer Screw Gauge"
      subtitle="The ultimate precision instrument for measuring microscopic dimensions with extraordinary accuracy"
      visualContent={
        <div className="text-muted-foreground text-center p-6">
          <p className="text-sm">📷 Add your image or 3D model here</p>
        </div>
      }
    >
      <ContentSection title="Definition & Introduction" icon="📖">
        <p>
          The Micrometer Screw Gauge, commonly referred to simply as a micrometer, is a precision measuring 
          instrument designed for measuring extremely small dimensions with exceptional accuracy. It can typically 
          measure to an accuracy of 0.01mm (10 micrometers) or 0.001 inch, making it approximately ten times 
          more precise than a Vernier Caliper.
        </p>
        <p className="mt-4">
          The micrometer employs a calibrated screw mechanism as its fundamental operating principle. 
          This screw mechanism converts rotational motion into precise linear motion, allowing for 
          measurements that would be impossible to achieve with traditional measuring scales alone.
        </p>
        <p className="mt-4">
          <strong>Historical Development:</strong> While the precise screw principle has been known since ancient times, 
          the modern micrometer was developed in the 17th century and refined significantly in the 19th century 
          during the Industrial Revolution. French mechanic Jean Laurent Palmer patented a practical micrometer 
          design in 1848, though earlier versions existed. The instrument became essential for the precision 
          manufacturing required in the machine age.
        </p>
      </ContentSection>

      <ContentSection title="How It Works - The Screw Principle" icon="⚙️">
        <p>
          The micrometer's operation is based on the precise relationship between rotational and linear motion 
          in a carefully manufactured screw thread:
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">1.</span>
            <p><strong>Frame (C-Frame):</strong> A rigid U-shaped body that provides structural support</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">2.</span>
            <p><strong>Anvil:</strong> A fixed measuring face against which the object is placed</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">3.</span>
            <p><strong>Spindle:</strong> A movable measuring face attached to a precisely threaded screw</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">4.</span>
            <p><strong>Sleeve (Barrel):</strong> Contains the main scale graduated in millimeters or tenths of an inch</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">5.</span>
            <p><strong>Thimble:</strong> Rotates around the sleeve and contains the fine adjustment scale</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">6.</span>
            <p><strong>Ratchet Stop:</strong> Ensures consistent measuring pressure to avoid over-tightening</p>
          </div>
        </div>
        <p className="mt-4">
          <strong>The Precision Mechanism:</strong> In a typical metric micrometer, the screw has a pitch of 0.5mm, 
          meaning one complete rotation of the thimble moves the spindle exactly 0.5mm. The thimble is divided into 
          50 equal divisions, so each division represents 0.01mm (0.5mm ÷ 50 = 0.01mm). This mechanical advantage 
          allows visual discrimination of movements that would be invisible on a regular scale.
        </p>
      </ContentSection>

      <ContentSection title="Reading a Micrometer" icon="📏">
        <p>
          Reading a micrometer involves combining readings from two scales:
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">Step 1:</span>
            <p><strong>Main Scale Reading:</strong> Read the last visible mark on the sleeve (in whole millimeters)</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">Step 2:</span>
            <p><strong>Half-Millimeter Check:</strong> If the half-millimeter line is visible, add 0.5mm</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">Step 3:</span>
            <p><strong>Thimble Reading:</strong> Read the division on the thimble that aligns with the reference line</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold-accent font-semibold">Step 4:</span>
            <p><strong>Calculate Total:</strong> Add all readings together: Main Scale + Half mm (if visible) + Thimble Reading</p>
          </div>
        </div>
        <p className="mt-4">
          <strong>Example:</strong> If the main scale shows 5mm, the half-millimeter line is visible, 
          and the thimble reads 28, the measurement would be: 5.0mm + 0.5mm + 0.28mm = 5.78mm
        </p>
      </ContentSection>

      <ContentSection title="Types of Micrometers" icon="🔧">
        <p>
          Micrometers come in various specialized designs for different applications:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li><strong>Outside Micrometer:</strong> Most common type, measures external dimensions</li>
          <li><strong>Inside Micrometer:</strong> Measures internal dimensions like hole diameters</li>
          <li><strong>Depth Micrometer:</strong> Measures the depth of holes, slots, and recesses</li>
          <li><strong>Blade Micrometer:</strong> Has narrow anvil and spindle for measuring small slots</li>
          <li><strong>Digital Micrometer:</strong> Electronic display for easier reading and data recording</li>
          <li><strong>Screw Thread Micrometer:</strong> Specialized for measuring thread pitch diameter</li>
          <li><strong>Tube Micrometer:</strong> Cylindrical anvil for measuring tube wall thickness</li>
        </ul>
      </ContentSection>

      <ContentSection title="Applications" icon="🔬">
        <p>
          The micrometer's exceptional precision makes it indispensable in fields requiring 
          exact measurements:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li><strong>Mechanical Engineering:</strong> Measuring machined parts, checking tolerances on precision components</li>
          <li><strong>Manufacturing:</strong> Quality control of mass-produced parts, ensuring dimensional accuracy</li>
          <li><strong>Tool and Die Making:</strong> Creating and verifying precision tooling and dies</li>
          <li><strong>Aerospace:</strong> Measuring critical aircraft components where precision is safety-critical</li>
          <li><strong>Automotive:</strong> Engine component measurement, bearing clearances, brake measurements</li>
          <li><strong>Laboratory Work:</strong> Scientific research requiring precise dimensional measurements</li>
          <li><strong>Watchmaking:</strong> Measuring tiny components in precision timepieces</li>
          <li><strong>Medical Devices:</strong> Quality control of surgical instruments and implants</li>
        </ul>
        <p className="mt-4">
          In modern CNC machining and quality control, digital micrometers can interface with computer systems 
          for statistical process control, enabling real-time monitoring of manufacturing precision.
        </p>
      </ContentSection>

      <ContentSection title="Proper Use & Care" icon="⚠️">
        <p><strong>Best Practices:</strong></p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Clean both the anvil and spindle faces before each measurement</li>
          <li>Use the ratchet stop to ensure consistent measuring pressure</li>
          <li>Check the zero reading before taking measurements</li>
          <li>Allow temperature stabilization - micrometers are sensitive to thermal expansion</li>
          <li>Never force the thimble - let the ratchet stop determine when to stop</li>
          <li>Take multiple readings and average them for best results</li>
          <li>Store in a protective case to prevent damage and contamination</li>
          <li>Have the instrument calibrated regularly against known standards</li>
        </ul>
        <p className="mt-4">
          <strong>Common Errors to Avoid:</strong> Over-tightening (crushing soft materials or damaging the screw), 
          parallax error when reading, temperature effects, dirt on measuring surfaces, and assuming zero error is absent.
        </p>
      </ContentSection>

      <ContentSection title="Legacy & Modern Technology" icon="✨">
        <p>
          The micrometer screw gauge represents a pinnacle of mechanical precision measurement. 
          Its design demonstrates how simple mechanical principles, when executed with precision, 
          can achieve remarkable accuracy.
        </p>
        <p className="mt-4">
          While modern technology has introduced laser measurement systems and coordinate measuring machines (CMMs) 
          that can achieve even greater precision, the micrometer remains relevant for several reasons:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Portability and ease of use in field situations</li>
          <li>No power requirements for mechanical versions</li>
          <li>Tactile feedback that experienced operators value</li>
          <li>Lower cost compared to advanced measurement systems</li>
          <li>Reliability and robustness in harsh environments</li>
        </ul>
        <p className="mt-4">
          The micrometer exemplifies how mechanical ingenuity can extend human sensory capabilities. 
          It transformed manufacturing by making precision accessible, enabling the Industrial Revolution's 
          advance and continuing to serve as an essential tool in the age of precision engineering. 
          Every student of engineering, manufacturing, or precision measurement must master this 
          fundamental instrument that bridges human dexterity with microscopic precision.
        </p>
      </ContentSection>
    </InstrumentLayout>
  );
};

export default Micrometer;
