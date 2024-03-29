"use client";
import React, { useState } from "react";
import {
  BiSolidBookContent,
  BiSolidCarMechanic,
  BiSolidDashboard,
} from "react-icons/bi";
import { PiCarFill, PiPersonDuotone, PiPersonFill } from "react-icons/pi";
import {
  FaMoneyBills,
  FaPersonBiking,
  FaUserShield,
  FaUserTie,
} from "react-icons/fa6";
import { RiGpsFill } from "react-icons/ri";
import Link from "next/link";
import { ImUserTie } from "react-icons/im";
import { AiFillCarryOut } from "react-icons/ai";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { MoonStar, SunDim } from "lucide-react";
// @ts-ignore
const SideBar = ({ mSlider }) => {
  const [hover, setHover] = useState({});
  const { setTheme, theme } = useTheme();

  return (
    <div
      className={`md:h-screen h-fit flex flex-col md:justify-start md:gap-6 justify-evenly md:items-center items-end font-poppins tracking-widest uppercase md:ml-3 md:m-0 md:my-5 mt-5 z-50 md:w-16 w-fit`}
    >
      <div className="md:block hidden border-[2px] border-double border-secondary px-4 py-5 pt-6 rounded-2xl bg-primary">
        {theme == "light" ? (
          <MoonStar
            size={30}
            onClick={() => setTheme("dark")}
            className="text-tertiary"
          />
        ) : (
          <SunDim
            size={30}
            onClick={() => setTheme("light")}
            className="text-tertiary"
          />
        )}
      </div>
      <ul
        className={`md:flex hidden flex-col h-fit w-16 items-start border-[2px] border-double border-secondary rounded-2xl py-3 bg-transparent `}
      >
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, dash: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, dash: false };
            })
          }
        >
          <Link
            href={"/admin/dash"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.dash ? "text-primary" : "text-primary"
            }`}
          >
            <BiSolidDashboard
              className={`text-2xl duration-500 ${hover.dash && "scale-125"}`}
            />

            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.dash ? " translate-x-14 w-fit" : "translate-x-10 w-0"
              }`}
            >
              Dashboard
            </p>
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, driver: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, driver: false };
            })
          }
        >
          <Link
            href={"/admin/driver"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.driver ? "text-primary" : "text-primary"
            }`}
          >
            <PiPersonFill
              className={`text-2xl duration-500 ${hover.driver && "scale-125"}`}
            />

            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.driver ? " translate-x-14 w-fit" : "translate-x-10 w-0"
              }`}
            >
              Drivers
            </p>
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, veh: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, veh: false };
            })
          }
        >
          <Link
            href={"/admin/vehicle"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.veh ? "text-primary" : "text-primary"
            }`}
          >
            <PiCarFill
              className={`text-2xl duration-500 ${hover.veh && "scale-125"}`}
            />

            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.veh ? " translate-x-14 w-fit" : "translate-x-10 w-0"
              }`}
            >
              Vehicles
            </p>
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, cs: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, cs: false };
            })
          }
        >
          <Link
            href={"/admin/customer"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.cs ? "text-primary" : "text-primary"
            }`}
          >
            <ImUserTie
              className={`text-2xl duration-500 ${hover.cs && "scale-125"}`}
            />

            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.cs ? " translate-x-14 w-fit" : "translate-x-10 w-0"
              }`}
            >
              Customers
            </p>
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, trip: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, trip: false };
            })
          }
        >
          <Link
            href={"/admin/trip"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.trip ? "text-primary" : "text-primary"
            }`}
          >
            <AiFillCarryOut
              className={`text-2xl duration-500 ${hover.trip && "scale-125"}`}
            />

            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.trip ? " translate-x-14 w-fit" : "translate-x-10 w-0"
              }`}
            >
              Trips
            </p>
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, book: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, book: false };
            })
          }
        >
          <Link
            href={"/admin/booking"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.book ? "text-primary" : "text-primary"
            }`}
          >
            <BiSolidBookContent
              className={`text-2xl duration-500 ${hover.book && "scale-125"}`}
            />

            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.book ? " translate-x-14 w-fit" : "translate-x-10 w-0"
              }`}
            >
              Booking
            </p>
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, lt: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, lt: false };
            })
          }
        >
          <Link
            href={"/admin/lt"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.lt ? "text-primary" : "text-primary"
            }`}
          >
            <RiGpsFill
              className={`text-2xl duration-500 ${hover.lt && "scale-125"}`}
            />

            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.lt ? " translate-x-14 w-fit" : "translate-x-10 w-0"
              }`}
            >
              Live Tracking
            </p>
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, fe: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, fe: false };
            })
          }
        >
          <Link
            href={"/admin/fuel"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.fe ? "text-primary" : "text-primary"
            }`}
          >
            <BsFillFuelPumpFill
              className={`text-2xl duration-500 ${hover.fe && "scale-125"}`}
            />

            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.fe ? " translate-x-14 w-fit" : "translate-x-10 w-0"
              }`}
            >
              Fuel Records
            </p>
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, mn: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, mn: false };
            })
          }
        >
          <Link
            href={"/admin/maintenance"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.mn ? "text-primary" : "text-primary"
            }`}
          >
            <BiSolidCarMechanic
              className={`text-2xl duration-500 ${hover.mn && "scale-125"}`}
            />

            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.mn ? " translate-x-14 w-fit" : "translate-x-10 w-0"
              }`}
            >
              Maintenances
            </p>
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, ex: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, ex: false };
            })
          }
        >
          <Link
            href={"/admin/expense"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.ex ? "text-primary" : "text-primary"
            }`}
          >
            <FaMoneyBills
              className={`text-2xl duration-500 ${hover.ex && "scale-125"}`}
            />

            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.ex ? " translate-x-14 w-fit" : "translate-x-10 w-0"
              }`}
            >
              Expenses
            </p>
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, us: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, us: false };
            })
          }
        >
          <Link
            href={"/admin/user"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.us ? "text-primary" : "text-primary"
            }`}
          >
            <FaUserShield
              className={`text-2xl duration-500 ${hover.us && "scale-125"}`}
            />

            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.us ? " translate-x-14 w-fit" : "translate-x-10 w-0"
              }`}
            >
              Users
            </p>
          </Link>
        </li>
      </ul>
      <ul
        className={`z-30 fixed right-0 top-20 flex-col items-end h-fit w-16 border-[2px] border-double border-secondary rounded-2xl py-3 bg-transparent ${
          mSlider ? "md:hidden flex" : "md:hidden hidden"
        }`}
      >
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, dash: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, dash: false };
            })
          }
        >
          <Link
            href={"/admin/dash"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.dash ? "text-primary" : "text-primary"
            }`}
          >
            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.dash ? " -translate-x-28 w-fit" : "-translate-x-10 w-0"
              }`}
            >
              Dashboard
            </p>
            <BiSolidDashboard
              className={`text-2xl duration-500 ${hover.dash && "scale-125"}`}
            />
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, driver: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, driver: false };
            })
          }
        >
          <Link
            href={"/admin/driver"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.driver ? "text-primary" : "text-primary"
            }`}
          >
            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.driver ? " -translate-x-28 w-fit" : "-translate-x-10 w-0"
              }`}
            >
              Drivers
            </p>
            <PiPersonFill
              className={`text-2xl duration-500 ${hover.driver && "scale-125"}`}
            />
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, veh: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, veh: false };
            })
          }
        >
          <Link
            href={"/admin/vehicle"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.veh ? "text-primary" : "text-primary"
            }`}
          >
            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.veh ? " -translate-x-28 w-fit" : "-translate-x-10 w-0"
              }`}
            >
              Vehicles
            </p>
            <PiCarFill
              className={`text-2xl duration-500 ${hover.veh && "scale-125"}`}
            />
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, cs: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, cs: false };
            })
          }
        >
          <Link
            href={"/admin/customer"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.cs ? "text-primary" : "text-primary"
            }`}
          >
            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.cs ? " -translate-x-28 w-fit" : "-translate-x-10 w-0"
              }`}
            >
              Customers
            </p>
            <ImUserTie
              className={`text-2xl duration-500 ${hover.cs && "scale-125"}`}
            />
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, trip: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, trip: false };
            })
          }
        >
          <Link
            href={"/admin/trip"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.trip ? "text-primary" : "text-primary"
            }`}
          >
            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.trip ? " -translate-x-28 w-fit" : "-translate-x-10 w-0"
              }`}
            >
              Trips
            </p>
            <AiFillCarryOut
              className={`text-2xl duration-500 ${hover.trip && "scale-125"}`}
            />
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, book: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, book: false };
            })
          }
        >
          <Link
            href={"/admin/booking"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.book ? "text-primary" : "text-primary"
            }`}
          >
            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.book ? " -translate-x-28 w-fit" : "-translate-x-10 w-0"
              }`}
            >
              Booking
            </p>
            <BiSolidBookContent
              className={`text-2xl duration-500 ${hover.book && "scale-125"}`}
            />
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, lt: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, lt: false };
            })
          }
        >
          <Link
            href={"/admin/lt"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.lt ? "text-primary" : "text-primary"
            }`}
          >
            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.lt ? " -translate-x-28 w-fit" : "-translate-x-10 w-0"
              }`}
            >
              Live Tracking
            </p>
            <RiGpsFill
              className={`text-2xl duration-500 ${hover.lt && "scale-125"}`}
            />
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, fe: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, fe: false };
            })
          }
        >
          <Link
            href={"/admin/fuel"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.fe ? "text-primary" : "text-primary"
            }`}
          >
            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.fe ? " -translate-x-28 w-fit" : "-translate-x-10 w-0"
              }`}
            >
              Fuel Records
            </p>
            <BsFillFuelPumpFill
              className={`text-2xl duration-500 ${hover.fe && "scale-125"}`}
            />
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, mn: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, mn: false };
            })
          }
        >
          <Link
            href={"/admin/maintenance"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.mn ? "text-primary" : "text-primary"
            }`}
          >
            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.mn ? " -translate-x-28 w-fit" : "-translate-x-10 w-0"
              }`}
            >
              Maintenances
            </p>
            <BiSolidCarMechanic
              className={`text-2xl duration-500 ${hover.mn && "scale-125"}`}
            />
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, ex: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, ex: false };
            })
          }
        >
          <Link
            href={"/admin/expense"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.ex ? "text-primary" : "text-primary"
            }`}
          >
            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.ex ? " -translate-x-28 w-fit" : "-translate-x-10 w-0"
              }`}
            >
              Expenses
            </p>
            <FaMoneyBills
              className={`text-2xl duration-500 ${hover.ex && "scale-125"}`}
            />
          </Link>
        </li>
        <li
          className="w-full py-1"
          onMouseOver={() =>
            setHover((prev) => {
              return { ...prev, us: true };
            })
          }
          onMouseOut={() =>
            setHover((prev) => {
              return { ...prev, us: false };
            })
          }
        >
          <Link
            href={"/admin/user"}
            className={` flex items-center justify-start w-full p-3 px-4  ${
              hover.us ? "text-primary" : "text-primary"
            }`}
          >
            <p
              className={`font-thin tracking-widest whitespace-nowrap font-rock text-sm duration-500 fixed z-50 overflow-hidden ${
                hover.us ? " -translate-x-28 w-fit" : "-translate-x-10 w-0"
              }`}
            >
              Users
            </p>
            <FaUserShield
              className={`text-2xl duration-500 ${hover.us && "scale-125"}`}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
