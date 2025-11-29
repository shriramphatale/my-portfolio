
const Section2 = () => {
  return (
    <div className="h-screen w-full">
      <div id="About" className='h-full w-full flex flex-col items-center bg-neutral-900 text-white gap-10'>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold pt-20">About <span className="text-red-500">.</span></h1>
        <div className="w-full  h-full flex flex-col items-center mt-10">
          <div className="flex flex-col gap-4 md:w-2/3 sm:w-4/5 w-full px-4">
            <div>
              <h2 className="text-red-500 text-3xl sm:text-4xl md:text-5xl font-bold text-nowrap"><span className="text-white">Hi I'm</span> Shriram</h2>
              <h3 className="md:text-3xl font-bold py-3">Full Stack Developer</h3>
              <h4 className="md:text-2xl text-gray-300 border-l px-4">BEED, MAHARASHTRA</h4>
            </div>
            <p className="text-wrap text-gray-300 md:text-xl sm:text-xl pt-4">I love building smooth frontend experiences with React & Tailwind and constantly learning new technologies to grow as a developer <span className="text-red-500 font-bold">.</span></p>
            <p className="text-wrap text-gray-300 md:text-xl sm:text-xl">I’m currently learning backend technologies to strengthen my full-stack development skills and understand how complete applications work behind the scenes <span className="text-red-500 font-bold">.</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2