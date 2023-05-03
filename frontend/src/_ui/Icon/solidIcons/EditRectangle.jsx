import React from 'react';

const EditReactangle = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    data-cy="edit-rectangle-icon"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.25 6.78906C3.25 4.99414 4.70507 3.53906 6.5 3.53906H12.5C12.9142 3.53906 13.25 3.20328 13.25 2.78906C13.25 2.37485 12.9142 2.03906 12.5 2.03906H6.5C3.87665 2.03906 1.75 4.16571 1.75 6.78906V18.7891C1.75 21.4124 3.87665 23.5391 6.5 23.5391H18.5C21.1234 23.5391 23.25 21.4124 23.25 18.7891V12.7891C23.25 12.3748 22.9142 12.0391 22.5 12.0391C22.0858 12.0391 21.75 12.3748 21.75 12.7891V18.7891C21.75 20.584 20.2949 22.0391 18.5 22.0391H6.5C4.70507 22.0391 3.25 20.584 3.25 18.7891V6.78906ZM16.919 3.46615C17.8218 2.56337 19.2855 2.56337 20.1883 3.46615L21.8229 5.10077C22.7257 6.00355 22.7257 7.46724 21.8229 8.37002L20.3736 9.81934C20.2598 9.763 20.1401 9.70208 20.016 9.63673C19.1806 9.19692 18.1892 8.57963 17.4493 7.83976C16.7095 7.09988 16.0922 6.10851 15.6524 5.27309C15.587 5.14896 15.5261 5.02924 15.4697 4.91545L16.919 3.46615ZM16.3887 8.90042C17.2642 9.77593 18.3777 10.465 19.2595 10.9335L13.56 16.6329C13.2064 16.9866 12.7475 17.216 12.2523 17.2867L8.81963 17.7771C8.0568 17.8861 7.40295 17.2323 7.51193 16.4694L8.00231 13.0367C8.07305 12.5416 8.30248 12.0827 8.65616 11.729L14.3556 6.02959C14.8241 6.91141 15.5131 8.02488 16.3887 8.90042Z"
      fill={fill}
    />
  </svg>
);

export default EditReactangle;