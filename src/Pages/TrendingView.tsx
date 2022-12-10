import { FC, useEffect, useState } from "react";
import Carousel from "component/Carousel";
import axios from "utils/AxiosInterceptor";
import comman from "Resources/comman.json";

const TrendingView: FC = () => {
  const [movieData, setMoviewData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`trending/tv/week?&language=en-US`)
      .then((response: any) => {
        setMoviewData(response?.data || {});
      })
      .catch();
  };
  return (
    <>
      <Carousel name={comman?.TRENDING_VIEW} data={movieData} />
    </>
  );
};

export default TrendingView;
