import { FaUtensilSpoon } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload nad then get url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been added`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle
        Heading="ADD AN ITEM"
        subHeading="Whats new?"
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Recipe Name</span>
          </div>
          <input
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full "
            {...register("name", { required: true })}
          />
        </label>

        {/* category  */}

        <div className="flex justify-center items-center gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Select a category</span>
            </div>
            <select
              defaultValue="default"
              className="select select-bordered w-full"
              {...register("category", { required: true })}
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="offered">Offered</option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drink">Drink</option>
            </select>
          </label>

          {/* Price */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="text"
              placeholder="price"
              className="input input-bordered w-full "
              {...register("price", { required: true })}
            />
          </label>
        </div>
        {/* recipe details */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipes Details</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
            {...register("recipe", { required: true })}
          ></textarea>
        </label>

        <div className="from-control w-full my-6">
          <input
            type="file"
            className="file-input w-full max-w-xs"
            {...register("image", { required: true })}
          />
        </div>

        <button className="btn">
          Add Item <FaUtensilSpoon></FaUtensilSpoon>
        </button>
      </form>
    </div>
  );
};

export default AddItems;
