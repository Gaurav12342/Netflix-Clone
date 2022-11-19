import { FC } from 'react'
import Header from 'component/Layout/Header'
import { Grid } from '@mui/material';
import Banner from './Banner';
import TrendingView from './TrendingView';
import NetflixOrigionals from './NetflixOrigionals';
import TopRated from './TopRated';
import ComediesMovies from './ComediesMovies';
import ActionMovies from './ActionMovies';

const Dashboard: FC = () => {
    return (
        <Grid className="bg-stone-800">
            <Grid className='my-5 mx-5'>
                <Header />
                <Grid>
                    {/* <Banner /> */}
                    <TrendingView />
                    <NetflixOrigionals />
                    <TopRated />
                    <ActionMovies />
                    <ComediesMovies />
                </Grid >
            </Grid>
        </Grid>
    )
}

export default Dashboard