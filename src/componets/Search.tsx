import { iconSearch } from '@/assets';
import Image from 'next/image';

function Seach() {
    return (
        <div className="flex items-center gap-4 max-w-80:">
            <Image
                src={iconSearch}
                alt="Search"
            />
            <input
                type="text"
                className="bg-transparent outline-none text-white placeholder:text-white mr-10"
                placeholder="Buscar"
            />
        </div>
    );
}
export { Seach };
