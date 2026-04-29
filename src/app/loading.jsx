const Loading = () => {
  return (
    <div className="grid grid-cols-12 gap-6 w-10/12 mx-auto my-20">
      {/* Left Sidebar */}
      <div className="col-span-3 space-y-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-6 rounded-md bg-gray-200 animate-pulse"
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="col-span-6 grid grid-cols-2 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="p-5 rounded-xl bg-gray-100/70 shadow-sm space-y-4"
          >
            <div className="h-4 w-3/4 rounded bg-gray-300 animate-pulse"></div>
            <div className="h-3 w-full rounded bg-gray-300 animate-pulse"></div>
            <div className="h-3 w-5/6 rounded bg-gray-300 animate-pulse"></div>
            <div className="h-3 w-2/3 rounded bg-gray-300 animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3 space-y-5">
        <div className="h-6 w-1/2 rounded bg-gray-300 animate-pulse"></div>
        <div className="h-10 rounded-lg bg-gray-200 animate-pulse"></div>
        <div className="h-10 rounded-lg bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
