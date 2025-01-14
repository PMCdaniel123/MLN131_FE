import { booksList } from "../constants/constants";
import Book from "./Book";

function BookList() {
  return (
    <div className="mt-20">
      <h1 className="text-center text-4xl font-bold mb-8 text-green-500">
        Các sản phẩm liên quan
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {booksList.map((book, index) => (
          <Book key={index} index={index} {...book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
