function About() {
  return (
    <div className="p-10 lg:flex items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-semibold">About Us</h1>
        <p className="text-md leading-8">
          Words which do not look even slightly believable. If you are going to
          <br />
          use a passage of Lorem Ipsum, you need to be sure there is not
          <br />
          anything embarrassing hidden in the middle of text. All the Lorem
          <br />
          Ipsum generators on the Internet tend to repeat predefined chunks
          <br />
        </p>
        <a
          href="/about"
          className="bg-red-600 text-white w-40 text-center py-3 rounded-lg hover:bg-red-800 hover:text-white"
        >
          Read More
        </a>
      </div>
      <div>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/web-hosting-4152286-3457277.png?f=webp"
          alt="sf"
        />
      </div>
    </div>
  );
}

export default About;
