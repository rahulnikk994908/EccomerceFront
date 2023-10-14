import * as React from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import AddressCard from '../AddressCard/AddressCard.jsx'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../State/Order/Action.js";


export default function DeliveryAddressForm({ handleNext }) {
  const dispatch =useDispatch()
  const navigate = useNavigate()
  const {order} = useSelector(store => store)

  

  // console.log("auth", auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
    console.log(address)

    const orderData ={address,navigate}
    dispatch(createOrder(orderData))
    navigate('/checkout?step=2')


    console.log("Address........",address)

  };
  const sideAdress =()=>{
    const address = {
      firstName: order.order?.shippingAddress.firstName,
      lastName: order.order?.shippingAddress.lastName,
      streetAddress: order.order?.shippingAddress.address,
      city: order.order?.shippingAddress.city,
      state: order.order?.shippingAddress.state,
      zipCode: order.order?.shippingAddress.zip,
      mobile: order.order?.shippingAddress.phoneNumber
    };
    const orderData ={address,navigate}
    dispatch(createOrder(orderData))

  }

 

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={5}>
        <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
            <div
              className="p-5 py-7 border-b cursor-pointer"
            >
              {" "}
              <AddressCard address={order.order?.shippingAddress}/>
             
                <Button onClick={sideAdress}
                  sx={{ mt: 2 }}
                  size="large"
                  variant="contained"
                  color="primary"
                  
                >
                  Deliverd Here
                </Button>
            </div>
          
        </Box>
      </Grid>
      <Grid item xs={12} lg={7}>
        <Box className="border rounded-md shadow-md p-5">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="shipping address"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{ padding: ".9rem 1.5rem" }}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Deliverd Here
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
  }
