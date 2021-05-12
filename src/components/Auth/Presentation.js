import React from "react"
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Snackbar,
  TextField,
  Paper,
} from "@material-ui/core"
import MuiAlert from "@material-ui/lab/Alert"
import { useStyles } from "../styles/styles"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

function Presentation(props) {
  const classes = useStyles()
  const { handleChange, handleSubmit, authStatus,authError } = props

  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  return (
    <div>
      <Paper elevation={2}>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                id="email"
                required
                label="Email"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                id="password"
                required
                label="Password"
                variant="outlined"
                onChange={handleChange}
              />
              <CardActions>
                <Button variant="contained" type="submit" color="primary" onClick={handleClick}>
                  Signin
                </Button>
                {(authError) ? 
                 <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                 <Alert onClose={handleClose} severity="success">
                   {authStatus}
                 </Alert>
               </Snackbar> : <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error">
                    {authStatus}
                  </Alert>
                </Snackbar>
              
              }
               
              </CardActions>
            </form>
          </CardContent>
        </Card>
      </Paper>
    </div>
  )
}

export default Presentation
