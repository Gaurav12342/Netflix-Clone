import { FC, useState, useEffect } from 'react'
import Carousel from 'component/Carousel';
import axios from 'utils/AxiosInterceptor';

const ActionMovies: FC = () => {
    const [movieData, setMoviewData] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`discover/movie?with_genres=28`).then((response: any) => {
            setMoviewData(response?.data || {});
        }).catch()
    }
    return (
        <>
            <Carousel name={"ACTION MOVIES"} data={movieData} />
        </>
    )
}

export default ActionMovies