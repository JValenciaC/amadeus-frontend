import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Field, useField } from "formik";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import moment from "moment";

import {
  HeaderSearchText,
  HeaderIcon,
  HeaderSearchItem,
  Options,
} from "./SearchBox.style";

const CustomDatePicker = () => {
  const [fieldDate, metaDate, helpersDate] = useField({ name: "dateRange" });
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <>
      <Options>
        <Field
          as={DateRange}
          editableDateInputs={true}
          name="dateRange"
          type="text"
          onChange={(item) => {
            setDates([item.selection]);

            helpersDate.setValue(item.selection);
          }}
          moveRangeOnFirstSelection={false}
          ranges={dates}
          minDate={new Date()}
        />
      </Options>
    </>
  );
};

export default CustomDatePicker;
