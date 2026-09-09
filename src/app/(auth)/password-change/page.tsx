'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react';

export default function PasswordChangePage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (newPassword.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    setIsLoading(true);
    try {
      // Simulación de API
      setSuccess(true);
    } catch {
      setError('Error al actualizar la contraseña. Intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Page */}
      <main className="bg-white w-full min-h-[calc(100vh-37px)] p-8 flex flex-col items-center dark:bg-gray-900 font-sans relative overflow-hidden">
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
          <section className="w-full bg-white dark:bg-gray-800 p-4 xl:p-8 rounded-xl transition-shadow duration-300 shadow hover:shadow-lg border border-gray-200 dark:border-gray-700">           
            <div className="mb-3">
              <h1 className="text-xl font-semibold text-gray-700 mb-1.5 dark:text-white text-center">
                Actualizar Contraseña
              </h1>
              <p className="text-gray-700 dark:text-gray-400 text-base text-center">
                {success ? 'Cambio realizado con éxito' : 'Ingresa tu nueva clave de acceso'}
              </p>
            </div>

            {success ? (
              <div className="space-y-6 text-center">
                <div className="flex justify-center">
                  <CheckCircle2 size={48} className="text-green-500" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tu contraseña ha sido actualizada correctamente.</p>
                <Link
                  href="/signin"
                  className="w-full block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Ir al Login
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-sm text-red-600 dark:text-red-400 font-medium">
                    {error}
                  </div>
                )}

                {/* New Password */}
                <div>
                  <label 
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Nueva Contraseña
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white dark:placeholder-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-primary_dark outline-none transition-all"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-primary_dark"
                      aria-label={showNewPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    >
                      {showNewPassword ? <EyeOff size={18} strokeWidth={1.5} /> : <Eye size={18} strokeWidth={1.5} />}
                    </button>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Este campo es requerido.</p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label 
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Confirmar Nueva Contraseña
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white dark:placeholder-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-primary_dark outline-none transition-all"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-primary_dark"
                      aria-label={showConfirmPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    >
                      {showConfirmPassword ? <EyeOff size={18} strokeWidth={1.5} /> : <Eye size={18} strokeWidth={1.5} />}
                    </button>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Este campo es requerido.</p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-4 mb-0 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Actualizando...' : 'Cambiar Contraseña'}
                </button>

                {/* Back to Login Link */}
                <div className="mt-6 text-center">
                  <Link
                    href="/signin"
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    Volver a Iniciar Sesión
                  </Link>
                </div>
              </form>
            )}
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