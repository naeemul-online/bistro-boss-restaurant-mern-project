import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 30 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-400}
    >
      <div
        className="hero h-[700px]"
       
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>       
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
