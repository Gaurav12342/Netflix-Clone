import { FC, useState, forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Dialog, DialogContent, Paper, PaperProps } from "@mui/material";
import "../../App.css";
import Draggable from "react-draggable";
import ReactPlayer from "react-player";
import axios from "utils/AxiosInterceptor";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

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

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Carousel: FC<IProps> = (props) => {
  const { data, name } = props;
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isAlert, setIsAlert] = useState(false);

  const handleDialog = (value: any) => {
    const isTv = value?.media_type ? value?.media_type : "movie";
    setOpen(false);
    axios
      .get(`${isTv}/${value?.id}/videos`)
      .then((data: any) => {
        if (data?.status === 200) {
          if (!data?.data?.results.length) {
            setIsAlert(true);
          } else {
            const url = `https://www.youtube.com/watch?v=${data?.data?.results[0]?.key}`;
            setVideoUrl(url);
            setOpen(true);
          }
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
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsAlert(false);
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
              <div key={dd?.id}>
                <div
                  className="bg-slate-400 w-56 sm:w-72 md:w-64 2xl:w-72 cursor-pointer"
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

      <Snackbar
        open={isAlert}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          The video not found.!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Carousel;
