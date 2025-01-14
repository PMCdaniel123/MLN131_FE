import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Professor({ avatar, name, role, experience, phone }) {
  return (
    <div className="my-4">
      <div className="grid grid-cols-5 items-center justify-between gap-16 p-6 bg-gray-50 rounded-lg shadow-lg">
        <div className="col-span-1">
          <img
            src={avatar}
            alt={name}
            className="w-full h-56 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col col-span-3">
          <h2 className="mb-2 flex items-center gap-2">
            <span className="text-gray-500">Tên chuyên gia:</span>{" "}
            <span className="text-2xl font-bold text-green-700">{name}</span>
          </h2>
          <p className="mb-2 flex items-center gap-2">
            <span className="text-gray-500">Chức vụ:</span>{" "}
            <span className="text-lg ">{role}</span>
          </p>
          <div>
            <p className="text-gray-500 mb-1">Kinh nghiệm:</p>
            <ul className="list-disc list-inside">
              {
                // eslint-disable-next-line react/prop-types
                experience.map((item, index) => (
                  <li key={index} className="text-lg">
                    {item}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="col-span-1">
          <Link
            to={phone}
            className="flex items-center gap-2 font-bold text-green-700 hover:text-green-500 transition ease-linear duration-200"
          >
            <Phone size={30} /> <span>Liên hệ ngay</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Professor;
