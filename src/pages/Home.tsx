import * as React from "react";
import Layout from "../components/Layout";
import VideoCard from "../components/VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../store/thunks/fetchVideos";
import { AppDispatch } from "../store";
import { openSidebar } from "../store/slices/sidebarSlice";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { videos } = useSelector((state: any) => state.videos);

  React.useEffect(() => {
    dispatch(openSidebar()); // open sidebar on home page
    dispatch(fetchVideos()); // fetch videos on home page
  }, [dispatch]);

  return (
    <Layout>
      <div className="xl:w-10/12 mx-auto">
        <div className="grid grid-cols-12 mx-auto">
          {videos?.map((video: any) => (
            <div
              key={video.id}
              className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-4 xxl:col-span-3"
            >
              <VideoCard
                thumbnail={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
                channelTitle={video.snippet.channelTitle}
                id={video.id}
                channelId={video.snippet.channelId}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
