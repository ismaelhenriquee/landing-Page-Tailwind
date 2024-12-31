function Header() {
    return (
        <div className=" flex items-center justify-between px-24 h-24 bg-greenBackground w-full">
            <div className="text-white">
                {' '}
                <h3 className=" text-3xl text-white font-semibold">
                    Instasany
                </h3>
            </div>
            <div className=" ml-20">
                <ul className="flex gap-5">
                    <li className=" bg-ItemBackground px-3 font-medium py-1.5 rounded-2xl text-sm text-white">
                        Inicio
                    </li>
                    <li className="hover:bg-ItemBackground hover:text-opacity-100 px-3 py-1.5 rounded-2xl text-sm font-medium text-white text-opacity-40">
                        Benefícios{' '}
                    </li>
                    <li className=" px-3 py-1.5 rounded-2xl text-sm font-medium text-white text-opacity-40">
                        Para quem é o curso?
                    </li>
                    <li className=" px-3 py-1.5 rounded-2xl text-sm font-medium text-white text-opacity-40">
                        Preços promocionais
                    </li>
                    <li className=" px-3 py-1.5 rounded-2xl text-sm font-medium text-white text-opacity-40">
                        Sobre nós
                    </li>
                </ul>
            </div>
            <div>
                <p className="text-white text-base"> Fazer Login</p>
            </div>
        </div>
    );
}

export { Header };
