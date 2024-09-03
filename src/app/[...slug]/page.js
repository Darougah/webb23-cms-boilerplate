import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";
import { StoryblokCMS } from "@/utils/cms";

//Generates static paths for all stories
//Nextjs will generate a static page for each story
export async function generateStaticParams() {
  try {
    const paths = await StoryblokCMS.getStaticPaths();
    return paths;
  } catch (error) {
    console.log(error);
  }
}

//Generates static meta props for each story
export async function generateMetadata({params}) {
  const slug = params.slug.join("/");
  return StoryblokCMS.generateMetaFromStory(slug);
}

//Params are passed to the CMSPage component and used to fetch the story
//This function is called for each item in the paths array returned from generateStaticParams func
export default async function CMSPage({ params }) {
  try {
    const currentStory = await StoryblokCMS.getStory(params);
    if (!currentStory) throw new Error();

    return <StoryblokStory story={currentStory} />;
  } catch (error) {
    notFound();
  }
}

//Force dynamic rendering in development and Visual editor
export const dynamic = StoryblokCMS.isDevelopment
  ? "force-dynamic"
  : "force-static";


// import StoryblokStory from "@storyblok/react/story";
// import { StoryblokCMS } from "@/utils/cms";

// // Generates static paths for all stories
// // Next.js will generate a static page for each story
// export async function generateStaticParams() {
//   try {
//     const paths = await StoryblokCMS.getStaticPaths();
//     return paths;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // Generates static meta props for each story
// export async function generateMetadata({ params }) {
//   const slug = params.slug.join("/");
//   return StoryblokCMS.generateMetaFromStory(slug);
// }

// // Params are passed to the CMSPage component and used to fetch the story
// // This function is called for each item in the paths array returned from generateStaticParams function
// export default async function CMSPage({ params }) {
//   try {
//     const currentStory = await StoryblokCMS.getStory(params);
//     return <StoryblokStory story={currentStory} />;
//   } catch (error) {
//     console.error("Error fetching story:", error);
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <h1 className="text-4xl font-bold">Something went wrong</h1>
//         <p>Sorry, something went wrong while fetching the story.</p>
//       </div>
//     );
//   }
// }

// // Force dynamic rendering in development and Visual editor
// export const dynamic = StoryblokCMS.isDevelopment
//   ? "force-dynamic"
//   : "force-static";
