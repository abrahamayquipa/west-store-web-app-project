const ColorCircle: React.FC = () => {
    return (
        <section className='flex flex-wrap'>
            <div className='mr-2 c-circle__back flex'>
                <div className='c-circle__front c-circle--beish self-center mx-auto'></div>
            </div>
            <div className='mr-2 c-circle__back flex'>
                <div className='c-circle__front c-circle--pink self-center mx-auto'></div>
            </div>
            <div className='mr-2 c-circle__back flex'>
                <div className='c-circle__front c-circle--brown self-center mx-auto'></div>
            </div>
            <div className='mr-2 c-circle__back flex'>
                <div className='c-circle__front c-circle--green self-center mx-auto'></div>
            </div>
            <div className='mr-2 c-circle__back flex'>
                <div className='c-circle__front c-circle--purple self-center mx-auto'></div>
            </div>
        </section>
    )
}

export default ColorCircle;