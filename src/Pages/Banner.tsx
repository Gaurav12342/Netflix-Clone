import { FC, useState, useEffect, forwardRef } from "react";
import { Dialog, DialogContent, Paper, PaperProps } from "@mui/material";
import Draggable from "react-draggable";
import ReactPlayer from "react-player";
import axios from "utils/AxiosInterceptor";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

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

const Banner: FC = () => {
  const [bannerData, setBannerData] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isAlert, setIsAlert] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`/discover/tv?with_networks=213`)
      .then((response: any) => {
        if (response?.status === 200) {
          const resultslength = response?.data?.results;
          const newIndex = Math.floor(Math.random() * resultslength?.length);
          resultslength?.length &&
            resultslength !== NaN &&
            setBannerData(resultslength[newIndex]);
        }
      })
      .catch();
  };

  const handleDialog = (value: any) => {
    setOpen(false);
    axios
      .get(`tv/${value}/videos`)
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
    <div>
      <div className="text-center text-yellow-600 mb-10 relative">
        <img
          className="relative w-1/1"
          src={`https://image.tmdb.org/t/p/original/${bannerData?.backdrop_path}`}
          alt="Freedom Blog"
        />
        <div className="absolute top-20 left-10 flex flex-col items-start space-y-8">
          <label className="font-bold text-5xl text-white w-2/5 text-start">
            {bannerData?.name}
          </label>

          <p className="font-bold text-xl text-white text-start w-2/5">
            {bannerData?.overview}
          </p>

          <div className="flex">
            <button
              className="block text-sm text-white mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-slate-400 uppercase"
              onClick={() => handleDialog(bannerData?.id)}
            >
              Play
            </button>
            <button className="block text-sm text-white mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-slate-400 uppercase">
              Add To My List
            </button>
          </div>

          <p className="uppercase font-bold text-xl text-white text-start">
            {`RATING: ${bannerData?.vote_average}/10`}
          </p>
        </div>
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
    </div>
  );
};

export default Banner;
