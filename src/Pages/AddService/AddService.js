import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
      console.log(data);
      axios.post('https://calm-harbor-68998.herokuapp.com/services', data)
      .then(res => {
          if(res.data.insertedId){
              alert("Added successfully");
              reset();
          }
      })
    };
  return (
    <div>
      <h2>Add a service</h2>
      <form className="col-lg-7 m-auto col-md-7" onSubmit={handleSubmit(onSubmit)}>
        <input className="form-control mt-3" {...register("name", { required: true, maxLength: 20 })}  placeholder="Name" />
        <textarea className="form-control mt-3" {...register("description")} placeholder="Description" />
        <input className="form-control mt-3" type="number" {...register("price")} placeholder="Price" />
        <input className="form-control mt-3" {...register("img")} placeholder="Image" />
        <button className="btn btn-success mt-3">ADD</button>
      </form>
    </div>
  );
};

export default AddService;
