type ShadowWhindowProps = {
    state: string
    onClick?: () => void
}

const ShadowWindow: React.FC<ShadowWhindowProps> = (props) => {
    return (
        <div className={`${props.state}`} onClick={props.onClick}></div>
    )
}

export default ShadowWindow