import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import './Cart.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItems = (
    <ul className='cart-items'>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className='total'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className='actions'>
        <button className='buttonA' onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className='buttonB'>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
// import { useContext } from "react";
// import Modal from "../UI/Modal";
// import "./Cart.css";
// import CartContext from "../../store/cart-context";
// import CartItem from "./CartItem";

// const Cart = (props) => {
//   const cartCtx = useContext(CartContext);
//   const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

//   const hasItems = cartCtx.items.length > 0;

//   const cartItemRemoveHandler = (id) => {};

//   const cartItemHandler = (item) => {
//     cartCtx.addItem(item);
//   };

//   const cartItems = (
//     <ul className="cart-items">
//       {cartCtx.items.map((item) => (
//         <CartItem
//           key={item.id}
//           name={item.name}
//           amount={item.amount}
//           price={item.price}
//           onRemove={cartItemRemoveHandler.bind(null, item.id)}
//           onAdd={cartItemHandler.bind(null, item.id)}
//         />
//       ))}
//     </ul>
//   );

//   return (
//     <Modal onClose={props.onClose}>
//       {cartItems}
//       <div className="total">
//         <span>Total Amount</span>
//         <span>{totalAmount}</span>
//       </div>

//       <div className="actions">
//         <button className="buttonA" onClick={props.onClose}>
//           Close
//         </button>
//         {hasItems && <button className="buttonB">Order</button>}
//       </div>
//     </Modal>
//   );
// };

// export default Cart;
