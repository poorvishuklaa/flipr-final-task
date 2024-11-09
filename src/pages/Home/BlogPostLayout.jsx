import blogImg from "../../assets/images/whitebuilding.svg";

export default function BlogPostLayout() {
  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Featured Post Section */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Featured Post</h2>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <img 
              src={blogImg} 
              alt="Featured" 
              className="w-full h-56 md:h-72 lg:h-80 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">
                By <span className="text-indigo-600">John Doe</span> | May 23, 2022
              </p>
              <h3 className="text-xl font-semibold mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </h3>
              <p className="text-gray-600 mb-4">
                Quis autem vel eum iure reprehenderit qui in voluptate velit esse quam nihil molestiae
                consequatur, vel illum qui dolorem.
              </p>
              <button className="bg-yellow-400 text-black px-4 py-2 font-semibold rounded-sm hover:bg-yellow-500 transition">
                Read More &gt;
              </button>
            </div>
          </div>
        </div>
        
        {/* Centered All Posts Section */}
        <div className="flex justify-center">
          <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">All Posts</h2>
              <a href="#" className="text-indigo-600 text-sm">View All</a>
            </div>
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <div 
                  key={index} 
                  className={`p-4 border-l-4 ${index === 1 ? "border-yellow-300" : "border-transparent"}`} 
                  style={index === 1 ? { backgroundColor: "#FBF6EA" } : {}}
                >
                  <p className="text-sm text-gray-500 mb-1">
                    By <span className="text-indigo-600">John Doe</span> | Aug 23, 2021
                  </p>
                  <h3 className="text-lg font-semibold">
                    8 Figma design systems that you can download for free today.
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

