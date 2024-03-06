import { useState, ChangeEvent } from "react";

const SearcherTextField: React.FC = () => {
    const [desiredProduct, setDesiredProduct] = useState('');

    const desiredProductFunction = (e: ChangeEvent<HTMLInputElement>) => {
        setDesiredProduct(e.target.value);
    }

    const handleSearch = () => {
        window.location.href = `/product/search/${encodeURIComponent(desiredProduct).toLowerCase()}`;
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSearch();
    }

    return (
        <div className='c-searcher__container'>
            <div className='mx-4 my-4 c-searcher'>
                <i className='iconsax' icon-name='search-normal-2' onClick={handleSearch} onKeyUp={handleKeyPress}></i>
                <input type='text' placeholder='Busca tu producto...' className='mx-2 c-searcher__input' onChange={desiredProductFunction} />
            </div>
        </div>
    );
}

export default SearcherTextField;
