export default function FeaturedInterview() {
  return (
    <section className="relative py-16 lg:py-24 bg-brand-surface overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] text-white uppercase">
              Featured Interview
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
            Electrical Poisoning:{" "}
            <span className="text-gradient">The Hidden EMF Threat</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            An expert interview covering what EMF really does inside your home
            — and why most Florida families don&apos;t know what they&apos;re being exposed to.
          </p>
        </div>

        {/* Video player */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-brand-card">
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

        {/* CTA below video */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-white/8">
          <p className="text-slate-400 text-sm">
            Concerned about your home&apos;s EMF levels? A professional assessment gives you real data.
          </p>
          <a
            href="#contact"
            className="btn-electric shrink-0 font-semibold px-6 py-3 rounded-xl text-sm"
          >
            Schedule My Assessment
          </a>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
