import React from 'react';
import {TextProps} from 'react-native';

import {TextSubTitle} from './styles';

interface TextTopProps extends TextProps {
  sizeText: number;
  children: React.ReactNode;
  bold: boolean;
}

const SubTitleText: React.FC<TextTopProps> = ({
  sizeText,
  children,
  bold,
  ...props
}) => {
  return (
    <>
      <TextSubTitle subTitleSize={sizeText} isBold={bold} {...props}>
        {children}
      </TextSubTitle>
    </>
  );
};

export default SubTitleText;
