import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className='m-2' >Name</label>
          <input className='m-2 rounded-md p-2'
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
          />
          {errors.name && <p>{errors.name.message}</p>}
            <br></br>
            <label className='m-2' >Email</label>
          <input className='m-2 rounded-md p-2'
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            placeholder="Email"
          />
          {errors.email && <p>{errors.email.message}</p>}
          <br></br>
          <button className='m-2' type="submit">Submit</button>
        </form>
      
    </>
  );
}
