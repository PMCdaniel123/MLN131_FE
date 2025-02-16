import { MessagesSquare, Trophy, UsersRound } from "lucide-react";
import CountUp from "react-countup";

function CommunitySection() {
  return (
    <div className="mt-20">
      <div className="flex justify-center items-center w-full relative p-10 md:h-[300px] h-full">
        <div className="w-full absolute left-0 top-0 right-0 -z-10">
          <img
            src="/news/jean-philippe-delberghe-MmanXAs1sKw-unsplash.jpeg"
            alt=""
            className="w-full md:h-[300px] h-[580px] object-cover opacity-60"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-12">
          <div className="col-span-1 p-6 md:p-12 bg-white rounded-lg">
            <div className="flex justify-between items-center text-green-500 font-bold mb-4">
              <p className="text-4xl md:text-6xl">
                <CountUp end={300} duration={3} />+{" "}
              </p>
              <UsersRound size={40} />
            </div>
            <p className="text-xl font-semibold">Thành viên</p>
          </div>
          <div className="col-span-1 p-6 md:p-12 bg-white rounded-lg">
            <div className="flex justify-between items-center text-green-500 font-bold mb-4">
              <p className="text-4xl md:text-6xl">
                <CountUp end={10} duration={3} />+{" "}
              </p>
              <Trophy size={40} />
            </div>
            <p className="text-xl font-semibold">Thành tựu</p>
          </div>
          <div className="col-span-1 p-6 md:p-12 bg-white rounded-lg">
            <div className="flex justify-between items-center text-green-500 font-bold mb-4">
              <p className="text-4xl md:text-6xl">
                <CountUp end={10} duration={3} />+{" "}
              </p>
              <MessagesSquare size={40} />
            </div>
            <p className="text-xl font-semibold">Talkshow</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunitySection;
