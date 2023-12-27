import { useSelector } from "react-redux";
import OrderSummary from "../Components/OrderSummary";
import { selectItemsInCart } from "../Redux/cartSlice";
import CartItems from "../Components/CartItems";

const Cart = () => {
  const cartItems = useSelector(selectItemsInCart);

  return (
    <div className="container-max py-8 pb-16">
      <div className="min-h-[60vh] pb-8 md:flex justify-center gap-8">
        <CartItems />
        {cartItems && cartItems.length !== 0 && <OrderSummary />}
      </div>
    </div>
  );
};

export default Cart;
