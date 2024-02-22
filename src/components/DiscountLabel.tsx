type DiscountLabelProps = {
    value?: number
}

const DiscountLabelComponent : React.FC<DiscountLabelProps> = (props) => {
    return (
        <div className='px-4 py-1 rounded-3xl bg-red-100 mx-1'>
            <span className='u-regular-font text-red-500'>{`-${props.value}%`}</span>
        </div>
    )
}

export default DiscountLabelComponent;