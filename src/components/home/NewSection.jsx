

import React, { useEffect, useMemo, useRef, useState } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import useEmblaCarousel from "embla-carousel-react";

const NEWS = [
  { img: "/img/home/news1.jpg", title: "Now the pain is very important, and the teaching is consistent.", excerpt: "Reflections on process and value: behind our latest milestone and community gathering.", href: "#" },
  { img: "/img/home/news3.png", title: "Workshop highlights: sharing, learning, and building together.", excerpt: "Collaborative sessions focused on practical skills and long-term impact.", href: "#" },
  { img: "/img/home/news2.jpg", title: "Campus event recap: momentum for the next quarter.", excerpt: "A quick look at what’s next and how we’re aligning teams around goals.", href: "#" },
  { img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop", title: "Design talks: systems, patterns, and velocity.", excerpt: "From components to culture—notes from our latest internal meetup.", href: "#" },
];

export default function NewSection() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const cardRefs = useRef([]);
  const [scales, setScales] = useState([]);

  const updateScales = () => {
    if (!embla) return;
    const viewport = embla.rootNode().getBoundingClientRect();
    const center = viewport.left + viewport.width / 2;

    const next = NEWS.flatMap((_, copyIndex) => []); 
    const slides = embla.slideNodes();               
    const arr = slides.map((node) => {
      const r = node.getBoundingClientRect();
      const c = r.left + r.width / 2;
      const dist = Math.abs(center - c);
      const t = Math.min(dist / (viewport.width / 2), 1); // 0..1
      return 1 + (1 - t) * 0.30; // same range you used
    });
    setScales(arr);
  };

  // Keep “active” shadow in sync (closest to center)
  const [activeIndex, setActiveIndex] = useState(0);
  const updateActive = () => {
    if (!embla) return;
    const slides = embla.slideNodes();
    const viewport = embla.rootNode().getBoundingClientRect();
    const center = viewport.left + viewport.width / 2;

    let best = -Infinity, idx = 0;
    slides.forEach((node, i) => {
      const r = node.getBoundingClientRect();
      const c = r.left + r.width / 2;
      const dist = Math.abs(center - c);
      const score = -dist;
      if (score > best) { best = score; idx = i; }
    });
    setActiveIndex(idx);
  };

  useEffect(() => {
    if (!embla) return;
    const onScroll = () => { updateScales(); updateActive(); };
    updateScales(); updateActive();

    embla.on("scroll", onScroll);
    embla.on("resize", onScroll);
    embla.on("reInit", onScroll);
    return () => {
      embla.off("scroll", onScroll);
      embla.off("resize", onScroll);
      embla.off("reInit", onScroll);
    };
  }, [embla]);

  return (
    <section className="bg-white mt-26">
      <div className="mx-auto grid grid-cols-12 gap-8 items-start">
        {/* Left column */}
        <div className="col-span-12 md:col-span-4 pl-16 flex flex-col justify-center h-[100%]">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F2F45]">NEWS</h2>
          <p className="mt-3 text-lg text-slate-600 max-w-sm">
            Conveniently located and surrounded by natural beauty, it’s the perfect spot for our celebration.
          </p>
        </div>

        {/* Right column: dark panel + cards (Embla viewport) */}
        <div className="col-span-12 md:col-span-8 relative h-[100%]">
          <div className="absolute right-0 w-[90%] h-[100%] bg-[var(--secondary)] rounded-bl-4xl rounded-tl-4xl"></div>
          <div className="relative py-16 overflow-x-hidden">
            <div className="absolute inset-0 -left-6 rounded-l-2xl" />
            {/* Embla viewport */}
            <div
              className="relative px-4 py-16"
              ref={emblaRef}
            >
              {/* Embla container must be flex */}
              <div className="flex gap-24 pr-6">
                {NEWS.map((n, i) => (
                  <article
                    key={i}
                    ref={(el) => (cardRefs.current[i] = el)}
                    className={`transition-[transform,box-shadow,opacity] duration-300 will-change-transform
                                bg-white rounded-lg ring-1 ring-black/5`}
                    style={{
                      width: "320px",
                      transform: `scale(${scales[i] || 1})`,
                      boxShadow: activeIndex === i ? "0 25px 50px -12px rgba(0,0,0,0.35)" : "0 10px 30px rgba(0,0,0,0.15)",
                      flex: "0 0 auto",
                    }}
                  >
                    <div className="p-3">
                      <div className="rounded-lg overflow-hidden">
                        <img src={n.img} alt={n.title} className="h-44 w-full object-cover" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-slate-900 leading-snug">
                        {n.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 line-clamp-2">{n.excerpt}</p>
                      <a href={n.href} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#0F3A56]">
                        <span className="h-6 w-6 rounded-full bg-[#1276BD] text-white grid place-items-center text-[12px]">
                          <RxArrowTopRight />
                        </span>
                        Learn More
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* keep your utilities */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
