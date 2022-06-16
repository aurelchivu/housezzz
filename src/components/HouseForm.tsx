import React, { useState, useEffect, FunctionComponent } from "react";
import { useForm } from "react-hook-form";
// import { ErrorMessage } from "@hookform/error-message";

interface IFormData {
  address: string;
  latitude: number;
  longitude: number;
  bedrooms: string;
  image: FileList;
}

interface IProps {}

const HouseForm = ({}: IProps) => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<IFormData>({
    defaultValues: {},
  });
  useEffect(() => {
    register("address", { required: "Please enter your address" });
    register("latitude", { required: true, min: -90, max: 90 });
    register("longitude", { required: true, min: -180, max: 180 });
  }, [register]);

  const handleCreateHouse = async (data: IFormData) => {};

  const onSubmit = (data: IFormData) => {
    setSubmitting(true);
    handleCreateHouse(data);
  };

  return (
    <form className="mx-auto max-w-xl py-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-xl">Add a New House</h1>
      <div className="mt-4">
        <label htmlFor="search" className="block">
          Search for your address
        </label>
        {/* SEARCH FIELD */}
        {errors.address && <p>{errors.address.message}</p>}
      </div>
    </form>
  );
};

export default HouseForm;
