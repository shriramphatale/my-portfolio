import TextType from '../animations/TextType'
import ScrollVelocity from '../animations/ScrollVelocity';
const Section1 = () => {
  return (
    <div id='Home' className='relative h-screen w-full '>
      <div className='bg-neutral-950  relative h-full w-full flex flex-col justify-center items-center gap-4 text-center overflow-x-hidden  px-4'>
        <h3 className='slideLeft text-gray-300 text-2xl md:text-4xl'>Hi, I'm</h3>
        <h1 className='slideLeft text-red-500 text-4xl sm:text-5xl md:text-7xl font-bold'>Shriram Phatale</h1>

        <TextType
          text={["Full Stack Developer"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
          className='text-2xl md:text-4xl text-white min-w-full font-bold'
        />

      </div>
      <div className='absolute bottom-0  border border-black'>
        <ScrollVelocity
          texts={[
            "Python / C / HTML / CSS / Javascript / React JS / Tailwind CSS / SQL / Git / GitHub /"
          ]}
          velocity={100}
          className="custom-scroll-text bg-black text-gray-500 border-b-2 border-t-2 opacity-40 text-xl md:text-3xl py-1  "
        />
      </div>
    </div>

  )
}

export default Section1