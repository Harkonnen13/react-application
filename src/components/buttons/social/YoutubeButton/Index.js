import React from 'react';
import SvgButton from '../../../_comp-base/SvgButton/Index.js';

/**
 * Youtube social button
 * @param {*} className 
 * @param {*} href 
 * @param {*} width 
 * @param {*} height
 */
const YoutubeButton = (props) => {
  return(
    <SvgButton {...props}>
      <path d='M16.23 7.102c-2.002-.136-6.462-.135-8.461 0-2.165.148-2.419 1.456-2.436 4.898.017 3.436.27 4.75 2.437 4.898 1.999.135 6.459.136 8.461 0 2.165-.148 2.42-1.457 2.437-4.898-.018-3.436-.271-4.75-2.438-4.898zm-6.23 7.12v-4.444l4.778 2.218-4.778 2.226zm2-12.222c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z'/>
    </SvgButton>
  )
}

export default YoutubeButton;