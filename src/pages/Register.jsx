import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import toast from "react-hot-toast";

function Register() {
  const { registerUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();

  //handle register
  const handleRegisterUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // console.log(name, email, password);

    // password validation
    if (password.length < 6) {
      toast.error("Password must be more than 6 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }

    registerUser(email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log(userCredential.user);
            setTimeout(() => {
              window.location.reload();
            }, 1000);
            toast.success(
              `"${userCredential.user.displayName}" Registered Successfully`
            );
            navigate("/");
          })
          .catch((error) => {
            console.error("Error updating profile:", error.firebase);
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.code.slice(5));
      });
  };

  //handle google sign in
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((userCredential) => {
        console.log(userCredential.user);
        toast.success("Successfully Signed In with Google");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.code);
      });
  };

  //handle github sign inb
  const handleSignInWithGitHub = () => {
    signInWithGithub()
      .then((userCredential) => {
        console.log(userCredential.user);
        toast.success("Successfully Signed In with Github");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.code);
      });
  };

  return (
    <Card
      className="flex justify-center items-center mt-4 lg:mt-10"
      color="transparent"
      shadow={false}
    >
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        onSubmit={handleRegisterUser}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            required
            name="name"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            required
            size="lg"
            name="email"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Photo Url (optional)
          </Typography>
          <Input
            size="lg"
            name="photo"
            placeholder="https://photourl.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            required
            name="password"
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        {/* sign up with google and github */}
        <Typography className="flex gap-4 justify-center">
          <Button onClick={handleSignInWithGoogle} className="cursor-pointer">
            <FaGoogle className="text-2xl" />
          </Button>
          <Button onClick={handleSignInWithGitHub}>
            <FaGithub className="text-2xl" />
          </Button>
        </Typography>
        <Button type="submit" className="mt-6" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to={"/login"} className="font-medium text-gray-900">
            Login
          </Link>
        </Typography>
      </form>
    </Card>
  );
}

export default Register;
