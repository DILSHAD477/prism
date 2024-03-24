



const Hero = () => {
  return (
    <section className="py-12 md:py-24 h-[100vh] md:pt-10 ">
      <div className="container mx-auto md:mt-40">
        <div className="flex flex-row">
          <div className=" max-w-[600px] md:text-left text-center ">
                      <h1 className=" text-bold text-white pb-9">Namaste,</h1>
                      <h1 className="text-white h1 text-foreground pb-2">Welcome</h1>
                      <h1 className="text-white h1 text-foreground pb-8"> to Narad</h1>
                      <h3 className=" text-white text-foreground text-xl">A conversational chatbot that ...</h3>
          </div>
          <div className="flex items-center md:ml-60">
            <div className="w-80 h-80 flex-shrink-0">
                          <img src="/prism_hero.jpg" className="mx-auto" alt="Prism Image" />
                          <p className="text-white text-muted-foreground text-sm pt-4 font-light text-center">Dedicated to the Karnataka State Police</p>
            </div>
            <div className="flex flex-col pl-4 md:ml-0">
              <ul className="text-foreground text-lg mb-8 font-light">
                <li key="text" className=" text-white py-4 border-b border-gray-400 duration-500 hover:bg-gray-400 hover:bg-opacity-20 rounded-l-sm w-80">
                  <a href="/"  >Give me an Image Input</a>
                </li>
                <li className=" text-white py-4 border-b border-gray-400 duration-500  hover:bg-gray-400 hover:bg-opacity-20 rounded-l-sm w-70">
                  <a href="/"  >Give me an Image Input</a>
                </li>
                <li className="text-white py-4 border-b border-gray-400 duration-500  hover:bg-gray-400 hover:bg-opacity-20 rounded-l-sm w-70">
                  <a href="/" >Give me a Video Input</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
