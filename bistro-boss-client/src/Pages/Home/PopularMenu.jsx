
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../hook/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  // console.log(menu)
  const popular = menu.filter(item => item.category === 'popular')
  // console.log(popular)
  return (
    <section>
      <SectionTitle
        Heading="Menu Item"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4 mb-12">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
