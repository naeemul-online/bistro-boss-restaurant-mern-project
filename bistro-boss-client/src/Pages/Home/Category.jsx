// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        Heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h2 className="mb-10 ml-20 text-3xl -mt-10 text-white uppercase">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h2 className="mb-10 ml-20 text-3xl -mt-10 text-white uppercase">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h2 className="mb-10 ml-20 text-3xl -mt-10 text-white uppercase">
            pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h2 className="mb-10 ml-20 text-3xl -mt-10 text-white uppercase">
            desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h2 className="mb-10 ml-20 text-3xl -mt-10 text-white uppercase">
            desserts
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
