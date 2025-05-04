import { IoIosNotifications } from "react-icons/io";
import SectionWrapper from "../../SectionWrapper";
import { MdDashboard } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";

const ToolKit = () => {
  const features = [
    {
      icon: <MdDashboard size={30} />,
      title: "dashboard",
      desc: "Smart and easy-to-use dashboard",
    },
    {
      icon: <IoIosNotifications size={30}/>,
      title: "notifications",
      desc: "Instant notifications for new internships",
    },
    {
      icon: <VscFeedback size={30}/>,
      title: "Tailwind CSS",
      desc: "Intern review and feedback system",
    },
    // {
    //   icon: <MdDashboard />,
    //   title: "Node.js",
    //   desc: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment.",
    // },
    // {
    //   icon: <MdDashboard />,
    //   title: "Vercel",
    //   desc: "Vercel is a cloud platform that enables developers to host web apps.",
    // },
    // {
    //   icon: <MdDashboard />,
    //   title: "Figma",
    //   desc: "Figma is a web-based graphics editing and user interface design app.",
    // },
  ];

  return (
    <SectionWrapper>
      <div
        id="toolkit"
        className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            All the Tools You Need — Right at Your Fingertips
          </h2>
          <p>
            An all-in-one platform to manage internship applications,
            communicate with companies, track your progress, and build a
            professional profile.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, index) => (
              <div key={index} className="flex gap-x-4">
                {item.icon}
                <div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ToolKit;
