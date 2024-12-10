import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    content: "Great service! They fixed my phone in no time.",
  },
  {
    id: 2,
    name: "Jane Smith",
    content: "Very professional and convenient. Highly recommended!",
  },
  {
    id: 3,
    name: "Mike Johnson",
    content: "Excellent work on my water-damaged phone. It's like new!",
  },
];

function ReviewSlider() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const goToPrevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative bg-blue-400 p-8 rounded-lg shadow-lg overflow-hidden">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">
        Customer Reviews
      </h2>
      <div className="relative h-40">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`absolute top-0 left-0 w-full transition-transform duration-700 ease-in-out ${
              index === currentReview
                ? "transform translate-x-0 opacity-100"
                : index ===
                  (currentReview - 1 + reviews.length) % reviews.length
                ? "transform -translate-x-full opacity-0"
                : "transform translate-x-full opacity-0"
            }`}
          >
            <p className="text-white text-xl mb-2">{review.content}</p>
            <p className="text-white font-semibold text-lg">{review.name}</p>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={goToPrevReview}
          className="bg-white text-blue-600 hover:bg-gray-200 p-2 rounded-full focus:outline-none transition-transform duration-200"
        >
          &#8592;
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          onClick={goToNextReview}
          className="bg-white text-blue-600 hover:bg-gray-200 p-2 rounded-full focus:outline-none transition-transform duration-200"
        >
          &#8594;
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentReview ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentReview(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewSlider;
