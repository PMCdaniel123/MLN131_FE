import { professorsList } from "../constants/constants";
import Professor from "./Professor";

function ProfessorList() {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-8 text-green-500">
        Tư vấn với chuyên gia
      </h1>
      {professorsList.map((professor, index) => (
        <Professor key={index} index={index} {...professor} />
      ))}
    </div>
  );
}

export default ProfessorList;
