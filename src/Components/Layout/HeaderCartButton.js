import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import CartIcon from '../Cart/CartIcon';
import './HeaderCartButton.css';

// const HeaderCartButton = (props) => {
//   return (
//     <button className="button">
//       <span className="icon">
//         <CartIcon />
//       </span>
//       <span>Your Cart</span>
//       <span className="badge">0</span>
//     </button>
//   );
// };

const HeaderCartButton = (props) => {
  return (
    <button className="button">
      <span className="icon">
      <FontAwesomeIcon icon={faCartShopping} />
      </span>
      <span>Your Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;