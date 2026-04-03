import Image from "next/image";

const logos = [
  { src: "/next.svg", alt: "Next.js Logo" },
  { src: "/vercel.svg", alt: "Vercel Logo" },
  { src: "/cart-icon.svg", alt: "Globe Logo" },
];

export default function LogoStrip() {
  return (
    <section className="logo-strip" aria-label="Logo strip">
      <div className="site-shell">
        <div className="logo-strip-grid">
          {logos.map((logo) => (
            <div className="logo-strip-item" key={logo.src}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={36}
                className="logo-strip-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
