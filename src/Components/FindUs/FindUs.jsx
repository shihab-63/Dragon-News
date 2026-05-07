import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="mt-10">
            <h2 className="text-xl font-bold">Find Us On</h2>
            <div className="flex flex-col gap-2 my-3">
                <button className="btn btn-outline text-base border-gray-200"><FaFacebook className="text-blue-600" size={20} /> Facebook</button>
                <button className="btn btn-outline text-base border-gray-200"><FaTwitter className="text-sky-500" size={20} /> Twitter</button>
                <button className="btn btn-outline text-base border-gray-200"><FaInstagram className="text-red-500" size={20} /> Instragram</button>
            </div>
        </div>
    );
};

export default FindUs;