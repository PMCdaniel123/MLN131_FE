import { eventsList } from "../constants/constants";
import Event from "./Event";

function EventList() {
  return (
    <div className="mt-40">
      <h1 className="text-center text-4xl font-bold mb-8 text-green-500">
        Các sự kiện nổi bật
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {eventsList.map((event, index) => (
          <Event key={index} index={index} {...event} />
        ))}
      </div>
    </div>
  );
}

export default EventList;
