'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Estados para validación y errores
  const [submitted, setSubmitted] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setLoginError(false);

    // Validación básica antes de enviar
    if (!email || password.length < 6) return;

    setIsLoading(true);
    try {
      // DEMO NOTE: this is a portfolio demo with no real backend — any
      // email/password combination that passes basic validation "logs
      // in" after a short simulated delay.
      await new Promise((resolve) => setTimeout(resolve, 700));
      router.push('/');
    } catch {
      setLoginError(true);
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
                ¡Te damos la bienvenida!
              </h1>
              <p className="text-gray-700 dark:text-gray-400 text-base text-center">
                Iniciá sesión para continuar.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  className={`w-full px-4 py-2.5 bg-gray-50 border ${submitted && !email ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all`}
                />
                {submitted && !email && (
                  <p className="mt-1 text-sm text-gray-600">El campo es requerido.</p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className={`w-full px-4 py-2.5 bg-gray-50 border ${submitted && password.length < 6 ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors"
                    aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  >
                    {showPassword ? <EyeOff size={20} strokeWidth={1.5} /> : <Eye size={20} strokeWidth={1.5} />}
                  </button>
                </div>
                {submitted && !password && (
                  <p className="mt-1 text-sm text-gray-600">El campo es requerido.</p>
                )}
                {submitted && password && password.length < 6 && (
                  <p className="mt-1 text-sm text-gray-600">La contraseña es inválida. Intente nuevamente.</p>
                )}
              </div>

              {/* Global Login Error */}
              {loginError && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                  <span className="text-sm text-red-600 font-medium text-center block">
                    El usuario o la contraseña son incorrectos. Intente nuevamente.
                  </span>
                </div>
              )}
              
              <div className='flex items-center flex-col gap-3 pt-2'>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </button>

                <Link
                  href="/password-recover"
                  className="text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </form>
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