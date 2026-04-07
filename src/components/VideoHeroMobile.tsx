"use client";

import Link from 'next/link';

export default function VideoHeroMobile() {
  return (
    <Link href="/pages" className="video-hero-link">
      <section className="video-hero-section-mobile">
        <video
          className="video-hero"
          src="/Video/video.mp4"
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="video-overlay" />
      </section>
    </Link>
  );
}
