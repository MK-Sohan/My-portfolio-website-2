import React from "react";
import p1 from "./project-image/p1.png";
import p2 from "./project-image/p-3.png";
import p3 from "./project-image/p.png";
import p4 from "./project-image/prot-4.png";

const Project = () => {
  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="flex flex-col items-center text-center"
      >
        <div className="mb-8">
          <a href="https://mk-ecommerce-14c56.firebaseapp.com/">
            {" "}
            <img className="rounded-2xl" src={p1} alt="" />
          </a>
        </div>
        <p className="capitalize text-accent text-sm mb-3">category</p>
        <h3 className="text-2xl font-semibold capitalize mb-3">name</h3>
        <p className="text-base max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
          obcaecati ipsam.
        </p>
      </div>
      {/* ======p2===== */}

      <div
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="flex flex-col items-center text-center"
      >
        <div className="mb-8">
          <a href="https://mk-ecommerce-14c56.firebaseapp.com/">
            {" "}
            <img className="rounded-2xl" src={p2} alt="" />
          </a>
        </div>
        <p className="capitalize text-accent text-sm mb-3">category</p>
        <h3 className="text-2xl font-semibold capitalize mb-3">name</h3>
        <p className="text-base max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
          obcaecati ipsam.
        </p>
      </div>
      {/* ======p3===== */}

      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="flex flex-col items-center text-center"
      >
        <div className="mb-8">
          <a href="https://mk-ecommerce-14c56.firebaseapp.com/">
            {" "}
            <img className="rounded-2xl" src={p3} alt="" />
          </a>
        </div>
        <p className="capitalize text-accent text-sm mb-3">category</p>
        <h3 className="text-2xl font-semibold capitalize mb-3">name</h3>
        <p className="text-base max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
          obcaecati ipsam.
        </p>
      </div>
      {/* ======p4===== */}

      <div
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="flex flex-col items-center text-center"
      >
        <div className="mb-8">
          <a href="https://mk-ecommerce-14c56.firebaseapp.com/">
            {" "}
            <img className="rounded-2xl" src={p4} alt="" />
          </a>
        </div>
        <p className="capitalize text-accent text-sm mb-3">category</p>
        <h3 className="text-2xl font-semibold capitalize mb-3">name</h3>
        <p className="text-base max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
          obcaecati ipsam.
        </p>
      </div>
    </>
  );
};

export default Project;
