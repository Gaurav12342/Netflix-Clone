import { FC, useState, useEffect } from "react";
import axios from "utils/AxiosInterceptor";

const Banner: FC = () => {
  const [bannerData, setBannerData] = useState<any>({});

  console.log("bannerData", bannerData);

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

  return (
    <div>
      <div className="text-center text-yellow-600 mb-10 relative">
        <img
          className="relative w-1/1"
          src={`https://image.tmdb.org/t/p/original/${bannerData?.poster_path}`}
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
            <button className="block text-sm text-white mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-slate-400 uppercase">
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
    </div>
  );
};

export default Banner;
