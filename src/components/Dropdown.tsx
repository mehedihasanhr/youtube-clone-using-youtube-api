import * as React from "react";
import { useOuterClick } from "../hooks/useOuterClick";

type propstype = {
  toggle: string | React.ReactElement;
  toggleContainerClassName?: string;
  menuContainerClassName?: string;
  children: React.ReactElement;
};

const Dropdown = ({
  toggle,
  children,
  toggleContainerClassName,
  menuContainerClassName,
}: propstype) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useOuterClick(ref, () => setIsOpen(false));

  return (
    <div className="relative" ref={ref}>
      {/* toggle */}
      <div className="hover:cursor-pointer" onClick={() => setIsOpen(true)}>
        {toggle}
      </div>

      {/* menu */}
      {isOpen && (
        <div
          className={`absolute w-fit min-w-100 h-fit py-2 z-10 ${menuContainerClassName}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
