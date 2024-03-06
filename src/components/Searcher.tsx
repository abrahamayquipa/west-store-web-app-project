import { useState, ChangeEvent } from "react";

type SearcherProps = {
    className?: string;
}

const Searcher: React.FC<SearcherProps> = (props) => {
    const [desiredProduct, setDesiredProduct] = useState('');

    const desiredProductFunction = (e: ChangeEvent<HTMLInputElement>) => {
        setDesiredProduct(e.target.value);
    }

    const handleSearch = () => {
        window.location.href = `/products/search/${encodeURIComponent(desiredProduct).toLowerCase()}`;
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSearch();
    }

    return (
        <div className={`my-5 c-searcher ${props.className} u-beish-bg`} onChange={desiredProductFunction} onKeyUp={handleKeyPress}>
            <i className='iconsax' icon-name='search-normal-2' onClick={handleSearch}></i>
            <input type='text' placeholder='Busca tu producto...' className='mx-4 c-searcher__input u-beish-bg'/>
        </div>
    );
}

export default Searcher;