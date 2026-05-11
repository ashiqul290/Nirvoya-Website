export default function Rating() {

   const averageRating = 4.0;
   const totalRatings = "1,153";

   // Data for the distribution bars
   const ratingData = [
      { label: "5", percentage: 52 },
      { label: "4", percentage: 24 },
      { label: "3", percentage: 12 },
      { label: "2", percentage: 7 },
      { label: "1", percentage: 5 },
   ];

   return (
      <div className="  px-6 py-8 rounded-md mt-4">
         {/* Top Header Section */}
         {/* <div
            className="text-center"
            role="img"
            aria-label={`Average rating ${averageRating} out of 5 stars based on ${totalRatings} ratings`}
         >
            <h3 className="text-slate-900 font-semibold text-5xl">
               {averageRating.toFixed(1)}
            </h3>

            <div className="flex justify-center gap-2 mt-6">
               {[...Array(5)].map((_, i) => (
                  <svg
                     key={i}
                     xmlns="http://www.w3.org/2000/svg"
                     className={`size-4 ${i < Math.floor(averageRating) ? "fill-[#ffc107]" : "fill-[#CED5D8] "}`}
                     viewBox="0 0 24 24"
                     aria-hidden="true"
                  >
                     <path d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z" />
                  </svg>
               ))}
            </div>

            <p className="text-sm font-medium mt-4 text-slate-600">
               {totalRatings} ratings
            </p>
         </div> */}

         <div className="">
            {ratingData.map((item) => (
               <div key={item.label} className="flex mt-4 items-center">
                  <div className=" shrink-0 flex items-center justify-between">
                     <p className="text-sm text-slate-600 font-semibold ">
                        {item.label} stars
                     </p>
                    
                  </div>

                  {/* Progress Bar Track */}
                  <div className="bg-gray-300 w-50.25 rounded h-2 ml-3">
                     <div
                        className="h-full rounded bg-[#ffc107]"
                        style={{ width: `${item.percentage}%` }}
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow={item.percentage}
                        aria-label={`${item.label.split(".")[0]} star reviews`}
                     ></div>
                  </div>

                  {/* Percentage Text */}
                  <div className="shrink-0 w-12">
                     <p className="text-sm text-slate-600 font-semibold ml-3">
                        {item.percentage}%
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};