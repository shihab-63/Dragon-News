import FindUs from "../../Components/FindUs/FindUs";
import QZone from "../../Components/QZone/QZone";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const RightAside = () => {
  return (
    <div className="sticky inset-0">
      <SocialLogin />
      <FindUs />
      <QZone />
    </div>
  );
};

export default RightAside;
