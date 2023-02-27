import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import AdultsDropdown from '../components/AdultsDropdown'
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import { RoomContext } from '../context/RoomContext'
import { FaCheck } from 'react-icons/fa'
import ScrollToTop from '../components/ScrollToTop'

const HomeDetails = () => {
    const { rooms } = useContext(RoomContext)
    const { id } = useParams()

    const room = rooms.find(room => {
        return room.id === Number(id)
    })

    const { name, description, imageLg, price } = room
    return (
        <div className=''>
            <ScrollToTop />
            <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
                <div className='absolute w-full h-full bg-black/70'>
                    <h1 className='text-6xl mt-60 text-white z-20 font-primary text-center'>{name} Details</h1>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row h-full py-24'>
                    <div className='w-full h-full px-6 lg:w-[60%]'>
                        <h2 className='h2'>{name}</h2>
                        <p className='mb-8'>{description}</p>
                        <img src={imageLg} alt="" />
                    </div>
                    <div className='w-full h-full lg:w-[40%]'>
                        <div className='py-8 px-6 bg-accent/20 mb-12'>
                            <div className='flex flex-col space-y-4 mb-4'>
                                <h3>Your Reservation</h3>
                                <div className='h-[60px]'>
                                    <CheckIn />
                                </div>
                                <div className='h-[60px]'>
                                    <CheckOut />
                                </div>
                                <div className='h-[60px]'>
                                    <AdultsDropdown />
                                </div>
                            </div>
                            <button className='btn btn-lg btn-primary w-full'>book now</button>
                        </div>
                        <div>
                            <h3 className='h3'>Apartments Rules</h3>
                            <p className='mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolores accusamus excepturi provident dolore porro!</p>
                            <ul className='flex flex-col gap-y-4'>
                                <li className='flex items-center gap-x-4'><FaCheck className='text-accent' /> Check-in: 3:00 PM - 9:00 PM</li>
                                <li className='flex items-center gap-x-4'><FaCheck className='text-accent' /> Check-out: 11:00 AM</li>
                                <li className='flex items-center gap-x-4'><FaCheck className='text-accent' /> No Pets</li>
                                <li className='flex items-center gap-x-4'><FaCheck className='text-accent' /> No smoking</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div> 
    )
}

export default HomeDetails
