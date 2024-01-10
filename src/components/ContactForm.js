import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

const ContactForm = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit=(data)=>{
        console.log("this is contact form data ",data);
        toast.success("the message is submitted");
     }

    const location=useLocation();

    
    const inProductPage=location.pathname==='/productpage'

    

  return (
   
         
         

          <form onSubmit={handleSubmit(onSubmit)} className=' h-[600px] p-5 w-full lg:w-6/12 gap-[20px] flex flex-col justify-center items-center'>
                <div className='flex flex-col sm:flex-row gap-[20px]'>
                    
                    <div className='flex flex-col gap-[5px] justify-center items-start'>
                    <div className={inProductPage ?'text-white':'text-green-700'}>First Name</div>
                        <input 
                            type="text" 
                            className='border rounded-md bg-slate-200 outline-none p-3 ' 
                            placeholder='First name' 
                            {...register('firstName', { required: true })}
                            
                        />
                        {errors.firstName && <span className='text-red-500 text-[10px]'>*This field is required</span>}
                    </div>
                       
                   
                    <div className='flex flex-col items-start gap-[5px]'>
                       <div className={inProductPage ?'text-white':'text-green-700'}>Last Name</div>
                        <input 
                            type="text" 
                            className='border rounded-md bg-slate-200 outline-none p-3' 
                            placeholder='Last name' 
                            {...register('lastName', { required: true })}
                        />
                        {errors.lastName && <span className='text-red-500 text-[10px]'>*This field is required</span>}
                    </div>
                </div>
                <div className='flex w-7/12 flex-col gap-[5px] items-start'>
                   <div className={inProductPage ?'text-white':'text-green-700'}>Email</div>
                    <input 
                        type="email" 
                        placeholder="Enter email" 
                        className='border p-4 w-full bg-slate-200 rounded-md' 
                        {...register('email', { required: true })}
                    />
                    {errors.email && <span className='text-red-500 text-[10px]'>*This field is required</span>}
                </div>
                <div className='flex flex-col w-7/12 items-start gap-[10px]'>
                   <div className={inProductPage ?'text-white':'text-green-700'}>Message</div>
                    <textarea 
                        placeholder="Message" 
                        className='border outline-none p-5 w-full rounded-md bg-slate-200'
                        {...register('message', { required: true })}
                    />
                    {errors.message && <span className='text-red-500 text-[10px]'>*This field is required</span>}
                </div>
                <div onClick={onSubmit} className='sliding-background hover:scale-110 transition-all duration-200 bg-green-700 text-white p-3 rounded-sm  hover:cursor-pointer'>Submit</div>
            </form>


  )
}

export default ContactForm;
