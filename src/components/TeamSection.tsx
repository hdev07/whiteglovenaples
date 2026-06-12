import Image from "next/image";
import { MapPin, BadgeCheck, Heart } from "lucide-react";

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
    <section id="team" className="relative py-24 lg:py-32 bg-brand-surface overflow-hidden">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-150 h-150 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.025) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 mb-5">
            <Heart className="w-3.5 h-3.5 text-white" />
            <span className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
              People Hire People
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Meet the <span className="text-gradient">Florida Team</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Local, available, and deeply invested in the health of Florida
            families. We bring expertise, professionalism, and genuine care to
            every home we visit.
          </p>
        </div>

        {/* Team card */}
        <div className="flex justify-center">
          {team.map((member) => (
            <div
              key={member.name}
              className="glass-card rounded-3xl overflow-hidden max-w-2xl w-full"
            >
              <div className="grid md:grid-cols-2">
                {/* Photo */}
                <div className="relative aspect-square md:aspect-auto md:min-h-100 bg-linear-to-br from-white/5 to-slate-800/30 flex items-center justify-center">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center opacity-30">
                      <div className="w-24 h-24 rounded-full bg-white/10 border border-white/20 mx-auto mb-3 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-brand-card to-transparent" />
                </div>

                {/* Info */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-1">
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-slate-200 font-medium mt-0.5">{member.title}</p>
                    <p className="text-slate-500 text-sm mt-1">{member.subtitle}</p>
                  </div>

                  <div className="section-divider my-5" />

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.badges.map((badge) => (
                      <span
                        key={badge}
                        className="flex items-center gap-1.5 text-xs font-medium text-white bg-white/8 border border-white/15 px-3 py-1 rounded-full"
                      >
                        <BadgeCheck className="w-3 h-3" />
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                    <MapPin className="w-3.5 h-3.5 text-white/40" />
                    <span>Serving Naples &amp; Southwest Florida</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
          {["Local & Available", "Family-Oriented", "Education First", "Trusted Expertise"].map(
            (value) => (
              <div
                key={value}
                className="text-center py-4 px-3 rounded-xl border border-white/10 bg-white/3"
              >
                <span className="text-sm font-medium text-slate-300">{value}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
