import swimming from "../../assets/swimming.png";
import classLogo from "../../assets/class.png";
import playGround from "../../assets/playground.png";
const QZone = () => {
  return (
    <div>
      <h2 className="text-xl font-bold my-5">Q-Zone</h2>
      <div className="bg-gray-100 rounded p-3 space-y-5">
        <img src={swimming} alt="Swimming logo" />
        <img src={classLogo} alt="Class logo" />
        <img src={playGround} alt="Play Ground logo" />
      </div>
    </div>
  );
};

export default QZone;
