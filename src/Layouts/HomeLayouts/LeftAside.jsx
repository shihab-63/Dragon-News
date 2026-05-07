import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftAside = () => {
  const [categorys, setCategorys] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategorys = async () => {
      try {
        const response = await axios("/categories.json");
        setCategorys(response.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategorys();
  }, []);

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  return (
    <div className="sticky inset-0">
      <h2 className="font-bold text-xl">All Caterogy {categorys.length}</h2>
      <div className="grid grid-cols-1 gap-3 mt-4 text-xl">
        {categorys.map((category) => (
          <NavLink
            key={category.id}
            to={`category/${category.id}`}
            className={({isActive}) => `btn btn-ghost outline-0 active:outline-0 text-lg justify-start ${isActive ? "bg-base-300 font-semibold" : "text-gray-500 font-medium"}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftAside;
