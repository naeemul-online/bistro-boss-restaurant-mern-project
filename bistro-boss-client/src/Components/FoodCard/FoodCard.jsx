import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useCart from "../../hook/useCart";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart()

  const handleAddToCart = () => {
    // console.log(food);
    if (user && user.email) {
      // TODO: send cart item to the database
      // console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} your item is added successfully`,
            showConfirmButton: false,
            timer: 1000,
          });
          // refetch cart to update the items count
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "You are not login",
        text: "Do you want to log in?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="">
        <img src={image} alt="Shoes" className="cover" />
      </figure>
      <p className="bg-slate-900 absolute right-2 top-2 text-white px-2">
        {price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline border-0 border-b-4 mb-4"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
