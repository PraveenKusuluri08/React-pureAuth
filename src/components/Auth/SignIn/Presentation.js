import { Card, CardActions, CardContent, Button, Snackbar, Paper } from "@material-ui/core"
import MuiAlert from "@material-ui/lab/Alert"
import { useStyles } from "../../styles/styles"
import { CustomField } from "../../../ComponentsUsed/TextFields"
import { useState } from "react"
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

function Presentation(props) {
  const classes = useStyles()
  const { handleChange, handleSubmit, authStatus, authError, email, password } = props

  const [open, setOpen] = useState(false)

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
    <div className={classes.signUp}>
      
      <Card  className={classes.form}>
        <CardContent>
          <form onSubmit={handleSubmit} className={classes.root}>
            <CustomField
              type="email"
              label="email"
              id="email"
              name="email"
              required
              value={email}
              handleChange={handleChange}
            />
            <CustomField
              id="password"
              type="password"
              label="Password"
              required
              value={password}
              handleChange={handleChange}
            />
            <CardActions>
              <Button variant="contained" type="submit" color="primary" onClick={handleClick}>
                Signin
              </Button>
              {authError ? (
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success">
                    {authStatus}
                  </Alert>
                </Snackbar>
              ) : (
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error">
                    {authStatus}
                  </Alert>
                </Snackbar>
              )}
            </CardActions>
          </form>
        </CardContent>
      </Card>
     </div>
  )
}

export default Presentation
