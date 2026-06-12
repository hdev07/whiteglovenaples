import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

type Article = {
  title: string;
  subtitle: string;
  description: string;
  sections: { heading: string; body: string }[];
  cta: string;
};

const articles: Record<string, Article> = {
  "what-are-emfs": {
    title: "What Are EMFs?",
    subtitle: "Understanding Electromagnetic Fields in Your Home",
    description:
      "Electromagnetic fields (EMFs) are invisible areas of energy that surround all electrical devices and wiring. Learn what they are, where they come from, and why they matter for your family's health.",
    sections: [
      {
        heading: "The Basics",
        body: "Electromagnetic fields are generated any time electricity flows — through power lines, household wiring, appliances, or wireless devices. They exist on a spectrum ranging from extremely low frequency (ELF) fields produced by your home's wiring all the way to radiofrequency (RF) radiation emitted by cell phones, WiFi routers, and smart meters.",
      },
      {
        heading: "Types of EMF Exposure in Your Home",
        body: "Electric fields form around any powered device, even when it is not in active use. Magnetic fields appear when current is actually flowing, and tend to penetrate walls and building materials easily. RF radiation is emitted by wireless devices — routers, cell phones, baby monitors, smart appliances — and travels through the air and through walls. Dirty electricity is a fourth category: high-frequency voltage transients that ride along your home's wiring and can radiate into living spaces.",
      },
      {
        heading: "Documented Health Concerns",
        body: "A growing body of peer-reviewed research links chronic, elevated EMF exposure to disrupted sleep architecture, increased oxidative stress at the cellular level, hormonal changes (particularly melatonin suppression), and cognitive effects. The World Health Organization classifies RF radiation as a Class 2B possible human carcinogen. Children and pregnant women are considered most vulnerable due to thinner skulls and higher rates of cell division.",
      },
      {
        heading: "Why Your Home Matters More Than Ever",
        body: "Americans now spend over 90 percent of their time indoors, and the density of wireless devices inside homes has increased dramatically in the past decade. A single-family home today may contain dozens of EMF-emitting devices, all operating simultaneously. Without measurement, it is impossible to know where the highest exposure zones are — and they are often in the spaces where families spend the most time: bedrooms, nurseries, and living rooms.",
      },
      {
        heading: "The First Step: Measurement",
        body: "The only reliable way to understand your personal exposure is professional measurement with calibrated instruments. Visual inspection of a home cannot reveal magnetic field hotspots, RF levels, or dirty electricity — these require specific meters and trained interpretation. A White Glove EMF assessment provides a room-by-room picture of your actual exposure, ranked by health risk, with a clear mitigation plan.",
      },
    ],
    cta: "Schedule a Home EMF Assessment",
  },
  "dirty-electricity": {
    title: "Dirty Electricity",
    subtitle: "The Hidden Pollutant in Your Wiring",
    description:
      "Dirty electricity refers to high-frequency voltage transients that contaminate standard 60 Hz power. It's one of the most overlooked EMF sources inside homes — and one of the most correctable.",
    sections: [
      {
        heading: "What Is Dirty Electricity?",
        body: "Standard household current in the U.S. runs at 60 Hz — a smooth, low-frequency sine wave. Dirty electricity consists of high-frequency spikes and surges (typically 2 kHz to 100 kHz) that are superimposed on that waveform. These transients travel along your home's wiring and can radiate EMFs into the living space, even from outlets that are not in use.",
      },
      {
        heading: "Common Sources in Modern Homes",
        body: "LED lighting and CFL bulbs are among the biggest contributors — their electronic drivers chop the incoming current, creating significant high-frequency noise. Solar inverters, HVAC variable-speed drives, dimmer switches, switching power supplies (the bricks that power laptops and phone chargers), and smart meters all inject similar transients into the wiring. The more energy-efficient the device, the more likely it is to generate dirty electricity.",
      },
      {
        heading: "Health Research",
        body: "Dr. Samuel Milham and Magda Havas have published research linking elevated dirty electricity levels to higher rates of fatigue, headaches, difficulty concentrating, irritability, and blood sugar disruption. Havas's work in Canadian schools showed measurable improvements in behavior and teacher wellbeing after dirty electricity filters were installed. Farmers have documented similar effects on livestock productivity in high-dirty-electricity environments.",
      },
      {
        heading: "Measurement",
        body: "Dirty electricity is measured with a line noise meter — a device that plugs into a standard outlet and reads the high-frequency content of the power. Readings are expressed in Graham-Stetzer (GS) units. Values below 50 GS are generally considered acceptable; many homes in Florida test between 200 and 2,000 GS, with some exceeding 5,000 GS near solar inverters or in older wiring.",
      },
      {
        heading: "Mitigation",
        body: "Passive plug-in filters (Stetzerizer or GreenWave style) can suppress transients at the outlet level. Replacing dimmer switches with standard on/off switches eliminates a common local source. In some cases, replacing LED bulbs with low-EMF incandescent or halogen alternatives in critical sleeping spaces produces a measurable reduction. A professional assessment identifies your highest-impact sources and recommends the most cost-effective combination of filters and changes.",
      },
    ],
    cta: "Test Your Home for Dirty Electricity",
  },
  "smart-meters": {
    title: "Smart Meters",
    subtitle: "What Utility Smart Meters Emit and What You Can Do",
    description:
      "Smart meters replaced analog utility meters across most of Florida over the past decade. Unlike analog meters, they transmit usage data wirelessly — and that transmission happens far more frequently than most utility companies disclose.",
    sections: [
      {
        heading: "How Smart Meters Work",
        body: "A smart meter records your electricity usage in real time and transmits that data to your utility via a mesh radio network. The meters operate in the 900 MHz or 2.4 GHz band — the same frequencies used by WiFi and cell phones. Transmissions happen on a schedule set by the utility, but also in response to neighboring meters relaying data through your meter, which means the total pulse count is often far higher than advertised.",
      },
      {
        heading: "Pulse Frequency: The Disclosure Gap",
        body: "Utility companies often claim meters transmit 'a few times per day.' Independent researchers using RF data loggers have consistently recorded between 10,000 and 190,000 pulses per day from smart meters — one every few seconds. Each pulse is brief, but the cumulative daily RF dose at close range is comparable to prolonged cell phone use. The meter's location matters enormously: a meter on an exterior wall adjacent to a bedroom or nursery is far more concerning than one on a garage.",
      },
      {
        heading: "Health Concerns",
        body: "The California Medical Association passed a resolution in 2017 calling for a moratorium on smart meter deployment and independent health research. Reported symptoms near smart meters include sleep disruption, tinnitus, headaches, heart palpitations, and concentration difficulties. These symptoms match the profile of radiofrequency sensitivity documented in peer-reviewed literature. Children and people who spend significant time near the meter are at highest exposure risk.",
      },
      {
        heading: "Florida Opt-Out Options",
        body: "FPL and Duke Energy Florida offer analog meter opt-outs, typically with an initial fee and a monthly charge for manual reading. If your current meter was recently upgraded, you may be within the window to request an analog replacement without penalty. The process varies by utility and rate class — a professional assessment documents your current RF levels and gives you the data needed to make the case to your utility.",
      },
      {
        heading: "Shielding If You Cannot Opt Out",
        body: "When an opt-out is not available or cost-prohibitive, RF shielding can significantly reduce the signal reaching interior spaces. Metalized shielding fabric applied to the wall behind the meter, combined with careful furniture placement in the adjacent room, can reduce indoor RF levels by 90 percent or more. White Glove measures before and after installation so you can verify the reduction with data.",
      },
    ],
    cta: "Measure Your Smart Meter's RF Output",
  },
  "cell-tower-proximity": {
    title: "Cell Tower Proximity",
    subtitle: "RF Radiation from Nearby Towers and What It Means for Your Home",
    description:
      "The expansion of 4G LTE and 5G infrastructure has placed more cell antennas closer to residential neighborhoods than ever before. Proximity and line-of-sight are the two biggest factors in your home's background RF level.",
    sections: [
      {
        heading: "How Distance and Angle Affect Exposure",
        body: "RF radiation from a cell tower follows an inverse-square relationship: doubling your distance from the source reduces power density by four times. A home 150 meters from a tower with direct line-of-sight may have outdoor RF levels 100–1,000 times higher than a home 1,500 meters away. Building materials provide varying degrees of attenuation — concrete blocks more RF than wood framing; single-pane windows block almost none.",
      },
      {
        heading: "The 5G Small Cell Difference",
        body: "Traditional macro towers transmit from 50–200 feet in the air and serve a wide area. 5G small cells operate at higher frequencies (millimeter wave and mid-band), use beamforming antennas, and are mounted on utility poles, traffic lights, and building facades — often 15–30 feet off the ground and directly at the level of upper-story windows. Homes near small cell deployments may experience RF levels that older measurement guidelines never anticipated.",
      },
      {
        heading: "Measurement Units and Reference Levels",
        body: "RF power density is measured in microwatts per square meter (µW/m²) or milliwatts per square meter (mW/m²). The FCC's public exposure limit is 10,000,000 µW/m². However, the Building Biology guidelines — developed by European physicians and researchers — set a 'slight concern' threshold at 1,000 µW/m² and 'severe concern' at 100,000 µW/m², reflecting the precautionary principle. Many independent researchers believe chronic exposure above 1,000 µW/m² warrants action, particularly in sleeping areas.",
      },
      {
        heading: "Who Is Most at Risk",
        body: "Families in homes within 500 meters of a macro tower or within 100 meters of a 5G small cell should prioritize measurement. Upper-floor bedrooms with windows facing towers receive substantially more exposure than ground-floor rooms. People with autoimmune conditions, children, pregnant women, and anyone experiencing unexplained sleep disruption or neurological symptoms in their home are candidates for a professional RF assessment.",
      },
      {
        heading: "Shielding Solutions",
        body: "Low-E window films, RF-blocking shielding paint, and metalized shielding fabric can reduce incoming RF by 99 percent or more when applied correctly. Effectiveness depends on frequency, application coverage, and grounding. Improperly applied shielding can create internal reflections that raise exposure in other areas of the room — professional measurement before and after is essential to confirm the reduction.",
      },
    ],
    cta: "Assess Your Home's RF Exposure",
  },
  "healthy-bedroom-guide": {
    title: "Healthy Bedroom Guide",
    subtitle: "Creating a Low-EMF Sleep Environment",
    description:
      "We spend roughly one-third of our lives in the bedroom. It's the most important room to optimize for low EMF exposure — and often the room with the highest levels. Here's how to build a healthier sleep environment.",
    sections: [
      {
        heading: "Why the Bedroom Matters Most",
        body: "Sleep is the body's primary repair and detoxification window. Melatonin, the hormone that regulates sleep and acts as a powerful antioxidant, is acutely suppressed by RF and blue-light exposure. Studies show that even modest, chronic disruption of sleep architecture — the kind documented near EMF sources — correlates with impaired immune function, metabolic changes, and accelerated cellular aging. Optimizing the bedroom is the highest-leverage EMF intervention in most homes.",
      },
      {
        heading: "Step 1 — Measure Before You Change Anything",
        body: "Without baseline measurements, you don't know what you're solving for. A professional assessment documents RF levels, AC magnetic fields, electric fields, and dirty electricity in your sleeping area before any changes are made. This gives you a ranked list of sources and tells you exactly how far each factor deviates from Building Biology guidelines.",
      },
      {
        heading: "Step 2 — Remove or Relocate the Biggest Sources",
        body: "WiFi routers in or adjacent to bedrooms are responsible for some of the highest continuous RF exposures in residential settings. Moving the router to a central hallway or a room not used for sleeping reduces exposure significantly without affecting coverage in most homes. Baby monitors — especially DECT digital monitors — transmit constantly at close range and should be replaced with wired alternatives or video monitors with an EMF-off mode.",
      },
      {
        heading: "Step 3 — Address Wiring and Electric Fields",
        body: "Bedroom wiring emits electric fields that can be absorbed by the body during sleep, especially through metal bed frames and box springs, which act as antennas. Turning off the circuit breaker to the bedroom at night eliminates electric field exposure from the wiring itself. Alternatively, demand switches — which automatically cut power to a circuit when no load is detected — achieve the same result without manual breaker operation.",
      },
      {
        heading: "Step 4 — Medical-Grade Grounding",
        body: "Earthing or grounding connects the body to the Earth's natural negative charge via a conductive mat, sheet, or patch connected to a grounded outlet or a ground stake. Clinical studies have shown reductions in cortisol, improvements in sleep stage distribution, and reduced inflammatory markers in grounded subjects. White Glove installs professional grounding systems verified against the outlet ground reference and confirmed with body voltage measurements before and after.",
      },
      {
        heading: "Step 5 — Verify the Results",
        body: "After changes are made, a follow-up measurement confirms which interventions produced the largest reductions and whether any secondary sources need to be addressed. Many clients are surprised to find that a neighbor's router, a smart meter on an adjacent wall, or an outdoor transformer is the dominant source — something only post-mitigation measurement can reveal.",
      },
    ],
    cta: "Schedule a Bedroom EMF Assessment",
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything You Need to Know About Our EMF Assessments",
    description:
      "Answers to the questions we hear most often from Southwest Florida homeowners considering a professional EMF assessment.",
    sections: [
      {
        heading: "What is a professional EMF assessment?",
        body: "A White Glove EMF assessment is a comprehensive, room-by-room inspection of your home using calibrated professional instruments. We measure all four categories of EMF: radiofrequency (RF) radiation from wireless devices and cell towers, AC magnetic fields from wiring and appliances, AC electric fields from wiring and outlets, and dirty electricity (high-frequency transients on your power lines). Every reading is compared against Building Biology guidelines, and you receive a written report with prioritized mitigation recommendations.",
      },
      {
        heading: "How long does an assessment take?",
        body: "A typical single-family home assessment takes 2.5 to 4 hours. Larger homes, multi-story properties, or homes with complex EMF environments (solar systems, multiple smart meters, nearby cell infrastructure) may take longer. We walk through every room, measuring at sleeping positions, seating areas, and high-use zones. We explain our findings as we go, so by the end of the visit you have a clear picture of your home's EMF environment.",
      },
      {
        heading: "What areas of Southwest Florida do you serve?",
        body: "We serve Naples, Marco Island, Bonita Springs, Estero, Fort Myers, Cape Coral, and surrounding communities throughout Collier and Lee counties. We also travel for assessments in Sarasota and Charlotte counties — contact us to confirm availability for your location.",
      },
      {
        heading: "Do I need to do anything to prepare?",
        body: "Keep your home in its normal operating state. Leave WiFi routers, appliances, and smart devices powered on as they would normally be. Do not move furniture or unplug devices before we arrive — the goal is to measure your everyday exposure, not an artificially cleaned-up version of it. Make note of any symptoms you've noticed (sleep disruption, headaches, fatigue) and when or where they tend to occur — this helps us focus on the most likely sources.",
      },
      {
        heading: "What happens after the assessment?",
        body: "You receive a written report within 48 hours detailing every measurement, the corresponding Building Biology guideline, and a prioritized list of recommended actions. Items are ranked by health impact and cost-effectiveness, from free behavioral changes (relocating a router, turning off a circuit) to professional shielding installations. We offer a follow-up measurement after any shielding work to confirm the reduction in writing.",
      },
      {
        heading: "Can you also do the shielding installation?",
        body: "Yes. White Glove provides end-to-end service: assessment, shielding design, installation, and verification. We install RF-blocking window films, shielding paint, metalized fabric panels, dirty electricity filters, demand switches, and medical-grade grounding systems. All installations include before-and-after measurements so you can see exactly how much each intervention reduced your exposure.",
      },
      {
        heading: "How do I schedule?",
        body: "Call us at 239-375-7090 or use the contact form on this site. We'll confirm your address, discuss your primary concerns, and schedule a time that works for your household. Assessments are available Monday through Saturday.",
      },
    ],
    cta: "Book Your Assessment",
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: `${article.title} | White Glove Exteriors`,
    description: article.description,
  };
}

