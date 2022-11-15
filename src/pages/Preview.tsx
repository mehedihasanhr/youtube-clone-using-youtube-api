import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { fetchChannelById } from "../store/thunks/fetchChannelById";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchVideoById } from "../store/thunks/fetchVideoById";
import Layout from "../components/Layout";
import { closeSidebar } from "../store/slices/sidebarSlice";
import VideoCardVertical from "../components/VideoCardVertical";
import { fetchVideos } from "../store/thunks/fetchVideos";
import _ from "lodash";

const Preview = () => {
  const { videos, video } = useSelector((state: any) => state.videos);
  const { channel } = useSelector((state: any) => state.channel);
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  let [urlSearchParams] = useSearchParams(location.search);
  const videoId: string = urlSearchParams.get("v" as string) || "";

  React.useEffect(() => {
    dispatch(closeSidebar()); // close sidebar on preview page
    dispatch(fetchVideoById(videoId));
    dispatch(fetchVideos());
  }, [dispatch, videoId]);

  React.useEffect(() => {
    if (!_.isEmpty(video)) {
      let id = video.snippet.channelId;
      console.log(id);
      //   dispatch(fetchChannelById(video?.snippet.channelId));
    }
  }, [dispatch, video]);

  return (
    <Layout>
      <div className="w-11/12 m-auto">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-9">
            <div className="h-screen">
              <div className="h-2/3">
                {video && (
                  <iframe
                    title="video"
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
              <div className="py-2">
                <h2 className="text-xl">{video?.snippet?.title}</h2>

                <div className="py-3">{video?.snippet?.description}</div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            {videos.map((v: any) => (
              <VideoCardVertical
                key={v.id}
                thumbnail={v.snippet.thumbnails.medium.url}
                title={v.snippet.title}
                channelTitle={v.snippet.channelTitle}
                id={v.id}
                channelId={v.snippet.channelId}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Preview;
