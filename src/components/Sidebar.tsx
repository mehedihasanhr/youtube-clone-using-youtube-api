import * as React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="md:w-16 md:overflow-hidden lg:w-56 hidden lg:block bg-white">
      <Scrollbars
        autoHide={true}
        autoHideTimeout={1000}
        autoHideDuration={200}
        style={{ height: "calc( 100vh - 56px)" }}
      >
        <div className="border-b py-3 mr-3">
          <SidebarItem title="Home" link="/" icon="bi bi-house-door-fill" />
          <SidebarItem title="Explore" link="/" icon="bi bi-compass" />
          <SidebarItem title="Shorts" link="/" icon="bi bi-file-play" />
          <SidebarItem
            title="Subscriptions"
            link="/"
            icon="bi bi-collection-play"
          />
        </div>
        <div className="border-b py-3 mr-3">
          <SidebarItem title="Library" link="/" icon="bi bi-collection" />
          <SidebarItem title="History" link="/" icon="bi bi-compass" />
          <SidebarItem title="Your videos" link="/" icon="bi bi-file-play" />
          <SidebarItem title="Watch later" link="/" icon="bi bi-stopwatch" />
          <SidebarItem
            title="Liked videos"
            link="/"
            icon="bi bi-hand-thumbs-up"
          />

          {/* show more  */}
          <div>
            <div className="flex items-center py-1.5 px-3 hover:bg-zinc-100 hover:cursor-pointer">
              <div className="px-3">
                <i className={`bi bi-chevron-down text-xl`} />
              </div>
              <div className="px-4">
                <span>Show more</span>
              </div>
            </div>
          </div>
        </div>
        {/* more youtube */}
        <div className="border-b py-3 mr-3">
          <SidebarItem title="Gaming" link="/" icon="bi bi-controller" />
          <SidebarItem title="Live" link="/" icon="bi bi-broadcast" />
          <SidebarItem title="Sports" link="/" icon="bi bi-joystick" />
        </div>
        <div className="border-b py-3 mr-3">
          <SidebarItem title="Settings" link="/" icon="bi bi-gear" />
          <SidebarItem title="Report history" link="/" icon="bi bi-flag" />
          <SidebarItem title="Help" link="/" icon="bi bi-question-circle" />
          <SidebarItem
            title="Send feedback"
            link="/"
            icon="bi bi-info-square"
          />
        </div>
      </Scrollbars>
    </div>
  );
};

export default Sidebar;
