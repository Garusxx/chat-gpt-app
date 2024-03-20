const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Lagoin
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <lable className="label p-2">
              <span className="text-red-200 label-text">Username</span>
            </lable>
            <input
              type="text"
              placeholder="Eneter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <lable className="label">
              <span className="text-red-200 label-text">Password</span>
            </lable>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            href="#"
          >
            {"Don't"} have an account?
          </a>
          <div className="btn btn-block btn-sm mt-2">Login</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
