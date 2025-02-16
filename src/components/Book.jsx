// eslint-disable-next-line react/prop-types
function Book({ index, image, title, author, price, hot }) {
  return (
    <div key={index} className="my-6 flex flex-col">
      <div className="h-full rounded-lg shadow-lg overflow-hidden group relative cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out bg-white">
        {hot && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
            HOT
          </span>
        )}
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-cover rounded-t-lg"
        />
        <div className="p-4 flex flex-col">
          <div className="flex items-center mb-2">
            <p className="text-sm font-medium text-white bg-green-700 py-1 px-4 rounded-xl">
              {price}
            </p>
          </div>
          <h2 className="mb-2 font-bold text-gray-800 text-xl">{title}</h2>
          <p className="text-gray-600 mb-1">{author}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-green-300 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out rounded-lg"></div>
      </div>
    </div>
  );
}

export default Book;
