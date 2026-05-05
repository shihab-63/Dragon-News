import { format } from "date-fns";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div>
      {/* Logo */}
      <figure className="flex flex-col items-center space-y-2 justify-center py-3">
        <img src={logo} alt="Logo" />
        <p className="text-gray-500 font-semibold text-xl">Journalism Without Fear or Favour</p>
        <p className="text-xl font-semibold text-gray-500">{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
      </figure>
    </div>
  );
};

export default Header;
