import { FC, useState, useEffect } from 'react'
import Carousel from 'component/Carousel';
import axios from 'utils/AxiosInterceptor';

const HorrorMovies: FC = () => {
    const [movieData, setMoviewData] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`discover/movie?with_genres=27`).then((response: any) => {
            setMoviewData(response?.data || {});
        }).catch()
    }
    return (
        <>
            <Carousel name={"HORROR FILMS"} data={movieData} />
        </>
    )
}

export default HorrorMovies