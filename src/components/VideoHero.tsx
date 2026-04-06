"use client";

import Link from 'next/link';

export default function VideoHero() {
  return (
    <Link href="/pages" className="video-hero-link">
      <section className="video-hero-section">
        <video
          className="video-hero"
          src="/Video/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/header.jpg"
        />
        <div className="video-overlay" />
      </section>
    </Link>
  );
}
