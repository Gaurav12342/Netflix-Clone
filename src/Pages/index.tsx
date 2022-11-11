import { FC } from 'react'
import Header from 'component/Layout/Header'
import { Grid } from '@mui/material';
import Banner from './Banner';
import TrendingView from './TrendingView';

const Dashboard: FC = () => {
    return (
        <Grid className='my-5 mx-5'>
            <Header />
            <Grid>
                {/* <Banner /> */}
                <TrendingView />
            </Grid >
        </Grid>
    )
}

export default Dashboard