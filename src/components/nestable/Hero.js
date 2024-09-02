import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const Hero = ({ blok }) => {
  const buttonUrl = blok.button.cached_url || blok.button.url;

  return (
    <section {...storyblokEditable(blok)} className="hero-section">
      <div className="hero-text-container">
        <h1 className="text-3xl font-bold mb-4">{blok.title}</h1>
        <p className="mb-4">{blok.text}</p>
        {buttonUrl && (
          <Link href={buttonUrl} legacyBehavior>
            <a
              className="hero-button"
              target={blok.new_tab ? '_blank' : '_self'}
              rel={blok.new_tab ? 'noopener noreferrer' : ''}
            >
              {blok.label || 'Default Button Text'}
            </a>
          </Link>
        )}
      </div>
      {blok.image && (
        <div className="hero-image-container">
          <Image
            src={blok.image.filename}
            alt={blok.title || "Hero Image"}
            width={800}
            height={400}
            className="hero-image w-full h-auto"
          />
        </div>
      )}
    </section>
  );
};

export default Hero;