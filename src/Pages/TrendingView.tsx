import { FC } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from '@mui/material';
import '../App.css';

const TrendingView: FC = () => {
    const settings = {
        centerMode: false,
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        dots: true,
        arrows: true,
    };

    return (
        <div className='px-6 pb-8'>
            <Grid className="pb-5">
                <label className='uppercase font-bold text-3xl text-white'>
                    Trending View
                </label>
            </Grid>
            <Slider {...settings}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((dd) => {
                    return (
                        <div className='w-8'>
                            <div className='bg-slate-400 w-56 h-72'>
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