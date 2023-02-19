import React, {useState, useEffect} from 'react'

const Navbar = () => {
    const [header, setHeader] = useState(false)
    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            window.scrollY > 50 ? setHeader(true) : setHeader(false)
        })
    })
    return (
        <div className={`${header ? 'bg-white py-5 shadow-lg' : 'bg-transparent py-5'} fixed z-50 w-full transition-all duration-300`}>
            <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between">
                <a href="/">Logo</a>

                <nav className={`${header ? 'text-primary' : 'text-accent'} flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}>
                    <a href="" className='hover:text-accent transition'>Home</a>
                    <a href="" className='hover:text-accent transition'>About</a>
                    <a href="" className='hover:text-accent transition'>Apartments</a>
                    <a href="" className='hover:text-accent transition'>Contact</a>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
