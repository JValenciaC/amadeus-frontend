import React from "react";
import { useField } from "formik";


const CustomTravelClass = () => {
  const [fieldTravel, metaTravel, helpersTravel] = useField("travelClass");

  return (
    <>
      <label htmlFor="travelCalss">Travel Class</label>
      <select
        id="travelClass"
        name="travelClass"
        className="form-control"
        onChange={(e) => {
          helpersTravel.setValue(e.target.value);
        //   setOptions({ travelClass: e.target.value });
        }}
      >
        <option value="Economy" label="Economy">
          Economy
        </option>
        <option value="Business" label="Business">
          Business
        </option>
        <option value="First" label="First">
          First
        </option>
      </select>
    </>
  );
};

export default CustomTravelClass;
