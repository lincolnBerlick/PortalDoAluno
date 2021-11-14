import React, {Children} from 'react';
import {Text, TextInputProps, TextProps} from 'react-native';

import {TextSubTitle} from './styles';

interface TextTopProps {
  sizeText: string;
  children: string;
}

const SubTitleText: React.FC<TextTopProps> = ({
  sizeText,
  children,
  ...rest
}) => {
  return (
    <>
      <TextSubTitle subTitleSize={sizeText} {...rest}>
        {children}
      </TextSubTitle>
    </>
  );
};

export default SubTitleText;
