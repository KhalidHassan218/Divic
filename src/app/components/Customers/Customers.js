import React from "react";
import "./Customers.css";
import Image from "next/image";
const Customers = () => {
  const customers = (
    <div id="Customers" className="flex flex-col gap-10 md:gap-12 lg:gap-16 items-center">
      <div className="flex gap-10 md:gap-12 lg:gap-16 items-center">
        {" "}
        <Image
          width={120}
          height={24}
          alt="customers"
          src="/assests/hero-addon/SMSA_Express-group (1).png"
        />
        <Image
          width={120}
          height={24}
          alt="customers"
          src="/assests/hero-addon/Group 2100.png"
        />
      </div>
      <div className="flex  gap-10 md:gap-12 lg:gap-16 items-center">
        {" "}
        <Image
          width={120}
          height={24}
          alt="customers"
          src="/assests/hero-addon/SMSA_Express-group (1).png"
        />
        <Image
          width={120}
          height={24}
          alt="customers"
          src="/assests/hero-addon/Group 2100.png"
        />
      </div>
    </div>
  );
  return (
    <div className="md:container md:mx-auto px-2  items-center	my-10  md:my-24 ">
      <div className="main-title mx-auto">Our Customers</div>
      <div className="mt-3 mb-8 hidden md:block mx-auto items-center ">
        <div className="hero-last  text-base lg:text-2xl">Powering the world’s best product teams</div>
        <div className="hero-last light text-base lg:text-2xl">
          From next-gen startups to established enterprises.
        </div>
      </div>
      <div className="hero-last text-lg lg:text-xl mt-3 mb-12 mx-auto block md:hidden">
        Streamline your software development process with Divic
      </div>
      <div>
        <div className="flex mobile-customer  gap-10 md:gap-12 lg:gap-16 items-center justify-center">
          <div className="hidden lg:block">{customers}</div>
          {customers}
          {customers}
        </div>
      </div>
    </div>
  );
};

export default Customers;
