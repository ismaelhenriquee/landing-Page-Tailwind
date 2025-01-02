import { iconOptions, iconPhone, iconSolutions,iconCard, phone } from '@/assets';
import { ItemsService } from './ItemService';
import Image from 'next/image';

function SectionService() {
    return (
        <section className=" flex items-start relative w-full h-[865px] px-[30px]">
            <div className="flex-1 max-w-[594px]">
                <span className="text-primary-orange text-sm font-bold uppercase mb-9 mt-2 block">
                    Serviçoes Exclusivos
                </span>
                <h2 className=" leading-tight text-primry-gray font-bold text-[56px] mb-6">
                    Gerencie suas Finanças sem sair de casa
                </h2>
                <p className="text-lg max-w-[554px] mb-16 text-second-gray">
                    veja como você pode cuidar das suas finanças pelo app itáu
                    de forma segura, rápida e o melhor, no conforto da sua casa.
                </p>
                <ul className="flex flex-col gap-7">
                    <li className="flex items-center gap-10 pb-7 border-b-[1px]">
                        <ItemsService
                            alt="Icon Phone"
                            icon={iconPhone}
                            text="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                        />
                    </li>
                    <li className="flex items-center gap-10 pb-7 border-b-[1px]">
                        <ItemsService
                            alt="Icon Options"
                            icon={iconOptions}
                            text="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                        />
                    </li>
                    <li className="flex items-center gap-10 pb-7 border-b-[1px]">
                        <ItemsService
                            alt="Icon Solutions"
                            icon={iconSolutions}
                            text="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                        />
                    </li>
                    <li className="flex items-center gap-10 pb-7 border-b-[1px]">
                        <ItemsService
                            alt="Icon Card"
                            icon={iconCard}
                            text="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                        />
                    </li>
                </ul>
            </div>
            <div className='absolute top-0 w-[35%] flex items-center right-0 h-full bg-gray-phone'>
                <Image src={phone} alt="icon phone" className='translate-x-[-50%]' />
                
            </div>
        </section>
    );
}
export { SectionService };
