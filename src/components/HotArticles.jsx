function HotArticles() {
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-center text-4xl font-bold mb-8 text-green-500">
        Các bài viết nổi bật
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 flex">
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-full w-full group cursor-pointer">
            <img
              src="/news/caroline-lm-uqveD8dYPUM-unsplash.jpg"
              alt="Main Article"
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300 ease-linear"
            />
            <div className="absolute top-4 left-4 bg-yellow-500 text-white px-2 py-1 text-sm rounded">
              News
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">
                The rise of the gig economy spells the end for these workers the
                old system
              </h2>
              <p className="text-gray-500">22 hours ago</p>
            </div>
            <span className="absolute inset-0 border-b-4 border-transparent group-hover:border-green-500 transition-all duration-1000 group-hover:animate-border"></span>
          </div>
        </div>

        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="flex-1">
            <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-full group cursor-pointer">
              <img
                src="/news/jean-philippe-delberghe-MmanXAs1sKw-unsplash.jpeg"
                alt="Top Right Article"
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300 ease-linear"
              />
              <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 text-sm rounded">
                Events
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">
                  Job Opportunities: Digital, Marketing
                </h3>
                <p className="text-gray-500">August 6, 2021</p>
              </div>
              <span className="absolute inset-0 border-b-4 border-transparent group-hover:border-green-500 transition-all duration-1000 group-hover:animate-border"></span>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-full group cursor-pointer">
              <img
                src="/news/maria-stewart-p4tj0g-_aMM-unsplash.jpeg"
                alt="Bottom Right Article"
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300 ease-linear"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 text-sm rounded">
                News
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">
                  What happened to new viral video?
                </h3>
                <p className="text-gray-500">6 days ago</p>
              </div>
              <span className="absolute inset-0 border-b-4 border-transparent group-hover:border-green-500 transition-all duration-1000 group-hover:animate-border"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotArticles;
