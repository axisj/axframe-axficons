import * as React from "react";
import { AXFIconComponent, AXFIconProps } from "../common/AXFIconComponent";
function AXFIconsFileLine(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M5 3H10V4H5V3Z' fill='black'/>
<path d='M12 5H5V6H12V5Z' fill='black'/>
<path d='M5 7H12V8H5V7Z' fill='black'/>
<path fillRule='evenodd' clipRule='evenodd' d='M2 16V0H10C11.7 0 15 1 15 5V16H2ZM10 1H3V15H14V5C14 1 10 1 10 1Z' fill='black'/>
</svg>

    </AXFIconComponent>
  );
}
export { AXFIconsFileLine };
