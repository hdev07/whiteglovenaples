import { FadeIn } from "./FadeIn";

export default function FeaturedInterview() {
  return (
    <section className="py-16 lg:py-24 bg-bg-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center mb-10">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
            Featured Interview
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text mb-3 tracking-tight">
            Electrical Poisoning: The Hidden EMF Threat
          </h2>
          <p className="text-text-2 max-w-xl mx-auto leading-relaxed">
            An expert interview covering what EMF really does inside your home
            — and why most Florida families don&apos;t know what they&apos;re being exposed to.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="rounded-xl overflow-hidden border border-border shadow-sm bg-white">
            <video
              controls
              preload="metadata"
              poster="https://static.arkengine.com/video/cmfr5xpwd00fvvaq7mratlzho/thumbnail/ELECTRICAL_POISONING_THE_HIDDEN_EMF_THREAT_CLEAN_1758305844501.jpg"
              className="w-full aspect-video"
            >
              <source
                src="https://static.arkengine.com/video/cmfr5xpwd00fvvaq7mratlzho/file/mp4/ELECTRICAL%20POISONING_THE%20HIDDEN%20EMF%20THREAT_EP_442.mp4"
                type="video/mp4"
              />
              <source
                src="https://static.arkengine.com/video/cmfr5xpwd00fvvaq7mratlzho/file/hls/ELECTRICAL%20POISONING_THE%20HIDDEN%20EMF%20THREAT_EP_442.m3u8"
                type="application/vnd.apple.mpegurl"
              />
            </video>
          </div>
        </FadeIn>

        <FadeIn
          delay={0.25}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-border"
        >
          <p className="text-text-2 text-sm">
            Concerned about your home&apos;s EMF levels? A professional assessment gives you real data.
          </p>
          <a
            href="#contact"
            className="btn-primary shrink-0 font-semibold px-6 py-3 rounded-lg text-sm"
          >
            Schedule My Assessment
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
