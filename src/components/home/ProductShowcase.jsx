import { FiArrowUpRight } from "react-icons/fi";
import SlideIn from "../common/SlideIn";

const categories = [
  {
    title: "COTTON",
    description: "Global cotton sourcing to power your production",
    image: "/img/home/cotton.png",
    link: "#",
  },
  {
    title: "FIBER",
    description: "Eco-friendly fibers for fashion and nonwoven innovation",
    image: "/img/home/cotton1.png",
    link: "#",
    overlayImage: "/img/home/overlay.png",
  },
  {
    title: "MACHINES",
    description: "Advanced machinery to elevate your textile operations",
    image: "/img/home/cottonmac.png",
    link: "#",
  },
];

export default function ProductShowcase() {
  return (
    <section className="px-6 md:px-16 py-16 bg-white product-showcase">
      <div className="mx-auto z-20">
        {/* Section Heading */}
        <div className="relative z-40 max-w-6/12 mb-[-120px] pr-8 product-showcase-heading">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Explore our complete range of premium cotton, sustainable fibers,
            and advanced textile machines
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            tailored for Vietnam's growing textile industry
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col md:items-end md:flex-row gap-6 product-showcase-cards">
          {categories.map((item, i) => (
            <SlideIn
              key={i}
              direction="up"
              className={`w-full md:w-1/3 ${i === 1 ? "md:h-[600px]" : "md:h-[400px]"}`}
            >
              <a
                href={item.link}
                className="group relative rounded-2xl overflow-hidden w-full h-full"
              >
                {/* Image Wrapper for Zoom */}
                <div className="w-full h-full overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Optional Overlay Image */}
                {item.overlayImage && (
                  <img
                    src={item.overlayImage}
                    alt=""
                    className="absolute hidden md:flex top-[0px] left-0"
                  />
                )}

                {/* Icon Top Right */}
                <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-2 rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <FiArrowUpRight className="text-white text-lg" />
                </div>

                {/* Text Bottom Left */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-4xl font-medium">{item.title}</h3>
                  <p
                    className="text-md font-medium mt-1 max-w-sm md:opacity-0 md:translate-y-4 md:max-h-0 group-hover:md:opacity-100 group-hover:md:translate-y-0 group-hover:md:max-h-[100px] transition-all duration-300 ease-in-out"
                  >
                    {item.description}
                  </p>
                </div>
              </a>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
