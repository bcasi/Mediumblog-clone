export const BlogPostSkeleton = () => {
  return (
    <div className="flex animate-pulse">
      <div className="grid grid-cols-3 w-full gap-10 p-10 dark:bg-slate-900 h-screen">
        <div className="ms-4 mt-2 w-full col-span-2 flex flex-col gap-5 px-3 ">
          <div className="flex flex-col gap-10">
            <p className="text-5xl h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></p>
            <p className="text-5xl h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></p>
          </div>
          <div className=" ms-4 mt-2  w-full flex gap-5 divide-y">
            <p className="h-4 w-[12%] bg-gray-200 rounded-full dark:bg-gray-700"></p>
            <p className="h-4 w-[12%] bg-gray-200 rounded-full dark:bg-gray-700"></p>
          </div>

          {/* <ul className="mt-5 flex space-y-3 gap-5 ">
            <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
            <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          </ul> */}
        </div>

        <div className="flex-shrink-0">
          <span className="size-12 block bg-gray-200 rounded-full dark:bg-gray-700"></span>
        </div>

        <div className="ms-4 mt-2 w-full">
          <h3 className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[40%]"></h3>

          <ul className="mt-5 space-y-3">
            <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
            <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
            <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
            <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
