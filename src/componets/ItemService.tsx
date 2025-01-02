import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ItemsServiceProps{
    icon: string | StaticImport;
    text: string;
    alt: string;
}

function ItemsService(props: ItemsServiceProps) {
  return (
      <>
          <div className="w-7 h-7 flex items-center justify-center">
              <Image
                  src={props.icon}
                  alt={props.alt}
              />
          </div>
          <p className="flex-1 text-txt-gray pr-3">
              {props.text}
          </p>
      </>
  );
}
export { ItemsService };