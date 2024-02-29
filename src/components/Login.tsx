import React, { useState, useEffect, ChangeEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { loginSesion } from '../logic/loginSesion';
import models from '../assets/images/models.png';

const Login: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const shadow = document.querySelector('body') as HTMLElement;

    useEffect(() => {
        setEmail('administrador');
        setPassword('administrador');

        if (shadow && isVisible) shadow.style.overflow = 'hidden';
        else shadow.style.overflow = 'auto';
    }, [isVisible]);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const handleLogin = () => {
        if (email !== 'administrador' || password !== 'administrador') toast.error('Error: usuario y contraseña incorrectos');
        else {
            setIsVisible(false);
            toast.success('Usuario y contraseña correctos');
            loginSesion({ email, password });
        }
    };

    return (
        <>
            {isVisible && (
                <section className='fixed flex items-center justify-center px-4 bg-gray-800 bg-opacity-50 z-50 inset-0 overflow-auto'>
                    <Toaster />
                    <section className='relative bg-white w-full mx-4 md:mx-auto max-w-3xl rounded-xl'>
                        <section className='absolute top-6 right-4 scale-150'>
                            <i className='iconsax' icon-name='x' onClick={() => setIsVisible(false)}></i>
                        </section>
                        <section className='flex flex-col md:flex-row'>
                            <section className='flex w-full sm:w-3/6 px-8 login__image rounded-xl'>
                                <img src={models} alt={models} className='self-end' />
                            </section>
                            <section className='w-full md:w-1/2 px-8 py-4 sm:py-12'>
                                <h2 className='mb-4 text-6xl text-center u-extra-bold-font'>LOGIN</h2>
                                <div className='mb-4'>
                                    <div className='flex mb-3 c-searcher u-beish-bg'>
                                        <i className='iconsax' icon-name='mail'></i>
                                        <input
                                            type='text'
                                            placeholder='Enter your email address'
                                            className='mx-4 c-searcher__input u-beish-bg'
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                    </div>
                                    <div className='flex mb-3 c-searcher u-beish-bg'>
                                        <i className='iconsax' icon-name='lock-1'></i> 
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder='Enter your password'
                                            className='w-2/3 mx-4 bg-transparent outline-none'
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                        <button onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? (
                                                <i className='iconsax' icon-name='eye'></i>
                                            ) : (
                                                <i className='iconsax' icon-name='eye-slash'></i>
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <input
                                    type='button'
                                    value='Iniciar sesión'
                                    className='p-4 bg-black text-white rounded-full w-full u-regular-font'
                                    onClick={handleLogin} />
                            </section>
                        </section>
                    </section>
                </section>
            )}
        </>
    );
};

export default Login;