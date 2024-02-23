type SizeCircleProps = {
    size: string;
    isActive?: boolean;
}

const SizeCircle: React.FC<SizeCircleProps> = (props) => {
    return (
        <div className={`my-1 mr-2 px-6 py-2 rounded-3xl ${props.isActive ? 'bg-black text-white' : 'u-beish-bg'}`}>
            <span className='u-regular-font'>{props.size}</span>
        </div>
    )
}

export default SizeCircle;
