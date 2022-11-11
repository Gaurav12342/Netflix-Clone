import { FC } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingView: FC = () => {
    const settings = {
        centerMode: false,
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        dots: true,
        arrows: true
    };

    return (
        <div className='bg-lime-400 p-10'>
            <h2>Center Mode</h2>
            <Slider {...settings}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((dd) => {
                    return (
                        <div className='bg-emerald-500 w-8'>
                            <div className='bg-slate-400 w-56 h-40'>
                                <h3 className="text-center">{dd}</h3>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default TrendingView