import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "../common/AXFIconComponent";
function AXFIconsHamburgerMenu(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M15 2H1V3H15V2Z' fill='black'/>
<path d='M15 7H1V8H15V7Z' fill='black'/>
<path d='M15 12H1V13H15V12Z' fill='black'/>
</svg>

    </AXFIconComponent>
  );
}
export { AXFIconsHamburgerMenu };
