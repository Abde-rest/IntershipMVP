import Image from "next/image";

// SVG logos with consistent styling
const logos = [
  {
    name: "Sonatrach",
    svg: (
      <svg viewBox="0 0 200 50" className="w-32 h-8">
        <path d="M20 10h160v30H20z" fill="#1a365d" />
        <text x="100" y="30" textAnchor="middle" fill="white" fontSize="16">
          SONATRACH
        </text>
      </svg>
    ),
  },
  {
    name: "Sonelgaz",
    svg: (
      <svg viewBox="0 0 200 50" className="w-32 h-8">
        <path d="M20 10h160v30H20z" fill="#1a365d" />
        <text x="100" y="30" textAnchor="middle" fill="white" fontSize="16">
          SONELGAZ
        </text>
      </svg>
    ),
  },
  {
    name: "Mobilis",
    svg: (
      <svg viewBox="0 0 200 50" className="w-32 h-8">
        <path d="M20 10h160v30H20z" fill="#1a365d" />
        <text x="100" y="30" textAnchor="middle" fill="white" fontSize="16">
          MOBILIS
        </text>
      </svg>
    ),
  },
  {
    name: "Orascom",
    svg: (
      <svg viewBox="0 0 200 50" className="w-32 h-8">
        <path d="M20 10h160v30H20z" fill="#1a365d" />
        <text x="100" y="30" textAnchor="middle" fill="white" fontSize="16">
          ORASCOM
        </text>
      </svg>
    ),
  },
  {
    name: "Cevital",
    svg: (
      <svg viewBox="0 0 200 50" className="w-32 h-8">
        <path d="M20 10h160v30H20z" fill="#1a365d" />
        <text x="100" y="30" textAnchor="middle" fill="white" fontSize="16">
          CEVITAL
        </text>
      </svg>
    ),
  },
  {
    name: "Condor",
    svg: (
      <svg viewBox="0 0 200 50" className="w-32 h-8">
        <path d="M20 10h160v30H20z" fill="#1a365d" />
        <text x="100" y="30" textAnchor="middle" fill="white" fontSize="16">
          CONDOR
        </text>
      </svg>
    ),
  },
];

const LogoGrid = () => (
  <div className="py-12 bg-gray-50">
    <div className="custom-screen">
      <h2 className="font-semibold text-sm text-gray-600 text-center">
        شركاؤنا في الجزائر
      </h2>
      <div className="mt-6">
        <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
          {logos.map((item, idx) => (
            <li key={idx} className="flex flex-col items-center group">
              <div className="transition-transform duration-300 group-hover:scale-110">
                {item.svg}
              </div>
              <span className="mt-2 text-sm text-gray-600">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default LogoGrid;
