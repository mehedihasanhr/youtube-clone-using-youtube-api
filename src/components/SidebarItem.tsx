import { Link } from "react-router-dom";

type proptypes = {
  title: string;
  link: string;
  icon: string;
};

const SidebarItem = ({ title, link = "/", icon }: proptypes) => {
  return (
    <Link to={link}>
      <div className="flex items-center py-1.5 px-3 hover:bg-zinc-100 hover:cursor-pointer">
        <div className="px-3">
          <i className={`${icon} text-xl`} />
        </div>
        <div className="px-4 text-[15px]">
          <span>{title}</span>
        </div>
      </div>
    </Link>
  );
};
export default SidebarItem;
