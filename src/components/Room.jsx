import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowsFullscreen, BsPeople} from 'react-icons/bs'

const Room = ({ room }) => {
    const {id, name, image, size, maxPerson, description, price} = room
    return (
        <div className='bg-white shadow-2xl min-h-[500px] group'>
            <div className='overflow-hidden'>
                <img className='group-hover:scale-110 transition-all w-full' src={image} alt="" />
            </div> 

            <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base'>
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
            </div>

            <div className=''>
                <Link to={`/home/${id}`}>
                    <h3 className='h3'>{name}</h3>
                </Link>
                <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>{description.slice(0, 56)}</p>
            </div>

            <div className='flex'>
                <Link className='btn btn-secondary btn-sm mx-auto' to={`/home/${id}`}>
                    Book now 
                </Link>
                <h1>${price}</h1>
            </div>
        </div>
    )
}

export default Room
