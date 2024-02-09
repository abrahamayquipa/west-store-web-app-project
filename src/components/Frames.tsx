import casual from '../assets/images/casual-frame.png'
import formal from '../assets/images/formal-frame.png'
import gym from '../assets/images/gym-frame.png'

const Frames: React.FC = () => {
    return (
        <section className='u-beish-bg py-1'>
            <section className='container mx-auto my-16  px-8'>
                <section className='text-center'>
                    <span className='text-5xl u-extra-bold-font'>BROWSE BY DRESS STYLE</span>
                </section>
                <section className=''>
                    <section className='flex flex-col sm:flex-row justify-center '>
                        <img src={casual} alt={casual} className='my-4 mr-2 md:mr-4' />
                        <img src={formal} alt={formal} className='hidden lg:inline my-4' />
                        <img src={gym} alt={gym} className='my-4 ml-2 md:ml-4' />
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Frames