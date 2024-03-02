import { useState } from "react";

const Dropdown: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleGorras = () => window.location.href = '/product/search/?category=1';
    const handleShorts = () => window.location.href = '/product/search/?category=2';
    const handleCamisetas = () => window.location.href = '/product/search/?category=3';
    const handleCalzados = () => window.location.href = '/product/search/?category=4';
    const handleGafas = () => window.location.href = '/product/search/?category=5';

    return (
        <div className='border border-gray rounded-sm z-30'>
            <div className='relative px-6 py-4' onClick={() => setIsVisible(!isVisible)} onMouseEnter={() => setIsVisible(true)}>Categorias</div>
            {isVisible && (
                <div className='absolute border border-gray z-50' onMouseLeave={() => setIsVisible(false)}>
                    <div
                        className='px-6 py-4 bg-white hover:bg-gray-100'
                        onClick={handleGorras}
                    >
                        Gorras
                    </div>
                    <div
                        className='px-6 py-4 bg-white hover:bg-gray-100'
                        onClick={handleShorts}
                    >
                        Shorts
                    </div>
                    <div
                        className='px-6 py-4 bg-white hover:bg-gray-100'
                        onClick={handleCamisetas}
                    >
                        Camisetas
                    </div>
                    <div
                        className='px-6 py-4 bg-white hover:bg-gray-100'
                        onClick={handleCalzados}
                    >
                        Calzados
                    </div>
                    <div
                        className='px-6 py-4 bg-white hover:bg-gray-100'
                        onClick={handleGafas}
                    >
                        Gafas
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
