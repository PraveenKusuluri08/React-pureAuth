import React, { useState } from "react"
import { Card, CardActions, CardContent, Button, Snackbar, Paper } from "@material-ui/core"
import MuiAlert from "@material-ui/lab/Alert"
import { useStyles } from "../../styles/styles"

import { CustomField } from "../../../ComponentsUsed/TextFields"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}
function Presentations(props) {
  const classes = useStyles()

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

  const { handleChange, handleSubmit, email, password, fName, lName, signUpStatus, signUpState } =
    props

  return (
    <div>
      <Card className={classes.signUp}>
        <CardContent>
          <form onSubmit={handleSubmit} className={classes.root}>
            <CustomField
              type="email"
              label="email"
              id="email"
              name="email"
              value={email}
              required
              handleChange={handleChange}
            />
            <CustomField
              id="password"
              required
              type="password"
              label="Password"
              value={password}
              handleChange={handleChange}
            />
            <CustomField
              type="name"
              required
              label="FirstName"
              id="fName"
              name="fName"
              value={fName}
              handleChange={handleChange}
            />
            <CustomField
              type="name"
              required
              label="LastName"
              id="lName"
              name="lName"
              value={lName}
              handleChange={handleChange}
            />
            <CardActions>
              <Button variant="contained" type="submit" color="primary" onClick={handleClick}>
                Signup
              </Button>

              {signUpState ? (
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success">
                    {signUpStatus}
                    
                  </Alert>
                </Snackbar>
              ) : (
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error">
                    {signUpStatus}
                    failure
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

export default Presentations
