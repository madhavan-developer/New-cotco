import React from "react";
import SlideIn from "../common/SlideIn";

export default function VissionMission() {
  return (
    <section className="bg-white">
      <div className="p-5 md:px-20 md:py-20 space-y-20">
        {/* Vision Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <SlideIn direction="left">
            <div>
              <h2 className="text-3xl font-bold mb-4">VISION</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                To be Vietnam’s leading, most trusted <br />
                partner in cotton, fiber, and textile machinery <br />
                supply—empowering manufacturers to <br />
                achieve excellence.
              </p>
            </div>
          </SlideIn>
          <SlideIn direction="right">
            <div>
              <img
                src="/img/services/image1.png"
                alt="Vision"
                className="w-full max-w-sm md:max-w-full object-contain"
              />
            </div>
          </SlideIn>
        </div>

        {/* Mission Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <SlideIn direction="left">
            <div>
              <img
                src="/img/services/image2.png"
                alt="Mission"
                className="w-full max-w-sm md:max-w-full object-contain"
              />
            </div>
          </SlideIn>
          <SlideIn direction="right">
            <div className=""> 
              <h2 className="text-3xl font-bold mb-4">MISSION</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Build sustainable, transparent partnerships with global<br />
                suppliers and customers; deliver premium materials<br />
                and equipment; and support our clients throughout<br />
                their purchasing journey with expert consultation and<br />
                professional logistics.
              </p>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
