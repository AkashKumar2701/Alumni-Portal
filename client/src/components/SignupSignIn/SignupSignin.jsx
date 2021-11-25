import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FileBase from "react-file-base64";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { useSelector } from "react-redux";

import { facultySignin, facultySignup } from "../../actions/faculty";
import { alumniSignin } from "../../actions/alumni";
import useStyles from "./styles";
import Input from "./Input";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  dob: "",
  gender: "",
  fatherName: "",
  address: "",
  phone1: "",
  phone2: "",
  experience: "",
  selectedImage: "",
};

const SignupSignin = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [isFaculty, setIsFaculty] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchLoginMode = () => {
    setIsFaculty((prevState) => !prevState);
  };

  // to switch between signin and signup page
  const switchMode = () => {
    // reset all the state value
    // dispatch({ type: VALID })
    // set form to empty
    setFormData(initialState);
    // state to toggle b/w signin and signup
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
    setIsFaculty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(facultySignup(formData, history));
    } else {
      if (isFaculty) {
        dispatch(facultySignin(formData, history));
      } else {
        dispatch(alumniSignin(formData, history));
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper className={classes.paper} elevation={2}>
        <Avatar className={classes.avatar} color="secondary">
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">
          {isSignup
            ? `${isFaculty ? "Faculty " : "Alumni "}Sign Up`
            : `${isFaculty ? "Faculty " : "Alumni"} Sign In`}
        </Typography>
        {/* {isInvalid && <Typography variant='h6' color='error' >{message}</Typography>} */}
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  required
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  required
                  handleChange={handleChange}
                  half
                />

                <Input
                  name="dob"
                  label="Date Of Birth "
                  type="date"
                  required
                  placeholder=""
                  handleChange={handleChange}
                />

                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth required>
                    <InputLabel id="">Gender</InputLabel>
                    <Select
                      value={formData.gender}
                      label="Gender"
                      name="gender"
                      required
                      onChange={handleChange}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Input
                  name="fatherName"
                  label="Father's Name"
                  required
                  handleChange={handleChange}
                />

                <Input
                  name="address"
                  label="Permanent Address"
                  required
                  handleChange={handleChange}
                />

                <Input
                  name="phone1"
                  label="Phone Number 1"
                  type="number"
                  required
                  handleChange={handleChange}
                  half
                />

                <Input
                  name="phone2"
                  label="Phone Number 2"
                  type="number"
                  handleChange={handleChange}
                  half
                />

                <Input
                  name="experience"
                  label="Years Of Experience"
                  type="number"
                  handleChange={handleChange}
                  required
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
              required
            />
            <Input
              name="password"
              label="Password"
              required
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <>
                <Input
                  name="confirmPassword"
                  label="Repeat Password"
                  required
                  handleChange={handleChange}
                  type="password"
                />

                <Grid
                  item
                  xs={12}
                  sm={12}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6">Select Profile Picture</Typography>
                  <FileBase
                    type="file"
                    placeholder="Select Image"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setFormData({ ...formData, selectedImage: base64 })
                    }
                  />
                </Grid>
              </>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          <Grid container justify="flex-end">
            {!isSignup && (
              <Grid item>
                <Button onClick={switchLoginMode} className={classes.button}>
                  {`Login As ${!isFaculty ? "Faculty" : "Alumni"}`}
                </Button>
              </Grid>
            )}

            <Grid item>
              <Button onClick={switchMode} className={classes.button}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignupSignin;
