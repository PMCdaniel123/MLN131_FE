import { MessagesSquare, Trophy, UsersRound } from "lucide-react";

function CommunitySection() {
  return (
    <div className="mt-20">
      <div className="flex justify-center items-center w-full relative p-10 h-[300px]">
        <div className="w-full absolute left-0 top-0 right-0 -z-10">
          <img
            src="/news/jean-philippe-delberghe-MmanXAs1sKw-unsplash.jpeg"
            alt=""
            className="w-full h-[300px] object-cover opacity-60"
          />
        </div>
        <div className="grid grid-cols-3 w-full gap-12">
          <div className="col-span-1 p-12 bg-white rounded-lg">
            <div className="flex justify-between items-center text-green-500 font-bold mb-4">
              <p className="text-6xl">100+</p>
              <UsersRound size={40} />
            </div>
            <p className="text-xl font-semibold">Thành viên</p>
          </div>
          <div className="col-span-1 p-12 bg-white rounded-lg">
            <div className="flex justify-between items-center text-green-500 font-bold mb-4">
              <p className="text-6xl">10+</p>
              <Trophy size={40} />
            </div>
            <p className="text-xl font-semibold">Thành tựu</p>
          </div>
          <div className="col-span-1 p-12 bg-white rounded-lg">
            <div className="flex justify-between items-center text-green-500 font-bold mb-4">
              <p className="text-6xl">10+</p>
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
