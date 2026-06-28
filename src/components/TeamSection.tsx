"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, BadgeCheck, ChevronRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

type TeamMember = {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  photo: string;
  badges: string[];
};

const members: TeamMember[] = [
  {
    name: "Renee Walsh",
    title: "Florida EMF Assessment Specialist",
    subtitle: "Healthy Home Consultant · White Glove Exteriors",
    bio: "Renee brings a health-first perspective to every assessment. Trained in advanced EMF assessment methods and measurement protocols, she helps Florida families understand their home environment and take meaningful steps toward better health and sleep.",
    photo: "/images/team/she.jpeg",
    badges: ["Certified Specialist", "Healthy Home Consultant", "Naples, FL"],
  },
  {
    name: "José Jaramillo ",
    title: "Principal · White Glove Exteriors",
    subtitle: "Field Operations & Client Experience",
    bio: "José Jaramillo leads on-site operations and ensures every project is delivered with the same rigor clients expect from our Texas partnership. From first consultation through installation and verification, he keeps the process clear, professional, and on schedule.",
    photo: "/images/team/he.jpeg",
    badges: ["Local Operations", "Installation Lead", "Southwest Florida"],
  },
];

const values = ["Local & Available", "Family-Oriented", "Education First", "Trusted Expertise"];

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [imgError, setImgError] = useState(false);
  const initials = member.name.split(" ").map((n) => n[0]).join("");

  return (
    <div className="glass-card overflow-hidden w-full">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-square md:aspect-auto md:min-h-[420px] bg-surface">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-[#008CFF]/10 border-2 border-[#008CFF]/25 flex items-center justify-center">
              <span className="text-4xl font-serif text-[#49B4FF]/70">{initials}</span>
            </div>
          </div>
          {!imgError && (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 420px"
              onError={() => setImgError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1524]/60 to-transparent md:bg-gradient-to-r" />
        </div>

        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <h3 className="font-serif text-3xl text-white">{member.name}</h3>
          <p className="text-[#49B4FF] font-medium mt-1.5">{member.title}</p>
          <p className="text-[#7D8BA0] text-sm mt-0.5">{member.subtitle}</p>

          <div className="border-t border-[rgba(255,255,255,0.08)] my-6" />

          <p className="text-[#AAB8C8] text-sm leading-relaxed mb-6">{member.bio}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {member.badges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-1.5 text-xs font-medium text-[#49B4FF] bg-[#008CFF]/10 border border-[#008CFF]/25 px-3 py-1 rounded-full"
              >
                <BadgeCheck className="w-3.5 h-3.5" />
                {badge}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[#7D8BA0] text-sm">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>Serving Naples &amp; Southwest Florida</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="py-[72px] md:py-[100px] lg:py-[160px] bg-bg-2/40">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Meet The Team</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white leading-tight mb-5">
            Your Florida team
          </h2>
          <p className="text-[#AAB8C8] text-lg leading-relaxed">
            Local, available, and deeply invested in the health of Florida families. We
            bring expertise, professionalism, and genuine care to every home we visit.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {members.map((member, idx) => (
            <FadeIn key={member.name} delay={0.12 + idx * 0.08} className="flex justify-center">
              <TeamMemberCard member={member} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10 max-w-3xl mx-auto">
            {values.map((value) => (
              <div
                key={value}
                className="text-center py-4 px-3 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-surface"
              >
                <span className="text-sm font-medium text-[#AAB8C8]">{value}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.28} className="text-center mt-10">
          <a href="#contact" className="btn btn-outline text-sm px-7 py-3.5 rounded-xl">
            Talk To The Team
            <ChevronRight className="w-4 h-4" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
