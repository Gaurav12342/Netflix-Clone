import { FC, useState, useEffect } from 'react'
import Carousel from 'component/Carousel';
import axios from 'utils/AxiosInterceptor';

const TopRated: FC = () => {
    const [movieData, setMoviewData] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`movie/top_rated?language=en-US`).then((response: any) => {
            setMoviewData(response?.data || {});
        }).catch()
    }
    return (
        <>
            <Carousel name={"TOP RATED"} data={movieData} />
        </>
    )
}

export default TopRated