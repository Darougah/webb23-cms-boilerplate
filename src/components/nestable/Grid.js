import { storyblokEditable } from "@storyblok/react";
import ImageWithText from "./ImageWithText";

const Grid = ({ blok }) => {


  return (
    <div {...storyblokEditable(blok)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blok.Blocks?.map((nestedBlok) => (
        <ImageWithText blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
