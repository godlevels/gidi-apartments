import React, { createContext, useEffect, useState } from 'react'
import { roomData } from '../data'

export const RoomContext = createContext()

const RoomProvider = ({ children }) => {
    const [rooms, setRooms] = useState(roomData)
    const [beds, setBeds] = useState('1 Bed')
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)
    

    useEffect(()=> {
        setTotal(Number(beds[0]) + Number(rooms[0]))
    })

    const handleClick = (e)=> {
        e.preventDefault()
        setLoading(true)
        const newRooms = roomData.filter(room => {
            return total <= room.maxPerson
        })
        setTimeout(()=> {
            setRooms(newRooms)
            setLoading(false)
        }, 3000)
    }
    
    return (
        <RoomContext.Provider value={{ rooms, beds, setBeds, handleClick, loading }}>
            {children}
        </RoomContext.Provider> 
    )
}

export default RoomProvider
