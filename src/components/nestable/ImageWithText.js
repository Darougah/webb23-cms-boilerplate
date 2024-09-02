import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";

const ImageWithText = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="image-with-text flex flex-col items-center space-y-4">
      {blok.image && blok.image.filename ? (
        <Image
          src={blok.image.filename}
          alt={blok.title || "Image"}
          width={300}
          height={200}
          style={{ width: 'auto', height: 'auto' }} // Ensures that the aspect ratio is maintained
          className="flex-shrink-0"
        />
      ) : (
        <div>No Image Available</div>
      )}
      <div className="text-content">
        <h2 className="text-xl font-bold">{blok.title}</h2>
        <p>{blok.text}</p>
      </div>
    </div>
  );
};

export default ImageWithText;

