
import React from 'react';
import SvgButton from '../../_comp-base/SvgButton/Index.js';

/**
 * Cart button
 * @param {*} className 
 * @param {*} href 
 * @param {*} width 
 * @param {*} height
 */
const CartButton = (props) => {
  return(
    <SvgButton {...props}>
      <path d='M19.029 13h2.971l-.266   1h-2.992l.287-1zm.863-3h2.812l.296-1h-2.821l-.287 1zm-.576     2h4.387l.297-1h-4.396l-.288 1zm2.684-9l-.743 2h-1.929l-3.474    12h-11.239l-4.615-11h14.812l-.564 2h-11.24l2.938    7h8.428l3.432-12h4.194zm-14.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672    1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm5.9-7-.9   7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671    1.5-1.5c0-.828-.672-1.5-1.5-1.5z'/>
    </SvgButton>
  )
}

export default CartButton;