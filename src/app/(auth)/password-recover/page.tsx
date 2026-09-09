'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function PasswordRecoverPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your password recovery logic here
    try {
      // await sendRecoveryEmail(email);
      setSubmitted(true);
    } catch (error) {
      console.error('Recovery error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Page */}
      <main className="bg-white w-full min-h-[calc(100vh-37px)] p-8 flex flex-col items-center dark:bg-gray-900 font-sans">
        {/* Elements Top Start */}
        <div className="absolute top-0 left-0 hidden lg:block h-10">
          <div className="w-32 h-32 2xl:w-48 2xl:h-48 absolute top-14 left-24 2xl:top-16 rounded-full bg-blue-600 dark:bg-blue-500 opacity-10"></div>
          <div className="flex w-44 h-44 2xl:w-56 2xl:h-56 rounded-none rounded-br-full bg-blue-600 dark:bg-blue-500 opacity-15"></div>
        </div>
        {/* Elements Top End */}

        {/* Container Start */}
        <div className="w-full max-w-96 flex flex-col items-center gap-3 2xl:gap-6 h-fit my-auto">
          {/* Logo Client Start */}
          <Image
            className="w-fit h-8 2xl:h-12"
            src="/images/logos/logo_client.svg"
            alt="Logo Client"
            width={151}
            height={48}
            priority
          />
          {/* Logo Client End */}

          {/* Card Start */}
          <section className="w-full bg-white p-4 xl:p-8 rounded-xl transition-shadow duration-300 shadow hover:shadow-lg border border-gray-200">
            <div className="mb-3">
              <h1 className="text-xl font-semibold text-gray-700 mb-1.5 dark:text-white text-center">
                Recupere su contraseña
              </h1>
              <p className="text-gray-700 dark:text-gray-400 text-base text-center">
                {submitted
                  ? 'Hemos enviado un enlace de recuperación a tu correo'
                  : 'Ingrese su email y le enviaremos un enlace para recuperar el acceso a su cuenta.'}
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@correo.com"
                    required
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:focus:ring-blue-500 transition-colors duration-200"
                  />
                  <p className="mt-1 text-sm text-gray-600">
                    Este campo es requerido.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-6 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-sm font-medium rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Enviando...' : 'Restablecer contraseña'}
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Si existe una cuenta con este correo, recibirás un enlace para restablecer tu contraseña en los próximos minutos.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full px-5 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-medium rounded-lg transition-colors duration-200"
                >
                  Intentar Nuevamente
                </button>
              </div>
            )}

            {/* Back to Login Link */}
            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
              >
                Volver a Iniciar Sesión
              </Link>
            </div>
          </section>
          {/* Card End */}
        </div>
        {/* Container End */}

        {/* Elements Bottom Start */}
        <div className="absolute bottom-0 right-0 hidden lg:block rotate-180">
          <div className="w-32 h-32 2xl:w-48 2xl:h-48 absolute top-14 left-24 2xl:top-16 rounded-full bg-blue-600 dark:bg-blue-500 opacity-10"></div>
          <div className="flex w-44 h-44 2xl:w-56 2xl:h-56 rounded-none rounded-br-full bg-blue-600 dark:bg-blue-500 opacity-15"></div>
        </div>
        {/* Elements Bottom End */}
      </main>
      {/* Footer */}
      <footer className="flex justify-center bg-gray-200 dark:bg-gray-900 w-full py-2 border-t border-gray-300 dark:border-gray-800">
        <div className="w-full text-gray-900 dark:text-gray-100 font-medium flex items-center justify-center">
          <span className="text-sm mr-3 border-r border-r-gray-900 dark:border-r-gray-100 pr-3">
            BackOffice © 2026
          </span>
          <span className="text-sm">Powered by</span>
          <Image src="/images/logos/logo_origin.svg" alt="Origin" width={64} height={24} className="ml-1.5 h-auto" />
        </div>
      </footer>
    </>
  );
}
