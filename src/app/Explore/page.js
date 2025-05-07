import ContentExplore from "./Content";
const page = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Explore Internships</h1>
            <p className="text-gray-600">
              Find the perfect internship opportunity to kickstart your career
            </p>
          </header>
          <ContentExplore />
        </div>
      </div>
    </div>
  );
};

export default page;
