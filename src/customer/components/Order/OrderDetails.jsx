import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { deepPurple } from "@mui/material/colors";
import AddressCard from "../AddressCard/AddressCard";
import OrderTraker from "./OrderTracker";

const OrderDetails = () => {
  
  return (
    <div className="px-2 lg:px-36 space-y-7 ">
      <Grid container className="p-3 shadow-lg">
        <Grid xs={12}>
          <p className="font-bold text-lg py-2">Delivery Address</p>
        </Grid>
        <Grid item xs={6}>
          <AddressCard  />
        </Grid>
      </Grid>
      <Box className="p-5 shadow-lg border rounded-md">
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item xs={9}>
            <OrderTraker
              activeStep={
2
              }
            />
          </Grid>
          
        </Grid>
      </Box>

    

      <Grid container className="space-y-5">
        {[1,1,1].map((item) =>(
                      <Grid
                      container
                      item
                      className="shadow-xl rounded-md p-5 border"
                      sx={{ alignItems: "center", justifyContent: "space-between" }}
                    >
                      <Grid item xs={6}>
                        {" "}
                        <div className="flex  items-center ">
                          <img
                            className="w-[5rem] h-[5rem] object-cover object-top"
                            src="https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
                            alt=""
                          />
                          <div className="ml-5 space-y-2">
                            <p className="">Shirt Grey Jacket Pattern</p>
                            <p className="opacity-50 text-xs font-semibold space-x-5">
                              <span>Color: pink</span> <span>Size: M</span>
                            </p>
                            <p>Seller: R&R outfit</p>
                            <p>₹234 </p>
                          </div>
                        </div>
                      </Grid>
                      <Grid item>
                        {
                          <Box
                            sx={{ color: deepPurple[500] }}
                            className="flex items-center cursor-pointer"
                          >
                            <StarIcon
                              sx={{ fontSize: "2rem" }}
                              className="px-2 text-5xl"
                            />
                            <span>Rate & Review Product</span>
                          </Box>
                        }
                      </Grid>
                    </Grid>
            
        )


        )}

      </Grid>
    </div>
  );
};
// sx={{width:"10px",height:"10px"}}
export default OrderDetails;
