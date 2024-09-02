// import Layout from "@/components/layout";
// import "./globals.css";
// import StoryblokProvider from "@/providers/StoryblokProvider";
// import { StoryblokCMS } from "@/utils/cms";
// import { storyblokInit, apiPlugin } from "@storyblok/react";

// storyblokInit({
//   accessToken: StoryblokCMS.TOKEN,
//   use: [apiPlugin],
// });

// export default async function RootLayout({ children }) {
//   // Fetch the config from Storyblok
//   const currentConfig = await StoryblokCMS.getConfig();

//   return (
//     <StoryblokProvider>
//       <html lang="en">
//         <body>
//           {/* Pass the config to the Layout component */}
//           <Layout config={currentConfig}>
//             {children}
//           </Layout>
//         </body>
//       </html>
//     </StoryblokProvider>
//   );
// }


import Layout from "@/components/layout";
import "./globals.css";
import StoryblokProvider from "@/providers/StoryblokProvider";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import ClientPathCheck from "./ClientPathCheck";

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
});

export default async function RootLayout({ children }) {
  const currentConfig = await StoryblokCMS.getConfig();
  const notFoundBlock = currentConfig?.content?.body?.find(block => block.component === "404") || {};

  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
          <Layout config={currentConfig}>
            <ClientPathCheck notFoundBlock={notFoundBlock}>
              {children}
            </ClientPathCheck>
          </Layout>
        </body>
      </html>
    </StoryblokProvider>
  );
}
