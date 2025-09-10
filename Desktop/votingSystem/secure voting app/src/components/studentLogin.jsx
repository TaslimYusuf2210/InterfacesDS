import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email"),
  matricNumber: yup.string().required("Matric number is required"),
});

function StudentLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form data:", data);
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col text-left">
          <label className="font-semibold">Email</label>
          <input className="border p-2" type="text" {...register("email")} />
          {errors.email && (
            <p className="text-sm text-red-500 font-light">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col text-left">
          <label className="font-semibold">Matric Number</label>
          <input
            className="border p-2"
            type="text"
            {...register("matricNumber")}
          />
          {errors.matricNumber && (
            <p className="text-sm text-red-500 font-light">
              {errors.matricNumber.message}
            </p>
          )}
        </div>
        <div>
          <button className="w-full bg-purple-400 p-2 text-white rounded">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentLogin;
