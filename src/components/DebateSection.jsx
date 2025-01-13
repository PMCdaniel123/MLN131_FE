import MainDebate from "./MainDebate";

// eslint-disable-next-line react/prop-types
function DebateSection({ title }) {
  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl font-bold mb-8 text-green-700">
        {title}
      </h1>
      <div className="container mx-auto bg-gray-50 p-10">
        <MainDebate
          idea={
            "Lorem ipsum dolor sit amet consectetur de adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet consectetur de adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet consectetur de adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet consectetur de adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna."
          }
        />
      </div>
    </div>
  );
}

export default DebateSection;
