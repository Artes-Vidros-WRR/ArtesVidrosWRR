import Link from "next/link";
import Image from "next/image";

import { servicesData } from "@/data/servicesData";

export const Cards = () => {

  //Componente Principal - Rodando map e Rendenizando Cards 
  return (
    <section>
      <section className="m-auto w-9/12 lg:grid lg:grid-cols-3 text-center">
        {servicesData.map(({ image, title, url }, index) => {

          const borderColor = index % 2 === 0 ? 'border-color-primary' : 'border-color-secundary';

          return (

            <Link key={url} href={`/servicos/${url}`} className={` grid justify-items-center m-5 my-10 p-5 border-b-4 ${borderColor} rounded-xl shadow-2xl bg-white	 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-90`} >

              <div className="my-2">
                <Image
                  src={image}
                  alt={`ícone do item ${title}.`} 
                  height={112}  
                  width={112}
                />
              </div>

              <h3 className="my-2 text-2xl font-bold"> {title} </h3>

              <p className="my-1 mt-3  text-lg   hover:text-gray-600 transition-colors duration-300">Mais detalhes</p>

            </Link>

          )
        })}
      </section>

      <section className="m-auto w-9/12">
        <div
          className={` grid justify-items-center m-5 my-10 p-5 border-2 border-x-color-primary border-y-color-secundary rounded-xl shadow-2xl bg-white transition-transform duration-300 ease-in-out transform hover:scale-110`} >

          <div className="my-2">

          </div>

          <h3 className="my-2 text-3xl font-bold"> Não encontrou o que procura? </h3>

          <p className="my-4  text-xl   hover:text-gray-600 transition-colors duration-300"> Não se preocupe. Criamos um serviço personalizado para você! </p>

          <Link href={'https://wa.me/5511980977240/?text=Ol%C3%A1+Vidra%C3%A7aria+Artes+Vidros+W.R.R.+Gostaria+de+Solicitar+um+Or%C3%A7amento+Gratuito.'}
            className="my-5 bg-gradient-to-r from-color-primary  to-color-secundary hover:from-color-secundary  hover:to-color-primary text-black font-bold py-2 px-6 rounded-full shadow-md transition-transform duration-1000 ease-in-out transform hover:scale-110 active:text-red-600 animate-pulse ">
            Solicitar Projeto Personalizado
          </Link>

        </div>
      </section>
    </section>
  )
};