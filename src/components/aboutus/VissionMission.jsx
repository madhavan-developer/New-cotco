import React from "react";
import SlideIn from "../common/SlideIn";

export default function VissionMission() {
  return (
    <section>
      <div className="p-5 md:px-18 mdpy-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
          <SlideIn direction="left" className="">
            <div className="vission_text">
              <h2>Vission</h2>
              <p>
                To be Vietnam’s leading, most trusted <br />
                partner in cotton, fiber, and textile machinery <br />
                supply—empowering manufacturers to <br /> achieve excellence.
              </p>
            </div>
          </SlideIn>
          <SlideIn direction="right" className="">
            <div className="vission_img">
              <img src="/img/services/image1.png" alt="" />
            </div>
          </SlideIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 place-items-center">
          <SlideIn direction="left" className="">
            <div className="vission_img">
              <img src="/img/services/image2.png" alt="" />
            </div>
          </SlideIn>

          <SlideIn direction="right" className="">
            <div className="vission_text">
              <h2>Mission</h2>
              <p>
                Build sustainable, transparent partnerships with global<br></br>
                suppliers and customers; deliver premium materials<br></br> and
                equipment; and support our clients throughout<br></br> their purchasing
                journey with expert consultation and<br></br> professional logistics.
              </p>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
