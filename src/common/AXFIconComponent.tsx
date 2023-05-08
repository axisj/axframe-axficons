import * as React from 'react';
import styled from '@emotion/styled';
import { SVGProps } from 'react';

export interface AXFIconProps {
  fontSize?: string | number;
  color?: string;
  secondColor?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export type CustomizedSVGComponentProps = Omit<AXFIconProps, 'viewBox'>;
export type CustomizedSVGComponent = React.FC<CustomizedSVGComponentProps>;

function AXFIconComponent({
  fontSize = '1em',
  children,
  secondColor,
  ...rest
}: AXFIconProps) {
  const width = typeof fontSize === 'string' ? fontSize : fontSize + 'px';
  const height = typeof fontSize === 'string' ? fontSize : fontSize + 'px';

  console.log('secondColor', secondColor);

  return (
    <Container
      width={width}
      height={height}
      secondColor={secondColor}
      {...rest}
    >
      {children}
    </Container>
  );
}

const Container = styled.div<{
  width: string;
  height: string;
  color?: string;
  secondColor?: string;
}>`
  display: inline-flex;
  svg {
    width: ${p => p.width};
    height: ${p => p.height};
  }
  [fill='black'] {
    fill: ${p => p.color ?? 'currentColor'};
  }
  [fill='#FF0000'] {
    fill: ${p => p.secondColor ?? 'currentColor'};
  }
`;

export { AXFIconComponent };
