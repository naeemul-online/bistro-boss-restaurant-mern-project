import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover title={title} img={img}></Cover>}
      <div className="grid grid-cols-1  md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
      <Link to={`/order/${title}`} ><button className="btn btn-outline border-0 border-b-4 mb-10">Order Now</button></Link>
      </div>
    
    </div>
  );
};

export default MenuCategory;
