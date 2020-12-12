import React from 'react';
import { BaseButton } from 'react-native-gesture-handler';
import RadialGradient from 'react-native-radial-gradient';
import styled from 'styled-components/primitives';
import { Centered } from '../layout';
import { Text } from '../text';
import { CoinRowHeight } from './CoinRow';
import { colors, padding } from '@rainbow-me/styles';

const AddButtonPadding = 19;

const AddButton = styled(Centered)`
  ${padding(0, AddButtonPadding)};
  bottom: 0;
  flex: 0;
  height: ${CoinRowHeight};
  position: absolute;
  right: 0;
  top: 0;
  width: 68px;
`;

const Circle = styled(RadialGradient).attrs(({ isFavorited }) => ({
  center: [0, 15],
  colors: isFavorited
    ? [colors.alpha('#FFB200', 0), colors.alpha('#FFB200', 0.2)]
    : ['#FFFFFF', '#F2F4F7'],
}))`
  border-radius: 15px;
  height: 30px;
  overflow: hidden;
  width: 30px;
`;

const StarIcon = styled(Text).attrs({
  align: 'center',
  color: colors.alpha(colors.blueGreyDark, 0.2),
  letterSpacing: 'zero',
  size: 'smaller',
  weight: 'heavy',
})`
  height: 100%;
  line-height: 28px;
  width: 100%;
`;

const CoinRowAddButton = ({ onPress }) => (
  <AddButton as={BaseButton} onPress={onPress}>
    <Circle>
      <StarIcon>􀅼</StarIcon>
    </Circle>
  </AddButton>
);

export default CoinRowAddButton;