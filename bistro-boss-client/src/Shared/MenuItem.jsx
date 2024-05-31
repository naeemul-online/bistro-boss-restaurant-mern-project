const MenuItem = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="flex space-x-4 items-center">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-32"
        src={image}
        alt=""
      />
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <h3>{recipe}</h3>
      </div>
      <p className="text-xl text-[#BB8506]">{price}</p>
    </div>
  );
};

export default MenuItem;
