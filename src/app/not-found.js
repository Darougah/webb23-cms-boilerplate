// export default function NotFound() {
//     //Fetch the 404 page from storyblok (this component works as server component aswell)
//     //update this component to render a 404 page
//     return (
//         <div className="flex items-center justify-center h-screen">
//           <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
//         </div>
//       );
//     }

import Image from 'next/image';
import Link from 'next/link';

export default function NotFound({ blok = {} }) {
    if (!blok || Object.keys(blok).length === 0) {
        return <div>Loading...</div>;
    }

    const logoSrc = blok.logo?.filename || ''; 
    const title = blok.title || '404 Page Not Found';
    const text = blok.text || 'The page you are looking for does not exist.';

    return (
        <div className="not-found text-center py-10 px-5 bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg mb-6">{text}</p>
            {logoSrc && (
                <div className="logo mb-6">
                    <Image 
                        src={logoSrc} 
                        alt="404 Logo" 
                        width={150} 
                        height={100} 
                        className="mx-auto"
                    />
                </div>
            )}
            <Link href="/" className="text-blue-500 underline">
                Go back to Home
            </Link>
        </div>
    );
}
