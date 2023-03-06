import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowsFullscreen, BsPeople} from 'react-icons/bs'
import { FaBed, FaLocationArrow } from 'react-icons/fa'

const Room = ({ room }) => {
    const {id, name, image, size, location, price} = room
    return (
        <div className='bg-white shadow-2xl min-h-[400px] group'>
            <div className='overflow-hidden'>
                <img className='group-hover:scale-110 transition-all w-full' src={image} alt="" />
            </div> 

            {/* <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base'>
                <div className='flex justify-between w-[80%]'>
            
                    <div className='flex items-center gap-x-2'>
                        <div className='text-accent'>
                            <BsArrowsFullscreen className='text-[15px]' />
                        </div>
                        <div className='flex gap-x-1'>
                            <h1>Size</h1> 
                            <h1>{size}m2</h1>
                        </div>
                    </div>


                    <div className='flex items-center gap-x-2'>
                        <div className='text-accent'>
                            <BsPeople className='text-[18px]' />
                        </div>
                        <div className='flex gap-x-1'>
                            <h1 className='text-[10px]'>Max People</h1>
                            <h1>{maxPerson}</h1>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='my-5 mx-3'>
                <div className=''>
                    <div className='flex gap-x-3'>
                        <FaLocationArrow className='flex items-center' />
                        <p className='text-black text-sm'>{location.slice(0, 56)}</p>
                    </div>
                    <Link to={`/home/${id}`}>
                        <h3 className='text-lg text-accent my-1'>{name}</h3>
                    </Link>

                    <div className='flex gap-x-4 mt-1 mb-2'>
                        <FaBed className='flex items-center my-1' />
                        <h1 className='text-sm my-1'>{size} Bed</h1>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <Link className='bg-accent text-white text-[15px] py-2 px-7 rounded-sm' to={`/home/${id}`}>
                        Book now 
                    </Link>
                    <h1 className='flex items-center text-accent font-semibold'>${price}</h1>
                </div>
            </div>
        </div>
    )
}

export default Room
