import { Box, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <Box onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div
            className="flex cursor-pointer"
          >
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://images.pexels.com/photos/1362724/pexels-photo-1362724.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">Top Beutiful Yellow Flavour</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: M</span>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹999</p>
        </Grid>
        <Grid item xs={4}>
         {true && 
         <div><p className="space-y-2 font-semibold">
            
               
         <AdjustIcon
         sx={{ width: "15px", height: "15px" }}
         className="text-green-600 p-0 mr-2 text-sm"
       />
       <span>Delivered On Mar 03</span>
       </p>
       <p>your item has been delivered</p></div>
        }
         {false && <p className="space-y-2 font-semibold">
            
               
            <AdjustIcon
            sx={{ width: "15px", height: "15px" }}
            className="text-green-600 p-0 mr-2 text-sm"
          />
          <span>Expected Delivery On Mar 03</span>
          </p>
    }
            
         
         
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderCard;
