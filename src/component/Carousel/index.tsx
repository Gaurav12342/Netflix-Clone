
import { FC, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from '@mui/material';
import '../../App.css';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';

interface IProps {
    data?: any,
    name?: string
};

const PaperComponent = (props: PaperProps) => {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}


const Carousel: FC<IProps> = (props) => {
    const { data, name } = props;
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const settings = {
        centerMode: false,
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        dots: true,
        arrows: true,
        focusOnSelect: true
    };

    return (
        <>
            <div className='px-6 pb-8'>
                <Grid className="pb-5">
                    <label className='uppercase font-bold text-3xl text-white'>
                        {name}
                    </label>
                </Grid>
                <Slider {...settings}>
                    {data?.results?.map((dd: any) => {
                        return (
                            <div className='w-8'>
                                <div className='bg-slate-400 w-56 h-73 cursor-pointer' onClick={handleClickOpen}>
                                    <img src={`https://image.tmdb.org/t/p/w342/${dd?.poster_path}`} alt="movie-image" />
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Subscribe
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Carousel