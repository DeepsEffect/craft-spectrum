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
  const { user } = useContext(AuthContext);

  return (
    <Card className=" w-full lg:w-96 border-2 mx-auto mt-12 lg:mt-20">
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
        <Input label="Email" size="lg" />
        <Input label="Password" size="lg" />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      {user ? (
        user.email
      ) : (
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Login
          </Button>
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
      )}
    </Card>
  );
}
export default Login;
