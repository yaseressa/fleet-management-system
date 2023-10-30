"use client";
import { usePathname } from "next/navigation";
import DataTable from "../_components/DataTable";
import { useEffect, useState } from "react";
import { PiPersonFill, PiPlusSquareDuotone } from "react-icons/pi";
import { Button } from "../_components/ui/button";
import Create from "./Create";
import Update from "./Update";

const Driver = () => {
  const path = usePathname();
  const [data, setData] = useState();
  const [columns, setCols] = useState([
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "bookingDate",
      header: "Booking Date",
    },
    {
      accessorKey: "startLocation",
      header: "Start Location",
    },
    {
      accessorKey: "endLocation",
      header: "End Location",
    },
    {
      accessorKey: "tripPurpose",
      header: "Trip Purpose",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "actions",
      header: "Actions",
    },
  ]);
  const refetch = () => {
    fetch(process.env.NEXT_PUBLIC_APP_URL + "api/booking")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_APP_URL + "api/booking", {
      next: { revalidate: 0 },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  console.log(data);
  function deleteData(id) {
    return fetch(process.env.NEXT_PUBLIC_APP_URL + `api/booking/${id}`, {
      method: "delete",
      headers: { "Content-Types": "application/json" },
    }).then();
  }
  return (
    <div className="w-full rounded-xl border-double border-secondary md:border-2 md:backdrop-blur-3xl md:shadow-md md:shadow-secondary bg-tertiary bg-opacity-50 p-7 pt-3 mt-20 md:mt-0">
      <div className="flex justify-between w-full drop-shadow-[0px_3px_10px_rgba(82,109,130,1)]">
        <h1 className="font-rock text-secondary tracking-widest space-x-10 uppercase m-3 md:block hidden">
          {path.split("/").join(" > ").substring(2)}
        </h1>
        <Create refetch={refetch} />
      </div>
      <DataTable
        data={data}
        columns={columns}
        cns={
          "w-full !border-double border-secondary border-2 p-4 rounded-lg shadow-md shadow-secondary drop-shadow-[0px_3px_10px_rgba(82,109,130,1)]"
        }
        name={"Booking"}
        refetch={refetch}
        deleteData={deleteData}
        Update={Update}
      />
    </div>
  );
};

export default Driver;
