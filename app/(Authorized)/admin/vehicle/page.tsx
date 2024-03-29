"use client";
import { usePathname } from "next/navigation";
import DataTable from "../_components/DataTable";
import { useEffect, useState } from "react";
import Create from "./Create";
import Update from "./Update";

const Vehicle = () => {
  const path = usePathname();
  const [vehicleData, setVehicleData] = useState();
  const [vehicleColumns, setVehicleCols] = useState([
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "vehicleType",
      header: "Vehicle Type",
    },
    {
      accessorKey: "vehicleMake",
      header: "Made By",
    },
    {
      accessorKey: "vehicleModel",
      header: "Model",
    },
    {
      accessorKey: "vehicleLicensePlate",
      header: "License Plate",
    },
    {
      accessorKey: "currentLocation",
      header: "Location",
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
    fetch(process.env.NEXT_PUBLIC_APP_URL + "vehicle", {
      next: { revalidate: 0 },
    })
      .then((res) => res.json())
      .then((res) => {
        setVehicleData(res);
      });
  };
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_APP_URL + "vehicle", {
      next: { revalidate: 0 },
    })
      .then((res) => res.json())
      .then((res) => {
        setVehicleData(res);
      });
  }, []);
  function deleteData(id) {
    setVehicleData(vehicleData.filter((dt) => dt.id != id));

    return fetch(process.env.NEXT_PUBLIC_APP_URL + `vehicle/${id}`, {
      method: "delete",
      headers: { "Content-Types": "application/json" },
    }).then();
  }
  return (
    <div className="w-full rounded-xl border-double border-secondary  md:backdrop-blur-3xl md:shadow-md md:shadow-secondary bg-tertiary/20 bg-opacity-50 p-7 pt-3 mt-20 md:mt-0">
      <div className="flex justify-between w-full ">
        <h1 className="font-rock text-primary tracking-widest space-x-10 uppercase m-3 md:block hidden">
          {path.split("/").join(" > ").substring(2)}
        </h1>
        <Create refetch={refetch} />
      </div>

      <DataTable
        data={vehicleData}
        columns={vehicleColumns}
        deleteData={deleteData}
        cns={
          "shadow-lg !border-double border-secondary border-2 p-4 rounded-lg shadow-secondary "
        }
        name={"Vehicles"}
        refetch={refetch}
        Update={Update}
      />
    </div>
  );
};

export default Vehicle;
