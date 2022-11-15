import * as React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Dropdown from "./Dropdown";

// toggle
const Toggle = () => {
  return (
    <div className="w-8 h-8 relative rounded-full overflow-hidden border-3 border-teal-600">
      <Avatar src="/hridoy.jpg" alt="avatar" />
    </div>
  );
};

// dropdown item
const Item = ({ icon, title }: any) => {
  return (
    <div className="flex items-center py-1.5 px-3 hover:bg-zinc-100 hover:cursor-pointer">
      <div className="mr-2">
        <i className={icon} />
      </div>
      <div>{title}</div>
    </div>
  );
};

// navbar  profile dropdown
const NavProfile = () => {
  return (
    <div>
      <Dropdown toggle={<Toggle />} menuContainerClassName="top-full right-0">
        <div className="w-72 py-2 bg-white shadow-sm rounded-sm">
          <div>
            <div className="flex items-center p-3 border-b">
              <div className="w-10 h-10 relative rounded-full overflow-hidden border-3 border-teal-600">
                <Avatar src="/hridoy.jpg" alt="avatar" />
              </div>
              <div className="px-2">
                <h3 className="text-lg font-medium">Md Mehedi Hasan</h3>
                <Link to="/" className="text-sm text-blue-600">
                  Manage your google account
                </Link>
              </div>
            </div>
          </div>

          <div className="py-3 border-b">
            <Item icon="bi bi-person-square" title="Your channel" />
            <Item icon="bi bi-coin" title="Purchases and memberships" />
            <Item icon="bi bi-play-circle" title="YouTube Studio" />
            <Item icon="bi bi-person-bounding-box" title="Switch account" />
            <Item icon="bi bi-box-arrow-in-right" title="Sign out" />
          </div>

          <div className="py-3 border-b">
            <Item icon="bi bi-person-square" title="Your channel" />
            <Item icon="bi bi-coin" title="Purchases and memberships" />
            <Item icon="bi bi-play-circle" title="YouTube Studio" />
            <Item icon="bi bi-person-bounding-box" title="Switch account" />
            <Item icon="bi bi-box-arrow-in-right" title="Sign out" />
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

export default NavProfile;
