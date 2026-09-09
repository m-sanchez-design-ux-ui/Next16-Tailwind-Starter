'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="bg-white w-full h-fit lg:h-screen p-8 flex flex-col items-center dark:bg-gray-900 font-sans">
      {/* Elements Top Start */}
      <div className="absolute top-0 left-0 hidden lg:block h-10">
        <div className="w-32 h-32 2xl:w-48 2xl:h-48 absolute top-14 left-24 2xl:top-16 rounded-full bg-blue-600 dark:bg-blue-500 opacity-10"></div>
        <div className="flex w-44 h-44 2xl:w-56 2xl:h-56 rounded-none rounded-br-full bg-blue-600 dark:bg-blue-500 opacity-15"></div>
      </div>
      {/* Elements Top End */}

      <div className="flex flex-col items-center justify-between gap-5 h-fit my-auto">
        {/* Logo Client Start */}
        <Image
          className="w-30 md:w-36 h-fit z-10 lg:absolute lg:top-8"
          src="/images/logos/logo_client.svg"
          alt="Logo Client"
          width={144}
          height={44}
          priority
        />
        {/* Logo Client End */}

        {/* Container Inner Start */}
        <section className="flex flex-col justify-center items-center z-10 w-full max-w-100 lg:max-w-205 gap-6 min-h-80">
          <Image
            src="/images/errors/error-404.svg"
            alt="404 Error"
            width={400}
            height={300}
            className="w-full max-w-52 xl:max-w-75 2xl:max-w-100"
          />
          <h2 className="text-gray-700 text-xl md:text-2xl font-semibold text-center dark:text-gray-100">
            ¡Ups! Página no encontrada
          </h2>
          <p className="w-full max-w-5xl text-gray-700 text-sm md:text-base font-normal text-center leading-normal dark:text-gray-100">
            Lo sentimos, no encontramos la página que buscas.
            <br />
            Revisa la URL o usa los botones de navegación para seguir explorando.
            <br />
            Puedes volver a la página principal desde aquí.
          </p>
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:text-gray-100 dark:hover:text-gray-100 border border-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-600 focus:ring-opacity-30 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-200"
          >
            Ir al Inicio
          </Link>
        </section>
        {/* Container Inner End */}

        {/* Logo ORIGIN Start */}
        <Image
          src="/images/logos/logo_origin.svg"
          alt="Logo Origin"
          width={112}
          height={52}
          className="w-20 md:w-28 h-fit z-10 lg:absolute lg:bottom-8"
        />
        {/* Logo ORIGIN End */}
      </div>

      {/* Elements Bottom Start */}
      <div className="absolute bottom-0 right-0 hidden lg:block rotate-180">
        <div className="w-32 h-32 2xl:w-48 2xl:h-48 absolute top-14 left-24 2xl:top-16 rounded-full bg-blue-600 dark:bg-blue-500 opacity-10"></div>
        <div className="flex w-44 h-44 2xl:w-56 2xl:h-56 rounded-none rounded-br-full bg-blue-600 dark:bg-blue-500 opacity-15"></div>
      </div>
      {/* Elements Bottom End */}
    </main>
  );
}
