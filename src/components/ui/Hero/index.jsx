import NavLink from "../NavLink";

const Hero = () => (
  <section>
    <div className="custom-screen py-28 text-gray-600">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
          Connecting Interns with Top Companies – All in One Place
        </h1>
        <p className="max-w-xl mx-auto">
          We help you find the internship opportunity that matches your
          ambition, through a platform that brings together top companies and
          students in one simple and efficient environment.
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <NavLink
            href="/Explore"
            className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 ">
            Explore
          </NavLink>
          <NavLink
            href="/learn-more"
            className="text-gray-700 border hover:bg-gray-50"
            scroll={false}>
            Learn more
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
