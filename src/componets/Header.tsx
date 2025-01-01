import { iconUser, logo } from '@/assets';
import Image from 'next/image';
import { ItemMenu } from './ItemMenu';
import { Seach } from './Search';

function Header() {
    return (
        <header className=" flex items-center w-full h-20 bg-primary-orange">
            <div className=" flex items-center justify-between w-full pl-[30px] mx-auto">
                <div className='flex flex-1 items-center justify-between w-5/6'>
                    <div className="flex items-center gap-14">
                        <div className="">
                            <Image
                                src={logo}
                                alt="logo"
                            />
                        </div>
                        <ul className="flex items-center gap-12">
                            <li>
                                <ItemMenu text="Para Você" />
                            </li>
                            <li>
                                <ItemMenu text="Para Empresas" />
                            </li>
                            <li>
                                <ItemMenu text="Serviços" />
                            </li>
                            <li>
                                <ItemMenu text="Ajuda" />
                            </li>
                        </ul>
                    </div>
                    <Seach />
                </div>
                <div className='flex items-center w-1/6 justify-end'>
                <button className='flex w-full items-center gap-4 bg-primary-blue h-20 pl-10'>
                    <Image src={iconUser} alt="icon User" />
                    
                    <span className='text-white font-bold'>Acessar Conta</span>
                </button>
                </div>
            </div>
        </header>
    );
}
export { Header };
