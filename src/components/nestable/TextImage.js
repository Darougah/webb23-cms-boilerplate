import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";
import { richTextResolver } from "@storyblok/richtext";

const TextImage = ({ blok }) => {
  // Render the rich text using the richTextResolver
  const richTextHTML = richTextResolver().render(blok.rich_text);

  return (
    <section {...storyblokEditable(blok)} className="text-image-section">
      <div className="text-content">
        {blok.title && <h2>{blok.title}</h2>}
        <div dangerouslySetInnerHTML={{ __html: richTextHTML }} />
      </div>
      {blok.image && (
        <div className="image-container">
          <Image
            src={blok.image.filename}
            alt={blok.image.alt || "Image"}
            width={blok.image.width || 600}
            height={blok.image.height || 400}
            className="object-cover"
          />
        </div>
      )}
    </section>
  );
};

export default TextImage;
