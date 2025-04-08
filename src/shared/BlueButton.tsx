import React from 'react';

type Props = {
  text: string;
  onClick?: () => void;
};

const BlueButton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button className='bg-accent text-white font-semibold px-3 py-2 rounded cursor-pointer' onClick={onClick}>
      {text}
    </button>
  );
};

export default BlueButton;