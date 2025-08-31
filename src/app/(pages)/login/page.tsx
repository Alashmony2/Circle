'use client'
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginData } from "@/interfaces/loginData";
import Cookies from "js-cookie"
import { useDispatch } from "react-redux";
import { setUserIsLoggedIn } from "@/redux/slices/autSlice";

export default function Login() {

  const {push} = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();

  const initialValues : LoginData = {
    email:"",
    password:""
  }

  async function onSubmit(values: LoginData) {
    
      setIsLoading(true);
      const { data } = await axios.post("https://linked-posts.routemisr.com/users/signin", values);
      console.log("Success:", data);
      if(data.message === "success"){
        Cookies.set("token",data.token);
        dispatch(setUserIsLoggedIn(true));
        push("/");
      }
      setIsLoading(false);
  }
  

  const {values , handleChange , handleSubmit} = useFormik({
    initialValues,
    onSubmit,
  })
  return (
    <Box>
      <Container maxWidth={"sm"}>
        <Typography component={"h1"} variant="h3">
          Login 
        </Typography>
        <Box component={"form"} onSubmit={handleSubmit}>
          <Stack spacing={2} marginTop={2}>
          
          <TextField
          onChange={handleChange}
          value={values.email}
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextField
          onChange={handleChange}
          value={values.password}
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
          />
          
            
            <Button loading={isLoading} type="submit" variant="contained">Login</Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
