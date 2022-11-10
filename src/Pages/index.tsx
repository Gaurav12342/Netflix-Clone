import { FC } from 'react'
import Header from 'component/Layout/Header'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Banner from './Banner';
import TrendingView from './TrendingView';

const Dashboard: FC = () => {
    return (
        <div>
            <Header />
            <Container>
                {/* <Banner /> */}
                <TrendingView />
            </Container >
        </div >
    )
}

export default Dashboard