import * as React from "react";
import { SVGProps } from "react";

function CartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="#70C05B" // Начальный цвет иконки
      {...props}
      className="transition-colors duration-300  group-hover:fill-white  " // Использование Tailwind классов
    >
      <path
     
        fillRule="evenodd"
        d="M5.5 21a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM8 19.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM17.5 21a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm2.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM1 .5a.5.5 0 0 0 0 1h3.58c.758 4.291 1.523 8.564 2.17 12.87a2.5 2.5 0 0 0 2.472 2.13H19.36a2.5 2.5 0 0 0 2.451-2.01l1.44-7.196A1.5 1.5 0 0 0 21.778 5.5H7.16a1.49 1.49 0 0 0-.816.24L5.492.914A.5.5 0 0 0 5 .5H1Zm5.666 6.574A.5.5 0 0 1 7.16 6.5h14.62a.5.5 0 0 1 .49.598l-1.44 7.196a1.5 1.5 0 0 1-1.47 1.206H9.222a1.5 1.5 0 0 1-1.484-1.277L6.666 7.074Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default CartIcon;