import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Header from "./Header"; 
import Footer from "./Footer"; 

const Config = ({ blok }) => {
  // Extract the header and footer content from blok
  const headerContent = blok.header && blok.header[0];
  const footerContent = blok.footer && blok.footer[0];

  return (
    <div {...storyblokEditable(blok)}>
      {/* Render the Header and Footer components with the appropriate content */}
      {headerContent && <Header blok={headerContent} />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-6">
          {/* You can include additional content or components here */}
          {/* Example: Nested blocks */}
          {blok.body?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
      {footerContent && <Footer blok={footerContent} />}
    </div>
  );
};

export default Config;


// import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
// import Header from "./Header"; 
// import Footer from "./Footer"; 

// const Config = ({ blok }) => {
//   // Safely extract header and footer content
//   const headerContent = blok.header?.[0];
//   const footerContent = blok.footer?.[0];

//   return (
//     <div {...storyblokEditable(blok)}>
//       {/* Render Header if available */}
//       {headerContent && <Header blok={headerContent} />}
      
//       {/* Main content area */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="py-6">
//           {/* Render nested blocks */}
//           {blok.body?.map((nestedBlok) => (
//             <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
//           ))}
//         </div>
//       </div>

//       {/* Render Footer if available */}
//       {footerContent && <Footer blok={footerContent} />}
//     </div>
//   );
// };

// export default Config;

