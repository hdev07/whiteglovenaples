import type { Metadata } from "next";
import VideoLandingPlayer from "@/components/VideoLandingPlayer";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { featuredVideo, qrVideoPath } from "@/lib/videos";

const pageUrl = `${site.url}${qrVideoPath}`;

export const metadata: Metadata = {
  title: featuredVideo.title,
  description:
    "Watch the featured EMF interview from White Glove Exteriors — what electrical exposure means for Florida homes.",
  alternates: { canonical: qrVideoPath },
  openGraph: {
    type: "video.other",
    url: pageUrl,
    title: featuredVideo.title,
    description: site.description,
    images: featuredVideo.poster
      ? [{ url: featuredVideo.poster, alt: featuredVideo.title }]
      : undefined,
  },
  robots: { index: true, follow: true },
};

const videoLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: featuredVideo.title,
  description: site.description,
  thumbnailUrl: featuredVideo.poster,
  contentUrl: featuredVideo.mp4,
  embedUrl: pageUrl,
  uploadDate: "2025-01-01",
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
};

export default function VideoPage() {
  return (
    <>
      <JsonLd data={videoLd} />
      <VideoLandingPlayer video={featuredVideo} />
    </>
  );
}
