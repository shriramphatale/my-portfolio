import { CookingPot, NotebookPen, Code } from 'lucide-react';

const Section3 = () => {
  return (
    <div id="Project" className='min-h-screen w-full bg-neutral-950 text-white flex flex-col py-5 overflow-hidden'>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center pt-16">Projects <span className="text-red-500">.</span></h1>
      <div className="flex-1 w-full flex flex-wrap justify-center items-center gap-10 p-10 ">
        {/* Card 1 */}
        <div className="min-h-80 w-80 border border-red-400 rounded-xl shadow-lg flex flex-col items-center justify-between transition-all duration-300 hover:scale-105 hover:shadow-red-500/40 hover:border-red-500">
          <div className='h-36 w-full flex justify-center items-center bg-red-500/10 rounded-t-xl'>
            <NotebookPen size={40} color='red' />
          </div>
          <div className='flex flex-col justify-between py-4 items-center flex-1 w-full'>
            <div className='w-full flex flex-col items-center gap-1'>
              <h1 className='text-2xl font-bold'>Notes App</h1>
              <div className='flex gap-2 flex-wrap mt-2 px-1 justify-center pb-3'>
                <span className='px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20'>HTML</span>
                <span className='px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20'>CSS</span>
                <span className='px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20'>JS</span>
                <span className='px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20'>React</span>
                <span className='px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20'>Tailwind</span>
              </div>
            </div>
            <a
              href='https://github.com/shriramphatale/notes-app'
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 hover:scale-105 hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300 cursor-pointer text-black font-bold px-4 py-1 rounded-2xl
            ">View Project</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-h-80 w-80 border border-red-400 rounded-xl shadow-lg flex flex-col items-center justify-between transition-all duration-300 hover:scale-105 hover:shadow-red-500/40 hover:border-red-500">
          <div className='h-36 w-full flex justify-center items-center bg-red-500/10 rounded-t-xl'>
            <CookingPot size={40} color='red' />
          </div>
          <div className='flex flex-col justify-between py-4  items-center flex-1 w-full'>
            <div className='w-full flex flex-col items-center gap-1'>
              <h1 className='text-2xl font-bold'>Yumify - Recipe app </h1>
              <div className='flex gap-2 flex-wrap px-1 mt-2 justify-center pb-3'>
                <span className='px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20'>HTML</span>
                <span className='px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20'>CSS</span>
                <span className='px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20'>JavaScript</span>

              </div>
            </div>
            <a
              href='https://github.com/shriramphatale/Yumify-App'
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 hover:scale-105 hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300 cursor-pointer text-black font-bold px-4 py-1 rounded-2xl
            ">View Project</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="min-h-80 w-80 border border-red-400 rounded-xl shadow-lg flex flex-col items-center justify-between transition-all duration-300 hover:scale-105 hover:shadow-red-500/40 hover:border-red-500">
          <div className='h-36 w-full flex justify-center items-center bg-red-500/10 rounded-t-xl'>
            <Code size={40} color='red' />
          </div>
          <div className='flex flex-col justify-between py-4 items-center flex-1 w-full'>
            <div className='w-full flex flex-col items-center gap-1'>
              <h1 className='text-2xl font-bold'>My Porfolio </h1>
              <div className='flex gap-2 flex-wrap px-1 justify-center mt-2 pb-3'>
                <span className='px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20'>HTML</span>
                <span className='px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20'>CSS</span>
                <span className='px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20'>JavaScript</span>
                <span className='px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20'>React</span>
                <span className='px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20'>Tailwind</span>

              </div>
            </div>
            <a
              href='https://github.com/shriramphatale/my-portfolio'
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 hover:scale-105 hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300 cursor-pointer text-black font-bold px-4 py-1 rounded-2xl
            ">View Project</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section3