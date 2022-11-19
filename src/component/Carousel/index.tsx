
import { FC } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from '@mui/material';
import '../../App.css';

interface IProps {
    data?: any,
    name?: string
};

const Carousel: FC<IProps> = (props) => {
    const { data, name } = props;

    console.log("Data =>", data);

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
                    {name}
                </label>
            </Grid>
            <Slider {...settings}>
                {data?.results?.map((dd: any) => {
                    return (
                        <div className='w-8'>
                            <div className='bg-slate-400 w-56 h-73'>
                                <img src={`https://image.tmdb.org/t/p/w342/${dd?.poster_path}`} alt="movie-image" />
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Carousel