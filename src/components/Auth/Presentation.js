import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Button,
 
  TextField,
  Paper,
} from "@material-ui/core"
function Presentation(props) {
  const {handleChange,handleSubmit}=props
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
            <CardActions >
              <Button variant="contained" type="submit" color="primary" >
                Signin
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
      </Paper>
    </div>
  )
}

export default Presentation
