import React from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        toast.success("Successfully Login");
        navigate(from, { replace: true });
      })

      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully Google Sign In");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.error(e);
        toast.error(e.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully Github Sign In");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.error(e);
        toast.error(e.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl text-center font-bold text-emerald-300">
              Login
            </h1>
            <p className="py-3 text-center font-semibold text-teal-800">
              Please,Go to Login Now!
            </p>
          </div>
          <div className="card flex-shrink-0 md:w-96 sm:w-full shadow-2xl bg-cyan-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />

                <label className="label">
                  <span>Forgot password?</span>
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Register
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="divider">Or Login With</div>

              <div className=" place-items-center mt-0">
                <button onClick={handleGoogleSignIn} className="btn btn-error">
                  Sign In With Google
                </button>
              </div>

              <div className="place-items-center mt-1">
                <button onClick={handleGithubSignIn} className="btn btn-danger">
                  Sign In With Github
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
