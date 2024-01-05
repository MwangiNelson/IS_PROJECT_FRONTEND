import { IconButton } from "./buttons";
import { GiAstronautHelmet, GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";

function Navbar() {
  return (
    <nav className="flex flex-row bg-cream py-4 border-b-[1px] border-b-dull justify-between px-10 items-center">
      <div className="lg:w-2/12 md:w-4/12 w-1/2">
        <img
          src="/images/nutri_logo.png"
          className="w-full h-[7vh] object-contain md:object-cover "
          alt=""
        />
      </div>
      <div className="flex-row gap-10 lg:flex hidden">
        <h4 className="text-md text-dull font-medium">Community</h4>
        <h4 className="text-md font-medium">About</h4>
        <h4 className="text-md font-medium">Features</h4>
      </div>

      <div className="flex flex-row justify-between gap-5 items-center">
        <div className="lg:hidden flex ">
          <IconButton
            Icon={GiHamburgerMenu}
            text=""
            backgroundColor="purple-800"
            textStyle="text-white"
          />
        </div>
        <div className="md:flex flex-row gap-3 items-center justify-between hidden">
          <IconButton
            Icon={GiAstronautHelmet}
            backgroundColor="gray-800"
            text="Start Chat"
            textStyle="text-white"
          />
          <IconButton
            Icon={MdOutlineSupervisedUserCircle}
            backgroundColor="blue-600"
            text="Sign Up"
            textStyle="text-white"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
