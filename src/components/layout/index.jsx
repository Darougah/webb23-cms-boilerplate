import Header from "@/components/nestable/Header";
import Footer from "@/components/nestable/Footer";

const Layout = ({ children, config }) => {
  // Safely access the header and footer content from the config
  const headerBlok = config?.content?.header[0];
  const footerBlok = config?.content?.footer[0];

  return (
    <>
      {/* Render the header and footer if the config is present */}
      {headerBlok && <Header blok={headerBlok} />}
      <main>{children}</main>
      {footerBlok && <Footer blok={footerBlok} />}
    </>
  );
};

export default Layout;