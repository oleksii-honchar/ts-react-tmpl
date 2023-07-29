import { FaCopyright } from "react-icons/fa";
import moment from "moment";
export function Footer() {
  return (
    <div
      className={`
        h-12 w-full 
        bg-[radial-gradient(ellipse_90%_70%_at_20%_50%,_var(--tw-gradient-stops))] 
        from-md3-ref-primary-primary99 to-md3-ref-primary-primary90
        bg-contain bg-no-repeat bg-top
      `}
    >
      <div className="bg-md3-sys-light-surface/40 w-full h-full">
        <div
          className={`
          mx-auto w-full max-w-2xl md:max-w-3xl lg:max-w-5xl justify-start items-center flex h-full gap-2
          text-md3-sys-light-primary
        `}
        >
          <FaCopyright /> "TS + React + TW" Template &nbsp; {moment().format("YYYY")}
        </div>
      </div>
    </div>
  );
}
