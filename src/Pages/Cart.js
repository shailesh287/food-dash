import { useSelector } from "react-redux";
import OrderSummary from "../Components/OrderSummary";
import { selectItemsInCart } from "../Redux/cartSlice";
import CartItems from "../Components/CartItems";

const Cart = () => {
  const cartItems = useSelector(selectItemsInCart);

  return (
    <div className="container-max py-8 pb-16">
      <h1 className="text-2xl my-4 font-semibold">Cart</h1>

      <div className="min-h-[60vh] pb-8 md:flex gap-8">
        <CartItems />
        {cartItems && cartItems.length !== 0 && <OrderSummary />}
      </div>
    </div>
  );
};

export default Cart;
