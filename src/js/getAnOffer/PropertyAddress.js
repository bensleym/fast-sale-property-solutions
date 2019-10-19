import React, { Component } from "react";
import InputRow from "../uiComponents/InputRow";
import FormHeader from "./FormHeader";
import addressFormRequest from "./FindAddressAPI";

class PropertyAddress extends Component {
  state = {
    fullAddressFormCheck: false
  };
  constructor() {
    super();
  }

  async handleAddressFind() {
    const postcode = document.getElementById("postcodeSearch").value || "";
    const house = document.getElementById("houseSearch").value || "";

    await addressFormRequest(postcode, house)
      .then(({ data }) => {
        this.setState({
          fullAddressFormCheck: true,
          houseNumber: data.addresses[0].building_number
            ? data.addresses[0].building_number
            : data.addresses[0].sub_building_name,
          streetAddress: data.addresses[0].thoroughfare,
          townCity: data.addresses[0].town_or_city,
          county: data.addresses[0].county,
          postcode: data.postcode
        });
      })
      .catch(data => {
        console.log("catch", data);
      });
  }

  fullAddressForm() {
    return (
      <div>
        <fieldset>
          <InputRow
            id="houseNumber"
            type="text"
            label="House/Flat Number Or Name"
            placeHolder="Flat 3 / 8 / Green House"
            value={this.state.houseNumber ? this.state.houseNumber : ""}
            required={true}
          />

          <InputRow
            id="street"
            type="text"
            label="Street"
            placeHolder="Lakeland Ave"
            value={this.state.streetAddress ? this.state.streetAddress : ""}
            required={true}
          />

          <InputRow
            id="townCity"
            type="text"
            label="Town/City"
            placeHolder="Luton"
            value={this.state.townCity ? this.state.townCity : ""}
            required={true}
          />

          <InputRow
            id="county"
            type="text"
            label="County"
            placeHolder="Bedfordshire"
            value={this.state.county ? this.state.county : ""}
            required={true}
          />
          <InputRow
            id="postCode"
            type="text"
            label="Post Code"
            placeHolder="LU2 7DE"
            value={this.state.postcode ? this.state.postcode : ""}
            required={true}
          />
        </fieldset>
      </div>
    );
  }

  handleManualAddress() {
    this.setState({ fullAddressFormCheck: true });
  }

  addressFinderForm() {
    return (
      <div>
        <InputRow
          id="houseSearch"
          type="text"
          label="House/Flat Number Or Name"
          placeHolder="Flat 3 / 8 / Green House"
          required={true}
        />
        <InputRow
          id="postcodeSearch"
          type="text"
          label="Postcode"
          placeHolder="AL3 3DE"
          required={true}
        />

        <button
          className="submit-btn__link"
          onClick={e => {
            e.preventDefault();
            this.handleManualAddress();
          }}
        >
          Enter address manually
        </button>
      </div>
    );
  }

  render() {
    if (!this.state.fullAddressFormCheck) {
      return (
        <div>
          <FormHeader headerTitle="Property Address" />
          <div id="addressDetails">
            {this.addressFinderForm()}
            <button
              id="findAddressBtn"
              className="submit-btn__btn"
              onClick={e => {
                e.preventDefault();
                this.handleAddressFind();
              }}
            >
              Find Address
            </button>
          </div>
        </div>
      );
    }

    return (
      <div>
        <FormHeader headerTitle="Property Address" />
        <div id="addressDetails">{this.fullAddressForm()}</div>
      </div>
    );
  }
}

export default PropertyAddress;
