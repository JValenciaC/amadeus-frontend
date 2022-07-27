import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { Field, useField } from "formik";
import {
  SearchBoxButton,
  HeaderSearchText,
  SearchBoxIconText,
  HeaderIcon,
  OptionItem,
  OptionCounter,
  Options,
} from "./SearchBox.style";

import CustomTravelClass from "./CustomTravelClass";

const CustomCounterOptions = () => {
  const [fieldAdult, metaAdult, helpersAdult] = useField("adult");
  const [filedChildren, metaChildren, helpersChildren] = useField("children");

  const [options, setOptions] = useState({
    adult: 0,
    children: 0,
  });

  const handleOption = async (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <>
      <Options>
        <OptionItem>
          <SearchBoxIconText>Adult</SearchBoxIconText>
          <OptionCounter>
            <SearchBoxButton
              type="button"
              // component={fieldAdult}
              disabled={options.adult <= 1}
              onClick={() => {
                handleOption("adult", "d");
                helpersAdult.setValue(options.adult);
              }}
            >
              -
            </SearchBoxButton>
            <span>{options.adult <= 0 ? 0 : options.adult - 1}</span>
            <SearchBoxButton
              type="button"
              onClick={() => {
                handleOption("adult", "i");
                helpersAdult.setValue(options.adult);
              }}
            >
              +
            </SearchBoxButton>
          </OptionCounter>
        </OptionItem>
        <OptionItem>
          <SearchBoxIconText>Children</SearchBoxIconText>
          <OptionCounter>
            <SearchBoxButton
              type="button"
              disabled={options.children <= 0}
              onClick={() => {
                handleOption("children", "d");
                helpersChildren.setValue(options.children);
              }}
            >
              -
            </SearchBoxButton>
            <span>{options.children <= 0 ? 0 : options.children - 1}</span>
            <SearchBoxButton
              type="button"
              onClick={() => {
                handleOption("children", "i");
                helpersChildren.setValue(options.children);
              }}
            >
              +
            </SearchBoxButton>
          </OptionCounter>
        </OptionItem>
        <CustomTravelClass />
      </Options>
    </>
  );
};

export default CustomCounterOptions;
