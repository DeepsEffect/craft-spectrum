import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

function Login() {
  const { loginUser } = useContext(AuthContext);
  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Card className=" w-full lg:w-96 border-2 mx-auto mt-12 lg:mt-20">
      <form onSubmit={handleLoginUser}>
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" name="email" size="lg" />
          <Input label="Password" name="password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <Button type="submit" variant="gradient" fullWidth>
          Login
        </Button>
      </form>
      <CardFooter className="pt-0">
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Link
            to={"/register"}
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Register
          </Link>
        </Typography>
      </CardFooter>
    </Card>
  );
}
export default Login;
