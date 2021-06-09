import React from "react"
import { CustomField } from "../../../ComponentsUsed/TextFields"
import { Card, CardActions, CardContent, Button, Snackbar, Paper } from "@material-ui/core"
import { useStyles } from "../../styles/styles"
function Presentation(props) {
  const classes = useStyles()
  const { handleChange, handleSubmit, password } = props
  return (
    <div style={{ padding: "80px" }}>
      <Card className={classes.form}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <CustomField
              id="password"
              type="password"
              label="Password"
              required
              value={password}
              handleChange={handleChange}
            />
            <div style={{ padding: "15px" }}>
              <Button variant="contained" type="submit" color="primary">
                ChangePassword
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Presentation