export default async function LearnPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-[#FAFAF8] min-h-screen">
        {/* Hero */}
        <div className="bg-[#0D1117] pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-white/35 hover:text-white/60 text-xs font-medium tracking-wide uppercase mb-8 transition-colors"
            >
              ← Home
            </Link>
            <p className="text-[#4A9DB5] text-xs font-semibold uppercase tracking-widest mb-3">
              EMF Education
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              {article.subtitle}
            </p>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <p className="text-[#555552] text-lg leading-relaxed mb-12 border-l-2 border-[#1E3A4C] pl-5">
            {article.description}
          </p>

          <div className="space-y-12">
            {article.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                  {section.heading}
                </h2>
                <p className="text-[#555552] leading-relaxed text-base">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#0D1117] rounded-2xl p-8 sm:p-10 text-center">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">
              Next Step
            </p>
            <h3 className="text-white text-2xl font-bold mb-2">
              {article.cta}
            </h3>
            <p className="text-white/40 text-sm mb-7">
              Serving Naples &amp; Southwest Florida · Calibrated professional instruments · Written report included
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/#contact"
                className="btn-light font-semibold text-sm px-7 py-3 rounded-lg w-full sm:w-auto"
              >
                Schedule an Assessment
              </a>
              <a
                href="tel:2393757090"
                className="btn-outline-light font-semibold text-sm px-7 py-3 rounded-lg w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                239-375-7090
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
