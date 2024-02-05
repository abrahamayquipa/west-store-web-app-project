const SearcherTextField: React.FC = () => {
    return (
        <div className='c-searcher__container'>
            <div className='mx-4 my-4 c-searcher'>
                <i className='iconsax' icon-name='search-normal-2'></i>
                <input type='text' placeholder='Search for products...' className='mx-2 c-searcher__input'/>
            </div>
        </div>
    );
}

export default SearcherTextField