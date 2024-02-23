import user from "../../assets/user.png";

function Navbar() {
  return (
    <div className="py-4 px-4 flex justify-center md:justify-start items-center text-center md:text-left shadow-lg bg-gray-800">
      <div className="flex items-center">
        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-500">
          <img src={user} alt="User" className="h-6 w-6" />
        </div>
        <h1 className="text-xl font-semibold text-gray-300 ml-2">
          The Dummy Users
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
