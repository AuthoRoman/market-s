import * as React from "react"
import { SVGProps } from "react"
const DinDonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#414141"
      fillRule="evenodd"
      d="M15.278 3.384a6.5 6.5 0 0 0-6.474-.048.5.5 0 0 1-.491-.871A7.5 7.5 0 0 1 19.499 9h-.5.5v4a.5.5 0 0 1-1 0V9a6.5 6.5 0 0 0-3.221-5.616ZM6.009 5.336a.5.5 0 0 1 .215.674A6.5 6.5 0 0 0 5.5 9v5a3.49 3.49 0 0 1-1.05 2.5H17a.5.5 0 1 1 0 1H2a.5.5 0 0 1 0-1A2.5 2.5 0 0 0 4.5 14V9m5.52 11.568a.5.5 0 0 1 .683.181 1.5 1.5 0 0 0 2.595 0 .5.5 0 1 1 .864.502 2.5 2.5 0 0 1-4.325 0 .5.5 0 0 1 .182-.683Z"
      clipRule="evenodd"
    />
    <path
      fill="#414141"
      fillRule="evenodd"
      d="M.646.646a.5.5 0 0 1 .708 0l22 22a.5.5 0 0 1-.708.708l-22-22a.5.5 0 0 1 0-.708Z"
      clipRule="evenodd"
    />
  </svg>
)
export default DinDonIcon
