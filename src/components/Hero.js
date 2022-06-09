import React from "react";
import image from "./project-image/1654607510112.png";
// import woman image
import WomanImg from "./project-image/edge edited333.png";
import "./hero.css";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
const Hero = () => {
  return (
    <div class="hero  min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <img src={image} class="max-w-sm rounded-lg shadow-2xl " />
        </div>
        <div data-aos="zoom-out-right">
          <h3 className="lg:text-3xl font-bold">WELCOME TO MY WORLD</h3>
          <h1 className="py-6 font-bold lg:text-[60px] mt-10 ">
            Hi, I’m <span>Md.Mahabubul Kobir</span>
          </h1>
          <h2 className="lg:text-[50px] mt-6 ">
            a ,
            <span className="text-[#ff014f] font-bold">
              {" "}
              <Typewriter
                words={[
                  "Full Stack Wev Developer",
                  "React app Developer",
                  "Node js",
                  "Mongo Db",
                ]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <button className="mt-20 button">Contact me</button>
        </div>
      </div>
    </div>
    // <section
    //   id="home"
    //   className="lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    // >
    //   <div className=" mx-auto h-full ">
    //     <div className="flex items-center h-full w-full pt-8">
    //       <div className="w-full flex flex-col items-center lg:ml-4">
    //         <p className="text-lg text-accent text-md mb-[22px]">
    //           Hey, I'm Jane! 👋
    //         </p>
    //         <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
    //           I Build & Design <br /> Web Interfaces.
    //         </h1>
    //         <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
    //           Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore
    //           dolor elit.
    //         </p>
    //         <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all">
    //           Work with me
    //         </button>
    //       </div>
    //       <div className="photo lg:flex sm:flex-2 justify-end items-end w-full ">
    //         <img
    //           className=" hidden lg:block h-[40rem] w-[50rem] lg:mt-[500px]  lg:ml-56 lg:h-[90rem] lg:w-[90rem] "
    //           src={WomanImg}
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;
