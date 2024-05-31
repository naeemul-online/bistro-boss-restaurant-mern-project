import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import './featured.css'

const Featured = () => {
  return (
    <div className="featured mb-10 text-white pt-10">
      <SectionTitle
        Heading="Check it out"
        subHeading="FROM OUT MENU"
      ></SectionTitle>
      <div className="flex justify-center items-center w-2/3 mx-auto gap-10 pb-20 pt-12">
        <img className="w-[400px]" src={featuredImg} alt="" />
        <div className=" space-y-10">
          <h2 className="text-xl">March 20, 2023 WHERE CAN I GET SOME?</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mb-4">Read More</button>
        </div>
        
        
      </div>
    </div>
  );
};

export default Featured;
