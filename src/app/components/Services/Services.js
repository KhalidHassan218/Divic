import React from "react";
import "./Services.css";
import Image from "next/image";
const Services = () => {
       
    const services = [
        {
            img:'/assests/hero-addon/Illustration.png',
            title:'Mobile Applications Designs and Developments Services',
            paragraph:'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.',
        },
        {
            img:'/assests/hero-addon/Illustration.png',
            title:'Mobile Applications Designs and Developments Services',
            paragraph:'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.',
        },
        {
            img:'/assests/hero-addon/Illustration.png',
            title:'Mobile Applications Designs and Developments Services',
            paragraph:'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.',
        },
        {
            img:'/assests/hero-addon/Illustration.png',
            title:'Mobile Applications Designs and Developments Services',
            paragraph:'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.',
        },
    ]

  return (
    <div id="Services" className="md:container relative md:mx-auto px-4 lg:px-24 items-center	my-10  md:my-24 ">
        <Image
          width={1428}
          height={892}
          className="one"
          alt="one"
          src="/assests/hero-addon/1.png"
        />
      <div className="main-title mx-auto">Our Customers</div>
      <div className="mt-3 mb-8 hidden md:block mx-auto items-center ">
        <div className="hero-last text-base	 lg:text-2xl	">Powering the world’s best product teams</div>
        <div className="hero-last light text-base	 lg:text-2xl">
          From next-gen startups to established enterprises.
        </div>
      </div>
      <div className="hero-last mt-3 mb-8 mx-auto block md:hidden">
        Streamline your software development process with Divic
      </div>
      {/* cards-section */}
      <div className=" service-card-content  gap-2 lg:gap-4 grid grid-cols-1 lg:grid-cols-2">
      {services.map((service, index) => (
        <div key={index} className="  service-card flex items-center justify-center">
          <div key={index} className="" >
            <Image
              width={180}
              height={240}
              alt={service.title}
              className="services-img"
              src={service.img}
            />
          </div>
          <div className="text-small py-5 px-3">
            <b className="hero-last text-xs lg:text-xl my-1	">{service.title}</b>
            <p className="text-default-500 text-xs	lg:text-base">{service.paragraph}</p>
          </div>
          </div>
      ))}
    </div>
      {/* cards-section */}
    </div>
  );
};

export default Services;
