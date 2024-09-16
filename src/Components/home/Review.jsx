import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import Splide's default CSS
import { useEffect, useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/reviews.json"); // Make sure the path is correct relative to `public` folder
        const data = await response.json();
        setReviews(data);
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setIsLoading(false); // Still disable loading in case of an error
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className="p-8">
      {isLoading ? (
        <p className="text-center text-gray-500">Loading reviews...</p>
      ) : (
        <Splide
          options={{
            type: "loop", // Ensures infinite loop
            autoplay: true, // Enables autoplay
            interval: 3000, // Time between transitions (3 seconds)
            pauseOnHover: false, // Prevents pause on hover
            perPage: 1, // Show 1 slide per page
            gap: "1rem", // Space between slides
            arrows: true, // Enable arrows
            pagination: true, // Show pagination indicators
            breakpoints: {
              640: { perPage: 1 },
              768: { perPage: 1 },
              1024: { perPage: 1 },
            },
          }}
          className="splide"
        >
          {reviews.map((review) => (
            <SplideSlide key={review._id}>
              <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
                <div className="mt-4 text-6xl flex flex-col justify-center items-center gap-6">
                  <div>
                    <span className="text-yellow-500">
                      {"★".repeat(review.rating)}
                    </span>
                    <span className="text-gray-300">
                      {"★".repeat(5 - review.rating)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mt-2">
                      {review.details}
                    </p>
                    <h3 className="text-3xl font-semibold text-center mt-7">
                      {review.name}
                    </h3>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      )}

      {/* Custom arrows */}
      {!isLoading && (
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="splide__arrow splide__arrow--next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Review;
