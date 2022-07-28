import * as React from 'react';
import { SVGProps } from 'react';

const SvgCheckmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 13 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1.394 3.747 4.488 4.55 6.324-7.154"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCheckmarkIcon;
