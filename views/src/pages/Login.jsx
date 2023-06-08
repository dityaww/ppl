import Typography from '../assets/topography.svg'
import LoginImg from '../assets/about-batik.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [datas, setDatas] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value} = e.target

        setDatas({
            ...datas,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(datas);
    }

    return(
        <>
            <section className='h-[100vh]'>
                <div className='absolute left-60 top-20 z-50 bg-white border-neutral-200 w-2/3 h-[75%] border-2 shadow-lg rounded-xl overflow-hidden'>
                    <div className='grid grid-cols-2 h-full'>
                        <div className='mx-28 my-20'>
                            <div className="top-content flex flex-col justify-center items-center gap-3 mb-8">
                                <h1 className='text-4xl font-bold text-neutral-600'>Welcome Back</h1>
                                <p className='text-center text-sm text-neutral-400 font-semibold'>Welcome back to Batik Kencana! Start by entering your details.</p>
                            </div>

                            <form action="" onSubmit={handleSubmit}>
                                <div className='flex flex-col mb-2 gap-1'>
                                    <label htmlFor="username" className='text-neutral-700 font-medium'>Username</label>
                                    <input 
                                        className='border border-neutral-300 rounded-md py-0.5 outline-neutral-400 px-2 text-neutral-800'    
                                        type="text" 
                                        name="username" 
                                        id="username" 
                                        value={datas.username} 
                                        onChange={handleChange} required/>
                                </div>
                                
                                <div className='flex flex-col mb-2 gap-1'>
                                    <label htmlFor="password" className='text-neutral-700 font-medium'>Password</label>
                                    <input 
                                        className='border border-neutral-300 rounded-md py-0.5 outline-neutral-400 px-2 text-neutral-800' 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        value={datas.password} 
                                        onChange={handleChange} required/>
                                </div>

                                <div className='flex gap-2 mb-8'>
                                    <input type="checkbox" name="" id="" />
                                    <p className='text-sm'>Remember me</p>
                                </div>

                                <input type='submit' className='bg-yellow-700 text-white border-none cursor-pointer w-full py-1.5 rounded-md hover:bg-yellow-800 hover:ring-2 hover:ring-yellow-700 hover:duration-700' value='Sign In'/>
                            </form>

                            <div className='flex gap-1 justify-center text-sm mt-2'>
                                <p className='text-neutral-600'>Dont have account?</p>
                                <Link to='/register'>
                                    <span className='text-blue-500 font-semibold'>Register</span>
                                </Link>
                            </div>
                        </div>

                        <div className='h-full overflow-hidden'>
                            <img src={LoginImg} className='w-full' alt="" />
                        </div>
                    </div>
                </div>

                <div className="bg-repeat h-[100vh] opacity-20" style={{backgroundImage: `url(${Typography})`}}></div>
            </section>

            {/* <section className="h-[100vh] grid grid-cols-2">
                <div className="">
                    <p>abs</p>
                    <p>abc</p>
                </div>

                <div className="bg-slate-200">
                </div>
            </section> */}
            
        </>
    )
}

export default Login;