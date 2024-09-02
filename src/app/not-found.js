export default function NotFound() {
    //Fetch the 404 page from storyblok (this component works as server component aswell)
    //update this component to render a 404 page
    return (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        </div>
      );
    }