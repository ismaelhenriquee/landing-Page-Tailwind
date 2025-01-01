import { arrowExplorer, btnAppleStore, btnGooglePlay, woman } from '@/assets';
import Image from 'next/image';

function SectionHero() {
    return (
        <section className=" px-[30px] w-full h-[704px] bg-img_bg_hero bg-cover bg-center bg-no-repeat">
            <div className='flex items-center justify-between '>
                <div className=" flex-1 max-w-[500px]">
                    <h1 className="text-white text-7xl font-bold mb-4">
                        Tenha seu banco na plama da mão.
                    </h1>
                    <p className="text-white text-xl max-w-[408px] mb-8">
                        Todas as operações que voçcê precisa em um só lugar.
                        Simples, completo e feito pra você.
                    </p>
                    <div className="flex gap-6 mb-24">
                        <button>
                            <Image
                                src={btnAppleStore}
                                alt="Apple Store"
                            />
                        </button>
                        <button>
                            <Image
                                src={btnGooglePlay}
                                alt="Google Play"
                            />
                        </button>
                    </div>
                    <button className="flex items-center gap-2">
                        <Image
                            src={arrowExplorer}
                            alt="Explorer"
                        />
                        <span className="text-white text-sm font-bold">
                            {' '}
                            Continue Explorando
                        </span>
                    </button>
                </div>
                <Image src={woman} alt="woman Image" />
                
            </div>
        </section>
    );
}
export { SectionHero };
