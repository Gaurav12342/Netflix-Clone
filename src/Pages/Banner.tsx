import { FC, useState, useEffect, forwardRef, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  Paper,
  PaperProps,
  useTheme,
  useMediaQuery,
} from "@mui/material";
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

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    fetchData();
  }, []);

  const bannerImage = useMemo(() => {
    return smDown
      ? `https://image.tmdb.org/t/p/original/${bannerData?.poster_path}`
      : `https://image.tmdb.org/t/p/original/${bannerData?.backdrop_path}`;
  }, [smDown, bannerData]);

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
        <img className="relative w-1/1 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r from-slate-100 to-blue-500" src={bannerImage} alt="Freedom Blog" />
        <div className="absolute top-20 left-10 flex flex-col items-start space-y-8">
          <label className="font-bold text-5xl md:text-4xl text-white w-2/5 text-start md:w-[40rem]">
            {bannerData?.name}
          </label>

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

          <p className="font-bold text-xl md:text-lg text-white text-start w-2/5 md:w-[40rem]">
            {bannerData?.overview}
          </p>

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
