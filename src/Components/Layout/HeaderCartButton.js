import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './HeaderCartButton.css';

const HeaderCartButton = (props) => {

  return (
    <button className="button" onClick={props.onClick}> 
      <span className="icon">
      <FontAwesomeIcon icon={faCartShopping} />
      </span>
      <span>Your Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;