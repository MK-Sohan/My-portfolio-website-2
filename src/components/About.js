import React from "react";

// import img
// import Image from '../assets/img/about.webp';
import image from "./project-image/74431789_1120591458332327_3628744364320096256_n.jpg";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <div
            data-aos="zoom-out-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            {" "}
            <img src={image} class="max-w-sm rounded-lg shadow-2xl  " />
          </div>

          <div
            data-aos="zoom-out-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Md.Mahabubul Kobir
              </h2>
              <p className="mb-4 text-accent">Full Stack Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                earum dolorum quo consequatur rem nihil hic ducimus rerum soluta
                neque harum velit molestiae dignissimos distinctio dolorum nisi
                labore culpa nihil. <br />
                <br />
                Qui doloremque quod sit accusantium unde totam inventore
                cupiditate ratione esse maxime eum recusandae ducimus.
              </p>
            </div>
            <button className="button">Download cv</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
