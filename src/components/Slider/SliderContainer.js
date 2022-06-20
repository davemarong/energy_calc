// IMPORT

// React

// Material UI

// Components
import { SliderMui } from "./SliderMui";
// Utils

// Data

// Functional component
export const SliderContainer = ({ sliderData, setFormulaValues }) => {
  // State

  // Functions

  // Return
  return (
    <>
      {sliderData.map((slider) => {
        return (
          <SliderMui
            key={slider.label}
            sliderData={slider}
            setFormulaValues={setFormulaValues}
          />
        );
      })}
    </>
  );
};
