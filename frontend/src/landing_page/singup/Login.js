import {useState} from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import { toast } from 'react-toastify';

function Login() {
    const [userData,setUserData]=useState({email:"",password:""});
    const [errors,setErrors] = useState({});
    const handleChange=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
        // console.log(userData)

    }
    const handleLogin = async(e)=>{
        e.preventDefault();
        const newErrors = {};
        
        if (!userData.email) newErrors.email = true;
        if (!userData.password) newErrors.password = true;

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            toast("Please fill all fields");
            return;
        }
        e.preventDefault();
        

        try{
            const res = await fetch("https://zerodha-clone-0.onrender.com/login",{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify(userData),
                // WithCredentials:true,//needed for session cookies
                credentials: "include", 
            });
           
            const data = await res.json();
            console.log("response status:",res.status);
            console.log("Response data",data);

            if(res.ok){
                // alert("Loginup successful!");
                toast.success("Loginup successful!");
                localStorage.setItem("isAuthenticated", "true");
                window.location.href = `https://zerodha-clone-9-fdhz.onrender.com/dashboard/${data.user.id}`; 
            }else{
                toast.warning(data.message|| "Login failed" );
            }
        }catch(error){
            console.log(error);
            toast.error("Somthing went wrong");
        }
    };
    return ( 
        <form onSubmit={handleLogin}>
            <div className='h-110 w-90  border-2 border-gray-300 rounded-[1vw] mt-22 ml-130 pl-7 pr-5 pb-5 flex flex-col gap-3 shadow-xl/30'>
                <Stack direction="row" spacing={1} className='relative left-67 top-4 '>
                    <IconButton aria-label="delete">
                        <a href="/">
                            <CloseIcon />
                        </a>
                    </IconButton>
                </Stack>
                <div className='flex justify-start gap-3'>
                    <button type="button" className="btn btn-secondary"> <a href="/signup" className='text-white'>Sign up</a></button>  
                    <button type="button" className="btn btn-primary">Log in</button>  
                                
                </div>
                <div className='ml-7'>
                    <h3>Welcome Back</h3>
                    <p>Please enter your details</p>
                    <p>Dont have an account? <a href="/signup">Sign up</a></p>
                </div>
                <div className='flex flex-col gap-3 ml-7'>
                    <input type="email" name='email' onChange={handleChange}  placeholder="Enter your email" className={`w-60 h-10 p-3 focus:outline-none focus:ring-0 focus:ring-offset-0 bg-[#f0f0f0] ${errors.email ? 'border-1 border-red-500' : ''}`} />
                    <input type="password" name='password' onChange={handleChange}  placeholder="Enter your password" className={`w-60 h-10 p-3 focus:outline-none focus:ring-0 focus:ring-offset-0 bg-[#f0f0f0] ${errors.password ? 'border-1 border-red-500' : ''}`}/>
                </div>
                <Button variant="contained" type="submit" disableElevation>
                    Login
                </Button>
            </div>
        </form>
        
     );
}

export default Login;