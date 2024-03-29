"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
} from "../_components/ui/dialog";
import * as Yup from "yup";
import { Button } from "../_components/ui/button";
import {
  PiCarFill,
  PiPersonFill,
  PiPlusSquareDuotone,
  PiRecycleDuotone,
} from "react-icons/pi";
import { useState } from "react";
import { toast } from "react-toastify";
import { format } from "date-fns";

const Update = ({ id, refetch }) => {
  const [value, setValue] = useState();
  const get = () => {
    if (id != undefined) {
      fetch(process.env.NEXT_PUBLIC_APP_URL + `driver/${id}`, {
        next: { revalidate: 0 },
      })
        .then((res) => res.json())
        .then((res) => setValue(res));
    }
  };

  const initialValues = value && {
    ...value,
    licenseExpiryDate: value
      ? format(new Date(value.licenseExpiryDate), "yyyy-MM-dd'T'HH:mm")
      : "",
  };
  const onSubmit = (value, id) => {
    fetch(process.env.NEXT_PUBLIC_APP_URL + `driver/${id}`, {
      method: "put",
      body: JSON.stringify(value),
      next: { revalidate: 0 },
      headers: { "Content-Types": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => toast.success(res.message));
  };
  const oC = () => {
    refetch();
    get();
  };
  return (
    <>
      <Dialog onOpenChange={oC}>
        <DialogTrigger>
          <PiRecycleDuotone className="text-green-800  text-2xl cursor-pointer" />
        </DialogTrigger>
        {value && (
          <DialogContent className="md:min-w-[850px] min-w-full drop-shadow-2xl">
            <DialogHeader>
              <DialogTitle className="font-rock text-primary">
                Update Driver
              </DialogTitle>
              <DialogDescription className="font-rock pt-4 flex justify-evenly items-start  md:flex-nowrap flex-wrap w-fit">
                <PiPersonFill
                  className={`text-6xl text-primary m-10 drop-shadow-[5px_20px_30px_rgba(82,109,130,1)]`}
                />

                <Formik
                  initialValues={initialValues}
                  validationSchema={Yup.object().shape({
                    firstName: Yup.string().required("First Name is required"),
                    lastName: Yup.string().required("Last Name is required"),
                    contactPhone: Yup.string().required("Phone is required"),
                    contactEmail: Yup.string()
                      .email("Invalid email address")
                      .required("Email is required"),
                    licenseNumber: Yup.string().required(
                      "License Number is required"
                    ),
                    licenseExpiryDate: Yup.date().required(
                      "License Expiry Date is required"
                    ),
                    driverStatus: Yup.string().required(
                      "Driver Status is required"
                    ),
                  })}
                  onSubmit={(values) => {
                    values = {
                      ...values,
                    };
                    onSubmit(values, id);
                  }}
                >
                  <Form className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-start items-start flex-wrap h-[320px]">
                      <div className="md:m-3 h-20 w-48">
                        {" "}
                        <label className="text-primary">First Name</label>
                        <Field
                          className="flex h-10 w-full rounded-md bg-transparent border-double border-secondary border-2 backdrop-blur-3xl px-3 py-2 text-sm ring-offset-background text-primary"
                          type="text"
                          name="firstName"
                        />
                        <ErrorMessage
                          className="text-red-900 text-[10px]"
                          name="firstName"
                          component="div"
                        />
                      </div>
                      <div className="md:m-3 h-20 w-48">
                        {" "}
                        <label className="text-primary">Last Name</label>
                        <Field
                          className="flex h-10 w-full rounded-md bg-transparent border-double border-secondary border-2 backdrop-blur-3xl px-3 py-2 text-sm ring-offset-background text-primary"
                          type="text"
                          name="lastName"
                        />
                        <ErrorMessage
                          className="text-red-900 text-[10px]"
                          name="lastName"
                          component="div"
                        />
                      </div>
                      <div className="md:m-3 h-20 w-48">
                        {" "}
                        <label className="text-primary">Phone</label>
                        <Field
                          className="flex h-10 w-full rounded-md bg-transparent border-double border-secondary border-2 backdrop-blur-3xl px-3 py-2 text-sm ring-offset-background text-primary"
                          type="text"
                          name="contactPhone"
                        />
                        <ErrorMessage
                          className="text-red-900 text-[10px]"
                          name="contactPhone"
                          component="div"
                        />
                      </div>
                      <div className="md:m-3 h-20 w-48">
                        {" "}
                        <label className="text-primary">Email</label>
                        <Field
                          className="flex h-10 w-full rounded-md bg-transparent border-double border-secondary border-2 backdrop-blur-3xl px-3 py-2 text-sm ring-offset-background text-primary"
                          type="email"
                          name="contactEmail"
                        />
                        <ErrorMessage
                          className="text-red-900 text-[10px]"
                          name="contactEmail"
                          component="div"
                        />
                      </div>
                      <div className="md:m-3 h-20 w-48">
                        {" "}
                        <label className="text-primary">License Number</label>
                        <Field
                          className="flex h-10 w-full rounded-md bg-transparent border-double border-secondary border-2 backdrop-blur-3xl px-3 py-2 text-sm ring-offset-background text-primary"
                          type="text"
                          name="licenseNumber"
                        />
                        <ErrorMessage
                          className="text-red-900 text-[10px]"
                          name="licenseNumber"
                          component="div"
                        />
                      </div>
                      <div className="md:m-3 h-20 w-48">
                        {" "}
                        <label className="text-primary">
                          License Expiry Date
                        </label>
                        <Field
                          className="flex h-10 w-full rounded-md bg-transparent border-double border-secondary border-2 backdrop-blur-3xl px-3 py-2 text-sm ring-offset-background text-primary"
                          type="datetime-local"
                          name="licenseExpiryDate"
                        />
                        <ErrorMessage
                          className="text-red-900 text-[10px]"
                          name="licenseExpiryDate"
                          component="div"
                        />
                      </div>
                      <div className="md:m-3 h-20 w-48">
                        {" "}
                        <label className="text-primary">Driver Status</label>
                        <Field
                          className="flex h-10 w-full rounded-md bg-transparent border-double border-secondary border-2 backdrop-blur-3xl px-3 py-2 text-sm ring-offset-background text-primary"
                          name="driverStatus"
                          component="select"
                        >
                          <option value="">Select status</option>
                          <option value="active">Active</option>
                          <option value="on-leave">On Leave</option>
                        </Field>
                        <ErrorMessage
                          className="text-red-900 text-[10px]"
                          name="driverStatus"
                          component="div"
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="border-double bg-transparent border-secondary border-2 backdrop-blur-3xl flex justify-between gap-2 px-6"
                    >
                      <PiPersonFill className={`text-xl text-primary`} />
                      <PiRecycleDuotone className="text-green-800  text-lg cursor-pointer" />
                    </Button>{" "}
                  </Form>
                </Formik>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default Update;
