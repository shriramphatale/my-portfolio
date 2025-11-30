import React from 'react'

const Footer = () => {
    return (
        <div className='bg-neutral-950'>
            <div className="relative w-full h-[2px] overflow-hidden mb-2">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent
    animate-flow"></div>
            </div>
            <footer className="text-center py-2 text-gray-400">
                <div className="text-white font-semibold text-sm">
                    © 2025 Shriram Phatale
                </div>
                <p className="text-xs">
                    Built with ❤️ using React & TailwindCSS
                </p>
            </footer>

        </div>
    )
}

export default Footer