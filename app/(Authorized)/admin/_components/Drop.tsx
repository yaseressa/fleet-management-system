import { BsPersonFill } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import Modal from "./Modal";
import { signOut } from "next-auth/react";
import { MdOutlinePersonOutline } from "react-icons/md";
//@ts-ignore
const Drop = ({ drop }) => {
  return (
    <div
      className={`absolute md:block hidden w-40 right-8 md:top-26 top-28 font-rock font-thin tracking-widest  transition-all duration-300 ${
        drop
          ? "translate-y-0 opacity-100 visible"
          : "-translate-y-4 opacity-0 invisible"
      }`}
    >
      <div className="bg-transparent backdrop-blur-md !border-double border-secondary border-4 shadow-lg mb-6 rounded-2xl flex flex-col justify-center p-1">
        <div className="text-primary flex justify-between p-2">
          <MdOutlinePersonOutline className=" text-3xl self-center" />
          <p>Admin</p>
        </div>
        <hr className="!border-double border-secondary border-2 rounded-full" />
        <ul>
          <li className=" p-1 text-primary hover:text-red-700">
            <Modal
              title={"Logging Out"}
              message={"are you sure you want to logout? "}
              buttonText={"Logout"}
              ButtonIcon={IoMdLogOut}
            >
              <button
                className="bg-red-800 bg-opacity-80 rounded-xl p-1 px-4"
                onClick={() => {
                  signOut();
                }}
              >
                Confirm
              </button>
            </Modal>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drop;
