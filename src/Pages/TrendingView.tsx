import { FC } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingView: FC = () => {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    return (
        <div className='bg-lime-400 p-10'>
            <h2>Center Mode</h2>
            <Slider {...settings}>
                <div className='bg-emerald-500 w-10'>
                    <div className='bg-slate-400 w-72 h-40'>
                        <h3 className="text-center">1</h3>
                    </div>
                </div>
                <div className='bg-emerald-500 w-10'>
                    <div className='bg-slate-400 w-72 h-40'>
                        <h3 className="text-center">2</h3>
                    </div>
                </div>
                <div className='bg-emerald-500 w-10'>
                    <div className='bg-slate-400 w-72 h-40'>
                        <h3 className="text-center">3</h3>
                    </div>
                </div>
                <div className='bg-emerald-500 w-10'>
                    <div className='bg-slate-400 w-72 h-40'>
                        <h3 className="text-center">4</h3>
                    </div>
                </div>
                <div className='bg-emerald-500 w-10'>
                    <div className='bg-slate-400 w-72 h-40'>
                        <h3 className="text-center">5</h3>
                    </div>
                </div>
                <div className='bg-emerald-500 w-10'>
                    <div className='bg-slate-400 w-72 h-40'>
                        <h3 className="text-center">6</h3>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default TrendingView