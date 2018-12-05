import React from 'react';

const NavigationButton = ({href, width, height}) => {
  return(
    <a href={href || '/'}>
      <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height}   viewBox='0 0 24 24'><path d='M12 2c3.196 0 6 2.618 6 5.602 0   3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984   2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21  8  16.398 4.531-7.188 8-12.2 8-16.398   0-4.199-3.801-7.602-8-7.602zm0  11c-1.657 0-3-1.343-3-3s1.343-3  3-3 3 1.343 3 3-1.343 3-3 3z'/>
      </svg>
    </a>
  )
}

export default NavigationButton;