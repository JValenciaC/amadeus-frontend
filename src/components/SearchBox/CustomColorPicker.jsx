const COLORS = [
  "#206c7c",
  "#aa1c99",
  "#a94498",
  "#2fc57f",
  "#4ac6c7",
  "#ca9c01",
  "#1a376f",
  "#8db794",
];
import { Formik, Form, useField } from "formik";

const CustomColorPicker = () => {
  const [field, meta, helpers] = useField("color");
  return (
    <div className="flex space-x-2">
      {COLORS.map((color) => {
        const isSelected = color === field.value;

        return (
          <div
            onClick={() => {
              helpers.setValue(color);
            }}
            style={{
              backgroundColor: color,
              cursor: "pointer",
              width: "40px",
              height: "40px",
              border: `4px solid ${isSelected ? "#000" : "transparent"}`,
            }}
          />
        );
      })}
    </div>
  );
};

export default CustomColorPicker;