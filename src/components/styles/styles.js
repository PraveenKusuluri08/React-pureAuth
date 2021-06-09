import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  root: {
    width: "400px",
    justifyContent: "center",
    "& > * + *": {
      marginTop: theme.spacing(8)
    },
    
  },
  form :{
   /* backgroundColor :"red", */
    marginLeft :"auto",
    marginRight :"auto",
    padding :"50px",
    width:"500px",
    alignItems:"center"
  },
  signUp :{
    marginLeft :"auto",
    marginRight :"auto",
    padding :"50px",
    width:"500px",
    alignItems:"center",
    marginTop :"30px"
  },
  signIn :{
    marginLeft :"auto",
    marginRight :"auto",
    padding :"50px",
    width:"500px",
    alignItems:"center",
    marginTop :"30px"
  }
}));