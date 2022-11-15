import * as React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import axios from "../lib/axios";

const VideoCardVertical = ({
  thumbnail,
  title,
  channelTitle,
  id,
  channelId,
}: any) => {
  const [channel, setChannel] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchChannel = async () => {
      await axios({
        method: "GET",
        url: "/channels",
        params: {
          part: "contentDetails,snippet,statistics",
          id: channelId,
          alt: "json",
        },
      }).then((res) => {
        if (res.status === 200) {
          setChannel(res.data.items[0]);
        }
      });
    };

    fetchChannel();
  }, [channelId]);

  return (
    <Link to={`/watch?v=${id}&ab_channel=${channelTitle.replace(/\s+/g, "")}`}>
      <div className="flex p-1.5 w-full rounded-sm">
        <div>
          <div className="block w-[150px] w-min-150px h-auto">
            <img src={thumbnail} alt="" className="w-full h-full object-fill" />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <div className="pl-3 pr-7">
            <div className="relative h-fit">
              <h4 className="text-sm lg:text-base font-medium line-clamp-2">
                {title}
              </h4>
            </div>
            <div className=" text-xs text-gray-500 font-medium">
              {channelTitle}
            </div>
            <div className=" text-xs  text-gray-500 font-medium">
              125K views * Streamed 1 month ago
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCardVertical;
