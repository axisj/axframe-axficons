import { FC, HTMLAttributes, memo } from 'react';
import { IconBoxContent, IconBoxLabel, StyledIconBox } from './styles';
import { CustomizedSVGComponent } from '../../src/common/AXFIconComponent';

interface IconBoxProps extends HTMLAttributes<HTMLElement> {
  Icon: CustomizedSVGComponent;
  isClicked: boolean;
  iconSize: number;
  color: string;
  secondColor: string;
  backgroundColor: string;
}
const IconBox: FC<IconBoxProps> = ({
  Icon,
  isClicked,
  iconSize,
  color,
  secondColor,
  backgroundColor,
  ...rest
}) => {
  const label = Icon.name;

  return (
    <StyledIconBox isClicked={isClicked} {...rest}>
      <IconBoxContent color={color} backgroundColor={backgroundColor}>
        <Icon fontSize={iconSize} color={color} secondColor={secondColor} />
      </IconBoxContent>

      <IconBoxLabel>
        {label}
      </IconBoxLabel>
    </StyledIconBox>
  );
};

export default memo(IconBox);
