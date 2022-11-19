import { FC, useEffect, useState } from 'react'
import Carousel from 'component/Carousel';
import axios from 'utils/AxiosInterceptor';

const TrendingView: FC = () => {
    const [movieData, setMoviewData] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`trending/tv/week?&language=en-US`).then((response: any) => {
            setMoviewData(response?.data || {});
        }).catch()
    }
    return (
        <>
            <Carousel name={"Trending View"} data={movieData} />
        </>
    )
}

export default TrendingView