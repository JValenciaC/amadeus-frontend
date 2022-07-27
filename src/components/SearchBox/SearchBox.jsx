import { Container } from "@mui/system";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFlightResultAction,
  addSearchParams,
} from "../../redux/actions/FlightResult";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import CustomCounterOptions from "./CustomCounterOptions";
import CustomDatePicker from "./CustomDatePicker";
import {
  HeaderSearchText,
  SearchBoxContainer,
  SearchBoxIconImage,
  HeaderSearchItem,
  HeaderSearch,
  HeaderIcon,
  ResultContainer,
} from "./SearchBox.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import FlightResult from "../ResultsItems/FlightResult";

import {
  flightResultError,
  isLoadingFlightResult,
  flightResultSelector,
} from "../../redux/selector";

const validate = (values) => {
  const errors = {};
  if (!values.originLocationCode) {
    errors.originLocationCode = "Required";
  }
  if (!values.destinationLocationCode) {
    errors.destinationLocationCode = "Required";
  }
  return errors;
};

const SearchBox = () => {
  const isLoading = useSelector(isLoadingFlightResult);
  const error = useSelector(flightResultError);
  const flightResult = useSelector(flightResultSelector);


  const [openOptions, setOpenOptions] = React.useState(false);
  const [openDate, setOpenDate] = React.useState(false);

  // Dispatch to redux
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    // formik.handleSubmit();

    const startDateFormatted = moment(values.startDate).format("YYYY-MM-DD");
    const endDateFormatted = moment(values.endDate).format("YYYY-MM-DD");

    const params = {
      originLocationCode: values.originLocationCode,
      destinationLocationCode: values.destinationLocationCode,
      startDate: startDateFormatted,
      endDate: endDateFormatted,
      adults: values.adult,
      children: values.children,
      travelClass: values.travelClass,
    };

    dispatch(addSearchParams(params));
    dispatch(fetchFlightResultAction(params));
  };

  return (
    <>
      <SearchBoxContainer>
        <Container className="order-2 order-md-2">
          <SearchBoxIconImage src="src/assets/img/hero/hero-img.png"></SearchBoxIconImage>
        </Container>
        <Container className="text-md-start text-center">
          <Formik
            initialValues={{
              originLocationCode: "",
              destinationLocationCode: "",
              adult: 0,
              children: 0,
              travelClass: "Economy",
              dateRange: {
                startDate: moment(new Date()).format("YYYY-MM-DD"),
                endDate: moment(new Date()).format("YYYY-MM-DD"),
                key: "selection",
              },
            }}
            onSubmit={handleSubmit}
            validate={validate}
          >
            {(formikSearch) => (
              <Form onSubmit={formikSearch.handleSubmit}>
                <Container className="form-group">
                  <label htmlFor="originLocationCode">
                    Origin Location Code:
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="originLocationCode"
                    name="originLocationCode"
                    {...formikSearch.getFieldProps("originLocationCode")}
                    placeholder="SYK"
                  />
                  <ErrorMessage name="originLocationCode" />
                </Container>
                <Container className="form-group mt-2">
                  <label htmlFor="destinationLocationCode">
                    Destination Location Code
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="destinationLocationCode"
                    {...formikSearch.getFieldProps("destinationLocationCode")}
                    placeholder="BKK"
                  />
                  <ErrorMessage name="destinationLocationCode" />
                </Container>
                <Container>
                  <HeaderSearch>
                    <HeaderSearchItem>
                      <HeaderIcon as={FontAwesomeIcon} icon={faCalendarDays} />
                      <HeaderSearchText
                        aria-hidden="true"
                        name="openDate"
                        as="span"
                        onClick={() => setOpenDate(!openDate)}
                      >
                        {`${moment(
                          formikSearch.values.dateRange.startDate
                        ).format("YYYY-MM-DD")} to ${moment(
                          formikSearch.values.dateRange.endDate
                        ).format("YYYY-MM-DD")}`}
                      </HeaderSearchText>
                      {openDate && <CustomDatePicker />}
                      <button
                        className="btn-close "
                        type="button"
                        onClick={() => setOpenDate(!openDate)}
                      ></button>
                    </HeaderSearchItem>
                  </HeaderSearch>
                </Container>
                <Container>
                  <HeaderSearch>
                    <HeaderSearchItem>
                      <HeaderIcon as={FontAwesomeIcon} icon={faPerson} />
                      <HeaderSearchText
                        onClick={() => {
                          setOpenOptions(!openOptions);
                        }}
                      >
                        {`${
                          formikSearch.values.adult <= 0
                            ? 0
                            : formikSearch.values.adult
                        } adult · ${
                          formikSearch.values.children <= 0
                            ? 0
                            : formikSearch.values.children
                        } children · ${formikSearch.values.travelClass}`}
                      </HeaderSearchText>
                      {openOptions && <CustomCounterOptions />}
                      <button
                        className="btn-close "
                        type="button"
                        onClick={() => setOpenOptions(!openOptions)}
                      ></button>
                    </HeaderSearchItem>
                  </HeaderSearch>
                </Container>

                <Container>
                  <button
                    type="submit"
                    className={
                      formikSearch.errors.destinationLocationCode ||
                      formikSearch.errors.originLocationCode
                        ? `btn disabled  mt-4`
                        : `btn btn-primary mt-4`
                    }
                  >
                    Submit
                  </button>
                </Container>
              </Form>
            )}
          </Formik>
        </Container>
      </SearchBoxContainer>

        {!error && <h6 className=" max-width max-height d-flex justify-content-center rounded-3 text-red alert-danger">Ha ocurrido un error</h6>}

    </>
  );
};

export default SearchBox;
