import Image from "next/image";
import { MapPin, BadgeCheck } from "lucide-react";
import { FadeIn } from "./FadeIn";

const team = [
  {
    name: "Renee Walsh",
    title: "Florida EMF Assessment Specialist",
    subtitle: "Healthy Home Consultant · White Glove Exteriors",
    bio: "Renee brings a health-first perspective to every assessment. Trained in Dr. Carlos Ritter's assessment methods and measurement protocols, she specializes in helping Florida families understand their home environment and take meaningful steps toward better health and sleep.",
    photo: "/images/team/renee-walsh.jpg",
    badges: ["Dr. Ritter Trained", "Certified Specialist", "Naples, FL"],
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
            People Hire People
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text mb-5 tracking-tight">
            Meet the Florida Team
          </h2>
          <p className="text-text-2 text-lg max-w-2xl mx-auto">
            Local, available, and deeply invested in the health of Florida
            families. We bring expertise, professionalism, and genuine care to
            every home we visit.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="flex justify-center">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-border rounded-2xl overflow-hidden max-w-2xl w-full shadow-[0_1px_6px_rgba(0,0,0,0.05)]"
            >
              <div className="grid md:grid-cols-2">
                {/* Photo */}
                <div className="relative aspect-square md:aspect-auto md:min-h-96 bg-bg-alt">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>

                {/* Info */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-1">
                    <h3 className="text-2xl font-semibold text-text">{member.name}</h3>
                    <p className="text-text-2 font-medium mt-1">{member.title}</p>
                    <p className="text-text-muted text-sm mt-0.5">{member.subtitle}</p>
                  </div>

                  <div className="border-t border-border my-5" />

                  <p className="text-text-2 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.badges.map((badge) => (
                      <span
                        key={badge}
                        className="flex items-center gap-1.5 text-xs font-medium text-accent bg-accent-light border border-accent/15 px-3 py-1 rounded-full"
                      >
                        <BadgeCheck className="w-3 h-3" />
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-text-muted text-sm">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>Serving Naples &amp; Southwest Florida</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </FadeIn>

        {/* Values row */}
        <FadeIn delay={0.25}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10 max-w-2xl mx-auto">
            {["Local & Available", "Family-Oriented", "Education First", "Trusted Expertise"].map(
              (value) => (
                <div
                  key={value}
                  className="text-center py-3.5 px-3 rounded-xl border border-border bg-white"
                >
                  <span className="text-sm font-medium text-text-2">{value}</span>
                </div>
              )
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
