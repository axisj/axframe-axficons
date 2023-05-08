import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "../common/AXFIconComponent";
function AXFIconsLayout(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<g clipPath='url(#clip0_7_2764)'>
<path d='M8 10H1V15H8V10Z' fill='black'/>
<path d='M15 1H8V6H15V1Z' fill='black'/>
<path d='M0 9H7V0H0V9ZM1 1H6V8H1V1Z' fill='black'/>
<path d='M9 16H16V7H9V16ZM10 8H15V15H10V8Z' fill='black'/>
</g>
<defs>
<clipPath id='clip0_7_2764'>
<rect width='16' height='16' fill='white'/>
</clipPath>
</defs>
</svg>

    </AXFIconComponent>
  );
}
export { AXFIconsLayout };
