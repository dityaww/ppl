import Navbar from "../components/Navbar"
import AboutImg from '../assets/about-batik.png'

const About = () => {
    return(
        <>
            <Navbar />

            <div className="flex justify-between mt-10 mx-20">
                <div className="w-1/2">
                    <h1 className="mb-5 font-bold text-amber-800 text-xl">What is Batik?</h1>
                    <p>
                        Batik is a very valuable national cultural heritage of Indonesia. 
                        The history of batik in Indonesia can be traced to the period of 
                        the Hindu-Buddhist kingdoms in the 7th to 14th centuries, and has 
                        continued to develop until now. After Indonesian independence in 1945, 
                        batik was recognized as an important part of Indonesia national cultural
                        heritage and became increasingly popular worldwide.
                    </p>
                </div>
                <div>
                    <img src={AboutImg} alt="err_img" className="w-100 rounded-md" />
                </div>
            </div>
        </>
    )
}

export default About
