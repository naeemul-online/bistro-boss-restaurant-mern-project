import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-12">
      <SectionTitle
        Heading="TESTIMONIALS"
        subHeading="What Our Clients Say"
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        {reviews.map((review) => (
          <SwiperSlide key={review._id} className="">
            <div className="flex flex-col items-center space-y-4 mx-12">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />

              <p>{review.details}</p>
              <h2 className="font-bold">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
