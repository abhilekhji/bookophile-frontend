import Head from "next/head";
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import {MdFullscreen, MdLockOutline} from 'react-icons/md';

function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
      console.log(data);
  }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>UserLogin Page</title>
                <link rel = "icon" href = "	https://icons.iconarchive.com/icons/martz90/circle/128/books-icon.png" type = "image/x-icon">
                </link>
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center z-10">
                <div className="bg-white rounded-xl shadow-2xl flex w-2/3 max-w-4xl">
                   {/* Sign in section */}
                    <div className="w-3/5 p-5">
                      <div className="text-left font-bold">
                        <span className="text-yellow-400">Booko</span>Phile
                      </div>
                      <div className="py-10">
                          <h2 className="text-3xl font-bold text-green-500 mb-2">
                              Sign in to Account
                          </h2>
                        <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>

                          {/* Social login section */}
                          <div className="flex justify-center my-2 space-x-2">
                            <a href="#" className="border-2 border-gray-200 rounded-full p-3 hover:border-blue-600 hover:text-blue-600">
                              <FaFacebookF className="text-sm"/>
                            </a>
                            <a href="#" className="border-2 border-gray-200 rounded-full p-3 hover:border-blue-400 hover:text-blue-400">
                              <FaLinkedinIn className="text-sm"/>
                            </a>
                            <a href="#" className="border-2 border-gray-200 rounded-full p-3 hover:border-red-600
                             hover:text-red-600">
                              <FaGoogle className="text-sm"/>
                            </a>
                          </div>
                          <p className="text-gray-400 my-3">or use your email account</p>

                          {/* React form here */}
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col items-center">
                              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                <FaRegEnvelope className="text-gray-400 m-2"/>
                                <input 
                                  type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"
                                  {...register('email',{ required: true })}
                                />
                              </div>
                              {errors.email && <p className="text-red-500
                                text-xs -mt-3 mb-2 ml-32">please input your email</p>}

                              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                <MdLockOutline className="text-gray-400 m-2"/>
                                <input 
                                type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"
                                {...register('password',{ required: true })}
                                />
                              </div>
                              {errors.password && <p className="text-red-500
                                text-xs -mt-3 mb-3 ml-28">please input your password</p>}
                                
                              <div className="flex justify-between w-64 mb-5">
                                  <label className="flex items-center text-xs font-semibold"><input type="checkbox" name="remember" className="mr-1" />Remember me</label>
                                  <a href="#" className="text-xs underline underline-offset-4 font-semibold">Forgot Password?</a>
                              </div>
                              <button 
                                type="submit" 
                                className="border-2 border-green-500 rounded-full px-12 py-2 text-green-500 inline-block font-semibold hover:bg-green-500 hover:text-white"
                                >
                                SIGN IN
                              </button>
                            </div>
                          </form>
                          
                      </div>
                    </div>

                   {/* Sign up section */}
                    <div className="w-2/5 p-5 bg-green-400 text-white rounded-tr-xl rounded-br-xl py-36 px-12">
                      <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
                      <div className="border-2 w-10 border-white inline-block mb-2"></div>
                      <p className="mb-2">Enter your personal details and start your journey with us.</p>
                      <button 
                        type="submit" 
                        className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
                      >SIGN UP</button>
                    </div>
               </div>
            </main>

            
        </div>
    )
}

export default Login


