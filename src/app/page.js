// import { StoryblokCMS } from "@/utils/cms";
// import { notFound } from "next/navigation";
// import StoryblokStory from "@storyblok/react/story";

// export async function generateMetadata() {
//   return StoryblokCMS.generateMetaFromStory("home");
// }

// export default async function StartPage({}) {
//   try {
//     const currentStory = await StoryblokCMS.getStory({ slug: ["home"] });
//     if (!currentStory) throw new Error();

//     return <StoryblokStory story={currentStory} />;
//   } catch (error) {
//     notFound();
//   }
// }
// export const dynamic = StoryblokCMS.isDevelopment ? "force-dynamic" : "force-static";

import { StoryblokCMS } from "@/utils/cms";
import StoryblokStory from "@storyblok/react/story";

export async function generateMetadata() {
  return StoryblokCMS.generateMetaFromStory("home");
}

export default async function StartPage() {
  try {
    const currentStory = await StoryblokCMS.getStory({ slug: ["home"] });
    if (!currentStory) {
      return (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          <p>Sorry, the homepage could not be found.</p>
        </div>
      );
    }

    return <StoryblokStory story={currentStory} />;
  } catch (error) {
    console.error("Error fetching homepage:", error);
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p>Sorry, something went wrong while fetching the homepage.</p>
      </div>
    );
  }
}

export const dynamic = StoryblokCMS.isDevelopment ? "force-dynamic" : "force-static";
