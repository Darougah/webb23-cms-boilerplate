import { StoryblokCMS } from "@/utils/cms";
import StoryblokStory from "@storyblok/react/story";
import Header from "@/components/nestable/Header";
import Footer from "@/components/nestable/Footer";

export async function generateMetadata() {
  return StoryblokCMS.generateMetaFromStory("home");
}

export default async function StartPage() {
  try {
    // Fetch the homepage story
    const currentStory = await StoryblokCMS.getStory({ slug: ["home"] });
    
    // Fetch the config story that includes header and footer
    const configStory = await StoryblokCMS.getConfig();
    
    // Extract header and footer blocks from the config story
    const headerBlock = configStory?.content?.body?.find(block => block.component === "header");
    const footerBlock = configStory?.content?.body?.find(block => block.component === "footer");

    return (
      <div>
        {/* Render the header if it exists */}
        {headerBlock && <Header blok={headerBlock} />}
        
        {/* Render the main story content */}
        <StoryblokStory story={currentStory} />
        
        {/* Render the footer if it exists */}
        {footerBlock && <Footer blok={footerBlock} />}
      </div>
    );
  } catch (error) {
    console.error("Error fetching homepage:", error);
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Something went wrong</h1>
        <p>Sorry, something went wrong while fetching the homepage.</p>
      </div>
    );
  }
}

export const dynamic = StoryblokCMS.IS_DEV ? "force-dynamic" : "force-static";
