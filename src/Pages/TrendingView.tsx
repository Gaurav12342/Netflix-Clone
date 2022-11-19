import { FC, useEffect } from 'react'
import Carousel from 'component/Carousel';
import axios from 'axios';

const TrendingView: FC = () => {
    const userArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=c3f3b91c6a993643a74066618aa6032e&language=en-US').then((response: any) => {
            console.log("response =>", response);
        }).catch()
    }
    return (
        <>
            <Carousel name={"Trending View"} data={userArray} />
        </>
    )
}

export default TrendingView