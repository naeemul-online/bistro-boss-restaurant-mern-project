import {
  FaAd,
  FaBookOpen,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaPaypal,
  FaUsers,
  FaShoppingCart,
  FaStore,
  FaBars,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hook/useCart";
import useAdmin from "../../hook/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaBars></FaBars>
                  Manage Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBookOpen></FaBookOpen>
                  Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaPaypal></FaPaypal>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My cart <span className="">{cart.length}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addReview">
                  <FaBars />
                  Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaAd></FaAd>
                  Payment Real History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myBooking">
                  <FaList></FaList>
                  MyBooking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          {/* Shared nav link */}
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaBars />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/shop">
              <FaStore></FaStore>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
