import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import {useState} from"react";
import { toast } from 'react-toastify';
function Signup() {
    const [formData, setFormData] = useState({ firstName: "", lastName:"",email: "", password: "" });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };




    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = true;
        if (!formData.lastName) newErrors.lastName = true;
        if (!formData.email) newErrors.email = true;
        if (!formData.password) newErrors.password = true;

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            toast("Please fill all fields");
            return;
        }

        try {
            const res = await fetch("https://zerodha-clone-0.onrender.com/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                toast.success("Signup successful!");
                window.location.href=`https://zerodha-frontend-6.onrender.com/login`; //redirect to login page
            } else {
                toast.warning(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
  };
    return ( 
        <div className='h-110 w-90  border-2 border-gray-300 rounded-[1vw] mt-22 ml-130 pl-7 pr-5 pb-5 flex flex-col gap-3 shadow-xl/30'>
            <Stack direction="row" spacing={1} className='relative left-67 top-4'>
                <IconButton aria-label="delete">
                    <a href="/">
                        <CloseIcon />
                    </a>
                </IconButton>
            </Stack>
            <div className='flex gap-3'>
                <button type="button" className="btn btn-primary"> <a href="/signup" className='text-white'>Sign up</a></button>
                <button type="button" className="btn btn-secondary"> <a href="/login" className='text-white'>Login</a></button>  
                              
            </div>
            <h3>Create an account</h3>
            <div className="flex  gap-1 ml-7">
                <input type="text" name='firstName' placeholder="First Name" onChange={handleChange} className={`w-30 h-10 p-3 focus:outline-none focus:ring-0 focus:ring-offset-0 bg-[#f0f0f0] ${errors.firstName ? 'border-1 border-red-500' : ''}`}   />
                <input type="text" name='lastName' placeholder="Last Name" onChange={handleChange} className={`w-30 h-10 p-3 focus:outline-none focus:ring-0 focus:ring-offset-0 bg-[#f0f0f0] ${errors.lastName ? 'border-1 border-red-500' : ''}`} />
            </div>
            <div className='flex flex-col gap-3 ml-7'>
                <input type="email" name='email' placeholder="Enter your email" onChange={handleChange} className={`w-60 h-10 p-3  focus:outline-none focus:ring-0 focus:ring-offset-0 bg-[#f0f0f0] ${errors.email ? 'border-1 border-red-500' : ''}`} />
                <input type="password" name='password' placeholder="Enter your password" onChange={handleChange} className={`w-60 h-10 p-3 focus:outline-none focus:ring-0 focus:ring-offset-0 bg-[#f0f0f0] ${errors.password ? 'border-1 border-red-500' : ''}`}/>
            </div>
            <Button variant="contained" disableElevation onClick={handleSubmit}>
                Sign up
            </Button>
        </div>
        
     );
}

export default Signup;