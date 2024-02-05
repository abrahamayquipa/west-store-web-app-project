type SearcherProps = {
    className?: string
}

const Searcher: React.FC<SearcherProps> = (props) => {
    return (
        <div className={`my-5 c-searcher ${props.className} u-beish-bg`}>
            <i className='iconsax' icon-name='search-normal-2'></i>
            <input type='text' placeholder='Search for products...' className='mx-4 c-searcher__input u-beish-bg'/>
        </div>
    );
}

export default Searcher