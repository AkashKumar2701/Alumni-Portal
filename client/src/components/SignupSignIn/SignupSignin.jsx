import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
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
  secretKey: ''
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
  }

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

      dispatch(facultySignup(formData, history))
    } else {
      if (isFaculty) {
        dispatch(facultySignin(formData, history))
      } else {
        dispatch(alumniSignin(formData, history))

      }
    }


  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="md">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar} color='secondary'>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">
          {isSignup ? `${isFaculty ? "Faculty " : "Alumni "}Sign Up` : `${isFaculty ? "Faculty " : "Alumni"} Sign In`}
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
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}

            {(isSignup && isFaculty) && (
              <Input
                name="secretKey"
                label="SECRET KEY"
                handleChange={handleChange}
                type="text"
              />
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
              <Grid item >
                <Button onClick={switchLoginMode} className={classes.button}>
                  {`Login As ${!isFaculty ? "Faculty" : "Alumni"}`}
                </Button>
              </Grid>
            )}

            <Grid item >
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
