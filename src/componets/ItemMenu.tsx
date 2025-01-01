import { arrowDown } from "@/assets";
import Image from "next/image";

interface ItemMenuProps {
    text:string
}

function ItemMenu({text}:ItemMenuProps) {
  return (
      <div>
          <button className="flex items-center gap-3">
              <span className="text-white font-bold">{text}</span>
              <Image
                  src={arrowDown}
                  alt="Arrow Dropdown"
              ></Image>
          </button>
      </div>
  );
}
export { ItemMenu };