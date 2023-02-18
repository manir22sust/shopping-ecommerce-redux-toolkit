import spinner from "../../assets/images/spinner-svg.svg";

import "./Loader.scss";

export const Loader = () => {
  return (
    <div className="container">
      <div className="flex flex-center loader">
        <img src={spinner} alt="loader" />
      </div>
    </div>
  );
};
