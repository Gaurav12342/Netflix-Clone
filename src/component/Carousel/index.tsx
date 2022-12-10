import { FC, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Dialog, DialogContent, Paper, PaperProps } from "@mui/material";
import "../../App.css";
import Draggable from "react-draggable";
import ReactPlayer from "react-player";
import axios from "utils/AxiosInterceptor";

interface IData {
  page?: number;
  results?: string[];
  total_pages?: number;
  total_results?: number;
}
interface IProps {
  data?: IData;
  name?: string;
}

interface IMovie{
    
}


const PaperComponent = (props: PaperProps) => {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
};

const Carousel: FC<IProps> = (props) => {
  const { data, name } = props;
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleDialog = (value: any) => {
    console.log("Values", value);

    setOpen(false);
    axios
      .get(`movie/${value?.id}/videos`)
      // .get(`tv/${value?.id}/videos`)
      .then((data: any) => {
        if (data?.status === 200) {
          const url = `https://www.youtube.com/watch?v=${data?.data?.results[0]?.key}`;
          setVideoUrl(url);
          setOpen(true);
        }
      })
      .catch();
  };

  const handleClose = () => {
    setOpen(false);
    setVideoUrl("");
  };

  const settings = {
    centerMode: false,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    dots: true,
    arrows: true,
    focusOnSelect: true,
  };

  return (
    <>
      <div className="px-6 pb-8">
        <Grid className="pb-5">
          <label className="uppercase font-bold text-3xl text-white">
            {name}
          </label>
        </Grid>
        <Slider {...settings}>
          {data?.results?.map((dd: any) => {
            return (
              <div className="w-8">
                <div
                  className="bg-slate-400 w-56 h-73 cursor-pointer"
                  onClick={() => handleDialog(dd)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w342/${dd?.poster_path}`}
                    alt="movie-image"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        fullWidth={true}
        maxWidth={"md"}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogContent>
          <ReactPlayer
            muted={true}
            width={"840px"}
            playing={true}
            controls={true}
            url={videoUrl}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Carousel;
