import { FC, useState, useEffect } from "react";
import { Dialog, DialogContent, Paper, PaperProps } from "@mui/material";
import Draggable from "react-draggable";
import ReactPlayer from "react-player";
import axios from "utils/AxiosInterceptor";

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

const Banner: FC = () => {
  const [bannerData, setBannerData] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

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

  return (
    <div>
      <div className="text-center text-yellow-600 mb-10 relative">
        <img
          className="relative w-1/1"
          src={`https://image.tmdb.org/t/p/original/${bannerData?.backdrop_path}`}
          alt="Freedom Blog"
        />
        <div className="absolute top-20 left-10 flex flex-col items-start space-y-8">
          <label className="font-bold text-5xl text-white">
            {bannerData?.name}
          </label>

          <p className="font-bold text-xl text-white text-start">
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
    </div>
  );
};

export default Banner;
