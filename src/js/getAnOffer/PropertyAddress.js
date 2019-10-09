import React, { Component } from "react";
import InputRow from "../uiComponents/InputRow";
import FormHeader from "./FormHaeder";

class PropertyAddress extends Component {
  render() {
    return (
      <div>
        <fieldset>
          <FormHeader headerTitle="Property Address" />
          <InputRow
            id="houseNumber"
            type="text"
            label="House/Flat Number Or Name"
            placeHolder="Flat 3 / 8 / Green House"
          />

          <InputRow
            id="street"
            type="text"
            label="Street"
            placeHolder="Lakeland Ave"
          />

          <InputRow
            id="townCity"
            type="text"
            label="Town/City"
            placeHolder="Luton"
          />

          <InputRow
            id="county"
            type="text"
            label="County"
            placeHolder="Bedfordshire"
          />
          <InputRow
            id="postCode"
            type="text"
            label="Post Code"
            placeHolder="LU2 7DE"
          />
        </fieldset>
      </div>
    );
  }
}

export default PropertyAddress;
