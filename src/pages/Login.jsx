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
import {
  Link,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

function Login() {
  const { loginUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((userCredential) => {
        // console.log(userCredential.user);
        toast.success(`"${userCredential.user.displayName}" Login Successful`);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.code);
      });
  };
  //handle google sign in
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((userCredential) => {
        console.log(userCredential.user);
        toast.success("Successfully Signed In with Google");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.code);
      });
  };

  //handle github sign in
  const handleSignInWithGitHub = () => {
    signInWithGithub()
      .then((userCredential) => {
        console.log(userCredential.user);
        toast.success("Successfully Signed In with Github");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.code);
      });
  };

  return (
    <Card className=" w-full lg:w-96 border-2 mx-auto mt-12 bg-background lg:mt-20">
      <ScrollRestoration></ScrollRestoration>
      <form onSubmit={handleLoginUser}>
        <CardHeader className="mb-4 grid h-28 place-items-center bg-primary dark:bg-primary">
          <Typography variant="h3" className=" text-white dark:text-text">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 dark:text-white ">
          <Input
            label="Email"
            name="email"
            size="lg"
            className="text-text"
            color="deep-purple"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            size="lg"
            color="deep-purple"
            className="text-text"
          />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <Button type="submit" className="bg-primary" fullWidth>
          Login
        </Button>

        {/* sign up with google and github */}
        <Typography className="flex gap-4 justify-center mt-6">
          <Button
            onClick={handleSignInWithGoogle}
            className="bg-accent dark:bg-accent"
          >
            <FaGoogle className="text-2xl" />
          </Button>
          <Button
            onClick={handleSignInWithGitHub}
            className="bg-accent dark:bg-accent"
          >
            <FaGithub className="text-2xl " />
          </Button>
        </Typography>
      </form>
      <CardFooter className="pt-0">
        <Typography
          variant="small"
          className="mt-6 flex justify-center text-text dark:text-text"
        >
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
