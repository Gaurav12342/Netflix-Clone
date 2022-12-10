import { FC, useState, useEffect } from 'react'
import Carousel from 'component/Carousel';
import axios from 'utils/AxiosInterceptor';
import comman from 'Resources/comman.json';

const NetflixOrigionals: FC = () => {
    const [movieData, setMoviewData] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`discover/tv?with_networks=213`).then((response: any) => {
            setMoviewData(response?.data || {});
        }).catch()
    }
    return (
        <>
            <Carousel name={comman?.NETFLIX_ORIGINALS} data={movieData} />
        </>
    )
}

export default NetflixOrigionals