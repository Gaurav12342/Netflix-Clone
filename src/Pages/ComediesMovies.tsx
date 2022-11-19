import { FC, useState, useEffect } from 'react'
import Carousel from 'component/Carousel';
import axios from 'utils/AxiosInterceptor';

const ComediesMovies: FC = () => {
    const [movieData, setMoviewData] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`discover/movie?with_genres=35`).then((response: any) => {
            setMoviewData(response?.data || {});
        }).catch()
    }
    return (
        <>
            <Carousel name={"COMEDIES"} data={movieData} />
        </>
    )
}

export default ComediesMovies