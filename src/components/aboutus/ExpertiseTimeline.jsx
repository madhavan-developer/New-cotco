import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const expertiseData = [
  {
    year: "2016",
    description:
      "COTCO launched as a cotton trading agent for reputable international suppliers such as Viterra B.V. and Devcot S.A., establishing our initial sourcing network.",
    image: "/img/timeline/2016.png",
  },
  {
    year: "2019",
    description:
      "Became exclusive agency of Louis Dreyfus Company (LDC) for premium cotton supply; joined and maintained membership in the International Cotton Association (ICA), affirming global credibility.",
    image: "/img/timeline/2019.png",
  },
  {
    year: "2021",
    description:
      "Expanded business into yarn supply solutions for Vietnamese spinning mills.",
    image: "/img/timeline/2021.png",
  },
  {
    year: "2022",
    description:
      "Officially appointed as Lakshmi Machine Works (LMW) distributor in Vietnam, adding advanced spinning machinery to our offerings.",
    image: "/img/timeline/2022.png",
  },
  {
    year: "2023",
    description:
      "Further extended supply network through collaborations with Ecom Agroindustrial Corp and Reinhart & Co., reinforcing our role as a trusted textile partner in Vietnam.",
    image: "/img/timeline/2023.png",
  },
];

export default function PinnedExpertiseTimeline() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const stepCount = expertiseData.length;
  const scrollSteps = useTransform(scrollYProgress, (progress) => {
    return Math.min(Math.floor(progress * stepCount), stepCount - 1);
  });

  useEffect(() => {
    return scrollSteps.on("change", (latest) => {
      setCurrentIndex(latest);
    });
  }, [scrollSteps]);

  return (
    <section ref={sectionRef} className="relative h-[500vh] bg-[#E7EDF5]">
      {/* Desktop Layout */}
      <div className="hidden md:grid sticky top-0 h-screen grid-cols-1 md:grid-cols-2 gap-12 justify-center w-full px-6 md:pr-0 md:px-20">
        {/* Left: Years + Description */}
        <div className="flex flex-col justify-center space-y-4 max-w-xl h-full py-20">
          <div className="space-y-4">
            {expertiseData.slice(0, currentIndex + 1).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-3xl font-semibold text-[#000]"
              >
                {item.year}
              </motion.div>
            ))}
          </div>

          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-black font-normal pt-6"
          >
            {expertiseData[currentIndex].description}
          </motion.p>
        </div>

        {/* Right: Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full"
        >
          <img
            src={expertiseData[currentIndex].image}
            alt={expertiseData[currentIndex].year}
            className="absolute inset-0 right-0 w-full h-full object-cover shadow-lg"
          />
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden sticky top-0 h-screen w-full">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full"
        >
          {/* Background Image */}
          <img
            src={expertiseData[currentIndex].image}
            alt={expertiseData[currentIndex].year}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 bg-opacity-40 z-10" />

          {/* Text Content */}
          <div className="absolute top-10 left-6 z-20">
            <p className="text-white font-semibold text-sm uppercase mb-2">History</p>
          </div>
<div className="absolute top-10 right-6 z-20">
            <p className="text-white font-bold text-2xl">{expertiseData[currentIndex].year}</p>
          </div>
          {/* Description */}
          <div className="absolute bottom-10 left-6 right-6 z-20">
            <p className="text-white text-sm leading-relaxed">
              {expertiseData[currentIndex].description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
