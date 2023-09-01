import React from 'react';
interface ImageButtonProps {
    imageName: string;
    imageLabel: string;
    selected: boolean;
    aspectRatio?: `4:5` | `16:9` | `3:4` | `2:3` | `1:1`;
    onClick?: () => void;
}
declare const ImageButton: ({ imageName, imageLabel, selected, aspectRatio, onClick, }: ImageButtonProps) => React.JSX.Element;
export { ImageButton };
