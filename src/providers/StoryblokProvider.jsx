// "use client";
// import { StoryblokCMS } from "@/utils/cms";
// import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
// import Page from "@/components/content-types/Page";
// import Teaser from "@/components/nestable/Teaser";
// import RichTextDefault from "@/components/nestable/RichText";
// import Hero from "@/components/nestable/Hero.js";
// import Grid from "@/components/nestable/Grid.js";
// import Header from "@/components/nestable/Header.js";
// import ImageWithText from "@/components/nestable/ImageWithText.js";
// import Config from "@/components/nestable/config";
// import HeaderMenu from "@/components/nestable/HeaderMenu";
// import MenuLink from "@/components/nestable/MenuLink";
// import Footer from "@/components/nestable/Footer";
// import Newsletter from "@/components/nestable/Newsletter";
// import TextImage from "@/components/nestable/TextImage"; 

// const components = {
//   "page": Page,
//   "teaser":Teaser,
//   "richtext": RichTextDefault,
//   "hero": Hero,
//   "header":Header,
//   "imageWithText": ImageWithText,
//   "grid":Grid,
//   "config":Config,
//   "header_menu": HeaderMenu,
//   "menu_link": MenuLink,
//   "footer": Footer,
//   "newsletter": Newsletter,
//   "textImage": TextImage,
  
// }


// storyblokInit({
//   accessToken: StoryblokCMS.TOKEN,

//   use: [apiPlugin],
//   components
// });

// export default function StoryblokProvider({ children }) {
//   return (
//     children
//   );
// }


"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "@/components/content-types/Page";
import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import Hero from "@/components/nestable/Hero";
import Grid from "@/components/nestable/Grid";
import Header from "@/components/nestable/Header";
import ImageWithText from "@/components/nestable/ImageWithText";
import Config from "@/components/nestable/config";
import HeaderMenu from "@/components/nestable/HeaderMenu";
import MenuLink from "@/components/nestable/MenuLink";
import Footer from "@/components/nestable/Footer";
import Newsletter from "@/components/nestable/Newsletter";
import TextImage from "@/components/nestable/TextImage";

const components = {
  page: Page,
  teaser: Teaser,
  richtext: RichTextDefault,
  hero: Hero,
  header: Header,
  imageWithText: ImageWithText,
  grid: Grid,
  config: Config,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
  footer: Footer,
  newsletter: Newsletter,
  textImage: TextImage,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return <>{children}</>;
}
