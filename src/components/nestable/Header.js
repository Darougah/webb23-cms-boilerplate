import Image from 'next/image';
import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react';

const Header = ({ blok }) => {
  if (!blok) {
    console.log('Header component received undefined blok:', blok);
    return null;
  }

  return (
    <header {...storyblokEditable(blok)} className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Render the logo */}
        {blok.logo && (
          <Image
            src={blok.logo.filename}
            alt={blok.logo.alt || 'Logo'}
            width={150} // Adjusted width
            height={50} // Adjusted height
            style={{ width: 'auto', height: 'auto' }} 
            className="logo"
          />
        )}

        {/* Render the navigation links */}
        <nav>
          <ul className="flex space-x-4">
            {/* Home Link */}
            {blok.home?.cached_url && (
              <li key={blok.home.id}>
                <Link href={`/${blok.home.cached_url}`} legacyBehavior>
                  <a className="text-white hover:text-gray-300">Home</a>
                </Link>
              </li>
            )}

            {/* About Link */}
            {blok.about?.cached_url && (
              <li key={blok.about.id}>
                <Link href={`/${blok.about.cached_url}`} legacyBehavior>
                  <a className="text-white hover:text-gray-300">About</a>
                </Link>
              </li>
            )}

            {/* Contact Link */}
            {blok.Contact?.cached_url && (
              <li key={blok.Contact.id}>
                <Link href={`/${blok.Contact.cached_url}`} legacyBehavior>
                  <a className="text-white hover:text-gray-300">Contact</a>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
