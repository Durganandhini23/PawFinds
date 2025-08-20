import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const PetCard = ({ pet }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(pet));
  };

  return (
    <div className="pet-card">
      <h3>{pet.name}</h3>
      <p>Price: ${pet.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default PetCard;
