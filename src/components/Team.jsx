import { teamData } from "../constants/constants";
import TeamMember from "./TeamMember";

const Team = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-4xl font-bold mb-8 text-green-500">
        Đội ngũ
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
        {teamData.map((member) => (
          <TeamMember
            key={member.name}
            avatar={member.avatar}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
