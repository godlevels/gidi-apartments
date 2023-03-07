import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { EffectFade, Autoplay } from 'swiper'
import Img1 from '../assets/img/heroSlider/14.jpg'
// import Img2 from '../assets/img/heroSlider/2.jpg'
// import Img3 from '../assets/img/heroSlider/3.jpg'


const data = [
    {
        // title: 'Discover The Most Suitable Property Today',
        desc: 'Find a variety of properties that suit you very easily, forget all difficulties in finding a residence for you.',
        btnText: 'Explore'
    },
]

const HeroSlider = () => {
    return (
        <div>
            <div className='mx-auto container h-[600px] lg:h-[500px]'>
                <div className='h-full relative flex flex-col lg:flex-row lg:justify-between lg:gap-x-16 items-center'>
                    <div className='z-20'>
                        <img className='h-[600px]' src={Img1} alt="" />
                    </div>
                    <div className='text-center lg:text-left'>
                        <h1 className='text-[40px] font-semibold leading-10'>Discover <br /> The Most Suitable Property Today</h1>
                        {data.map((s, i)=> {
                            const {desc, btnText} = s
                            return <div key={i}>
                                <p className='text-black text-[15px] my-4'>{desc}</p>
                                <button className='bg-accent text-white text-[20px] py-2 px-5 lg:my-0'>{btnText}</button>
                            </div>
                        })}
                    </div>
                </div>
            </div>

            {/* // <Swiper modules={[EffectFade, Autoplay]} effect={'fade'} loop={true} autoplay={{delay: 3000, disableOnInteraction: false,}} className='heroSlider h-[600px] lg:h-[860px]'>
        //     {slides.map((s, i)=> {
        //         const {title, bg,} = s
        //         return <SwiperSlide key={i} className='h-full bg-pink-400 relative flex justify-center items-center'>
        //             <div className='z-20 text-white text-center'>
        //                 <div className='uppercase font-tertiary tracking-[6px] mb-5'>Just Enjoy and relax</div>
        //                 <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6'>{title}</h1>
        //             </div>
        //             <div className='absolute top-0 w-full h-full'>
        //                 <img className='object-cover h-full w-full' src={bg} alt="" />
        //             </div>

        //             <div className='absolute w-full h-full bg-black/70'>  

        //             </div>
        //         </SwiperSlide>
        //     })}
        // </Swiper> */}
        </div>
    )
}

export default HeroSlider 
