import { FC, useState, useEffect } from 'react'
import Carousel from 'component/Carousel';
import axios from 'utils/AxiosInterceptor';

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
            <Carousel name={"NETFLIX ORIGINALS"} data={movieData} />
        </>
    )
}

export default NetflixOrigionals