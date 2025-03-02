import React from 'react';
import './styles/ImageModal.css';

interface ImageModalProps {
  image: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <div className='modal_overlay' onClick={onClose}>
      <div className='modal_content' onClick={(e) => e.stopPropagation()}>
        <img src={image} alt='Full Size' />
      </div>
    </div>
  );
};

export default ImageModal;
