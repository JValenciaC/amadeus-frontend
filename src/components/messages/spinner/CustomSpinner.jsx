import React from "react";
import { Grid } from "react-loader-spinner";

const CustomSpinner = () => {
  const data = {
    Component: Grid,
    props: {
      color: "#F1A501",
      height: 100,
      width: 110,
    },
    name: "Grid",
  };

  return (
    <>
      <div
        data-tip={data.name}
        data-for="happyFace"
        key={data.name}
        className="loaderBox color-primary"
      >
        <data.Component {...data.props} />
      </div>
    </>
  );
};

export default CustomSpinner;
