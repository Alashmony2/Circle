'use client'
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { RegisterData } from './../../../interfaces/registerData';
import { useRouter } from "next/navigation";

export default function Register() {

  const {push} = useRouter();
  const [isLoading, setIsLoading] = useState(false)

  const initialValues : RegisterData = {
    name: "",
    email:"",
    password:"",
    rePassword:"",
    dateOfBirth:"",
    gender:"male"
  }

  async function onSubmit(values: RegisterData) {
    
      setIsLoading(true);
      const { data } = await axios.post("https://linked-posts.routemisr.com/users/signup", values);
      console.log("Success:", data);
      if(data.message === "success"){
        push("/login");
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
          Register 
        </Typography>
        <Box component={"form"} onSubmit={handleSubmit}>
          <Stack spacing={2} marginTop={2}>
          <TextField
          onChange={handleChange}
          value={values.name}
            label="Name"
            name="name"
            type="text"
            variant="outlined"
            fullWidth
          />
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
          <TextField
          onChange={handleChange}
          value={values.rePassword}
            label="RePassword"
            name="rePassword"
            type="password"
            variant="outlined"
            fullWidth
          />
          <TextField
          onChange={handleChange}
          value={values.dateOfBirth}
            label="Date Of Birth"
            name="dateOfBirth"
            type="date"
            variant="outlined"
            fullWidth
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select onChange={handleChange} value={values.gender} label="Gender" name="gender" fullWidth>
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </FormControl>
            <Button loading={isLoading} type="submit" variant="contained">Register</Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
