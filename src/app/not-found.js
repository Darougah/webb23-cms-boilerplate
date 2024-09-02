// export default function NotFound() {
//     //Fetch the 404 page from storyblok (this component works as server component aswell)
//     //update this component to render a 404 page
//     return (
//         <div className="flex items-center justify-center h-screen">
//           <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
//         </div>
//       );
//     }


import { StoryblokCMS } from "@/utils/cms";
import StoryblokStory from "@storyblok/react/story";

export default async function NotFound() {
  try {
    // Försök att hämta 404-sidan från Storyblok
    const errorPageSlug = "404"; // Slug för 404-sidan i Storyblok
    const currentStory = await StoryblokCMS.getStory({ slug: [errorPageSlug] });

    // Om 404-sidan finns, rendera den
    if (currentStory) {
      return (
        <div>
          <StoryblokStory story={currentStory} />
        </div>
      );
    }
  } catch (error) {
    console.error("Error fetching 404 page:", error);
  }

  // Om något går fel eller sidan inte finns, visa en standard 404-sida
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    </div>
  );
}
