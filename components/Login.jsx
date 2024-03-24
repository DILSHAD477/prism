
import { Button } from "@/components/ui/button";


const Login = () => {
    return (
      
        <div className=" lg:w-[400px]  bg-slate-900 border border-transparent rounded-xl shadow-lg mt-40 text-white flex justify-center items-center bg-opacity-2 lg:ml-[575px] sm:w-[300px] sm:ml-[225px]">
            <div className="p-8 flex flex-col">
                    <h1 className="text-white font-bold text-center text-4xl pt-4 pb-8 mb-16 mt-4">Login</h1>
                    <form action="">
                    <div className="flex flex-col">
                        <input type="email" name="email" placeholder="Email" className=" mx-6 placeholder-white pl-2 placeholder-opacity-100 bg-slate-700 opacity-100 border rounded-sm border-slate-700 w-72 text-white"/>
                        
                    </div>
                    <div className="flex flex-col">
                        <input type="password" name="password" placeholder="Password" className=" mx-6 mt-6 mb-6 placeholder-white pl-2 placeholder-opacity-100 bg-slate-700 opacity-100 border rounded-sm border-slate-700 w-72 text-white"/>
                        
                    </div>
                    <div>
                        <div className="flex flex-row mb-10">
                            <input type="checkbox" className="ml-6"></input>
                            <label htmlFor="Remember Me" className=  "pl-1 text-gray-400 text-sm">Remember Me</label>
                        
                        
                            <a href="/" className="text-sky-600 text-sm ml-12 ">Forgot Password?</a>
                        </div>
                    </div>
                     <Button type="submit" className="w-72 bg-slate-100 text-black rounded-sm font-bold text-md ml-6 h-8">Log In</Button>
                    <div class="flex flex-row text-gray-400 items-center my-8">
                        <hr class="border-gray-200 w-full  ml-6"/>
                        <p class="text-center text-sm px-2">OR</p>
                        <hr class="border-gray-200 w-full mr-8"/>
                    </div>
                    <Button type="submit" className="w-72 bg-slate-100 text-black rounded-sm font-bold text-md ml-6 h-8">Sign Up</Button>

                       
                        </form>
                </div>
                </div>
           
  )
}

export default Login;