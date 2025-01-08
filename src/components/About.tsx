import { Button } from "./ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-center p-8 animate-fade-in">
      {/* Left Column */}
      <div className="md:w-1/3 md:fixed left-0 p-8 bg-[#1A1F2C] h-screen flex flex-col justify-between">
        <div>
          <div className="mb-8">
            <img
              src="/lovable-uploads/bcb6a8b1-f5d2-411a-9684-4d1874c39783.png"
              alt="Profile"
              className="rounded-full w-32 h-32 mb-6"
            />
            <div className="text-left">
              <div className="text-sm text-pink-300 mb-1">HELLO, I'M</div>
              <h2 className="text-2xl font-bold text-white mb-4">gabriela caballero</h2>
            </div>
            <div className="text-left mb-4">
              <div className="text-sm text-pink-300 mb-1">I'M A</div>
              <div className="text-white">product manager</div>
            </div>
            <div className="text-left">
              <div className="text-sm text-pink-300 mb-1">LIVING IN</div>
              <div className="text-white">london, uk.</div>
            </div>
          </div>
        </div>
        <div className="text-2xl font-bold text-white mb-8">
          gabriela caballero
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-2/3 md:ml-[33.333333%] pt-8">
        <div className="space-y-4 text-left">
          <h1 className="text-5xl font-bold mb-8">
            <div className="bg-gradient-to-r from-[#7ee787] via-[#ffdee2] to-[#ff9bce] text-transparent bg-clip-text">
              Product Manager.
            </div>
            <div className="bg-gradient-to-r from-[#7ee787] via-[#ffdee2] to-[#ff9bce] text-transparent bg-clip-text">
              WordPress Developer.
            </div>
            <div className="bg-gradient-to-r from-[#7ee787] via-[#ffdee2] to-[#ff9bce] text-transparent bg-clip-text">
              Content Creator.
            </div>
          </h1>

          <p className="text-lg mb-6">
            Hi there! I'm Gabriela Caballero, a Product Manager based in Nashville, TN. With years of experience leading cross-functional teams to scale, I am passionate about helping others improve their skills and achieve their professional goals.
          </p>

          <p className="text-lg mb-8">
            In addition, I regularly{" "}
            <a href="#" className="text-pink-400 hover:text-pink-300">
              stream on Twitch
            </a>{" "}
            and produce video content for my{" "}
            <a href="#" className="text-pink-400 hover:text-pink-300">
              YouTube channel
            </a>
            .
          </p>

          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md">
            Learn More About Gabriela
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;