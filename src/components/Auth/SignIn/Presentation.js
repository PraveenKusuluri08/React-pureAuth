import { Card, CardActions, CardContent, Button } from "@material-ui/core"

import { useStyles } from "../../styles/styles"
import { CustomField } from "../../../ComponentsUsed/TextFields"

import { Redirect } from "react-router"
function Presentation(props) {
  const classes = useStyles()
  const { handleChange, handleSubmit, auth, email, password } = props

  return (
    <div className={classes.signIn}>
      {auth.uid ? <Redirect to="/" /> : null}
      <Card className={classes.form}>
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
              <Button variant="contained" type="submit" color="primary">
                Signin
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Presentation
