import { storyblokEditable, renderRichText } from '@storyblok/react';
import Image from 'next/image';

const Footer = ({ blok }) => {
  if (!blok) {
    console.log('Footer component received undefined blok:', blok);
    return null;
  }

  const processedHtml = blok.copyright ? renderRichText(blok.copyright).replace(/style="[^"]*"/g, '') : '';

  return (
    <footer {...storyblokEditable(blok)} className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Logo */}
          {blok.logo && (
            <div className="mb-4 md:mb-0">
              <Image
                src={blok.logo.filename}
                alt={blok.logo.alt || 'Footer Logo'}
                width={150}
                height={75}
                style={{ width: 'auto', height: 'auto' }} 
                className="footer-logo"
              />
            </div>
          )}

          {/* Footer Menu */}
          <nav>
            <ul className="flex space-x-4 mb-4 md:mb-0">
              {Array.isArray(blok.footer_menu) && blok.footer_menu.map((link) => (
                <li key={link._uid}>
                  <a href={link.link.url || '#'} className="text-white hover:text-gray-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex space-x-4 items-center">
            {Array.isArray(blok.social_links) && blok.social_links.map((link) => (
              <a
                key={link._uid}
                href={link.link.length > 0 ? link.link.url : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 flex items-center space-x-2"
              >
                {link.icon?.filename && (
                  <Image
                    src={link.icon.filename}
                    alt={link.label || 'Social Icon'}
                    width={30}
                    height={30}
                    style={{ width: 'auto', height: 'auto' }} 
                    className="social-icon"
                  />
                )}
                {link.text && <span>{link.text}</span>}  {/* Text label for the social link */}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright Text */}
        <div className="text-center mt-4 footer-copyright">
          {processedHtml && (
            <div dangerouslySetInnerHTML={{ __html: processedHtml }} />
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
