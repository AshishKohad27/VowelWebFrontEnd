import { Routes, Route } from "react-router-dom";
import CustomerOrders from "../Components/CustomerOrders";
import OrderSuccess from "../Components/OrderSuccess";
import PaymentMethod from "../Components/PaymentMethod";
import Admin from "../Pages/Admin";
import Cart from "../Pages/Cart";
import Landing from "../Pages/Landing";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import SinglePage from "../Pages/SinglePage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/paymentmethod" element={<PaymentMethod />} />
      <Route path="/orderplace" element={<OrderSuccess />} />
      <Route path="/customerorder" element={<CustomerOrders />} />
      <Route path="/:productID" element={<SinglePage />} />
    </Routes>
  );
}
