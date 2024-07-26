/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

function Hero() {
  return (
    <div className="bg-blue-900 lg:h-[88vh] flex  flex-col lg:flex-row items-center justify-between p-10">
      <div className="text-white flex flex-col items-center lg:items-start gap-10">
        <h1 className="text-4xl">
          Fast & Secure
          <br /> Web Hosting
        </h1>
        <p className="text-md text-center lg:text-start">
          Anything embarrassing hidden in the middle of text. <br /> All the
          Lorem Ipsuanything embarrassing hidden in the middle of text.
        </p>
        <div className="flex gap-5">
          <a
            href="/signup"
            className="bg-blue-600 text-white px-10 py-3 rounded-lg hover:bg-blue-800 hover:text-white"
          >
            Read More
          </a>
          <a
            href="/signup"
            className="bg-orange-700 text-white px-10 py-3 rounded-lg hover:bg-blue-800 hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/web-hosting-4439231-3728458.png?f=webp"
        alt=""
      />
    </div>
  );
}

export default Hero;
