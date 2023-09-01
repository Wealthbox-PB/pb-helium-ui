import React from 'react';

interface ImageButtonProps {
  imagePath: string;
  imageLabel: string;
  selected: boolean;
  aspectRatio?: `4:5` | `16:9` | `3:4` | `2:3` | `1:1`;
  onClick?: () => void;
}

const ImageButton = ({
  imagePath,
  imageLabel,
  selected = false,
  aspectRatio = `4:5`,
  onClick,
}: ImageButtonProps) => {
  const buttonStyles = {
    backgroundImage: `url(${imagePath})`,
    paddingBottom: '100%',
  }

  const aspectRatios = {
    '4:5': '75%',
    '16:9': '56.25%',
    '3:4': '133.33%',
    '2:3': '150%',
    '1:1': '100%',
  }
  
  buttonStyles.paddingBottom = aspectRatios[aspectRatio];

  return (
    <>
      <button
        type="button"
        data-selected={selected}
        className="h-image-button"
        aria-label={imageLabel}
        style={buttonStyles}
        onClick={onClick}>
      </button>
    </>
  );
};

export { ImageButton };
