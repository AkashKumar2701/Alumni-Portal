import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
  paper: {
    marginTop: '64px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
  },
  root: {
    '& .MuiTextField-root': {
      margin: '8px',
    },
  },
  avatar: {
    margin: '8px',
    backgroundColor: "#1890ff"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '24px',
  },
  submit: {
    margin: "24px 0px 16px",
    backgroundColor: "#1890ff"
  },
  button: {
    color: 'black',
    backgroundColor: "lightblue",
    margin: "10px 10px 10px 0px",
    "&:hover": {
      backgroundColor: "#7799a4",
    }
  },
  calender:{
    width:'100%',
    padding:'10px',
    backgroundColor:'yellow'
  }
}));