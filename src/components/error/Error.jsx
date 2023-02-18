import "./Error.scss";
import error from "../../assets/images/error.png";

export const Error = () => {
  return (
    <div className="container">
      <div class="flex flex-center error">
        <img src={error} alt="error" />
      </div>
    </div>
  );
};
