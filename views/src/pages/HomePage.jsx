// import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Batikbg from '../assets/batik-img.png'
import Typography from '../assets/topography.svg'


const HomePage = () => {
    return(
        <>
            <Navbar />
            
            <div className='h-72'>
                <div className='absolute mx-20 mt-10 text-2xl text-slate-600'>
                    <p>Batik is a culture <br /> that must <br /> be preserved.</p>
                </div>
                <div className="bg-repeat h-72 opacity-20" style={{backgroundImage: `url(${Typography})`}}>
                </div>
            </div>

            {/* <h1>Halaman Home</h1> */}

            <img src={Batikbg} width='100%' alt="no-img" />
        </>
    )
}

export default HomePage