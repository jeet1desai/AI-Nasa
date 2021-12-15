import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import asteroidServices from "../../services/asteroid.service";

const Home: React.FC = () => {
  const history = useHistory();

  const [id, setId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const randomAsteroidId = async () => {
    setLoading(true);
    try {
      const result = await asteroidServices.getRandomAsteroidId();
      if (result.data) {
        const randomNo = Math.floor(Math.random() * 20);
        setLoading(false);
        const randomId = result.data.near_earth_objects[randomNo].id;
        history.push(`${randomId}`);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <div className="nasa-form">
        <form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            history.push({ pathname: `/${id}` });
          }}
        >
          <TextField
            value={id}
            onChange={(e) => setId(e.target.value)}
            fullWidth
            id="outlined-basic"
            label="Enter Asteroid Id"
            variant="outlined"
            required
            inputProps={{ "data-testid": "asteroid-input" }}
          />
          <br />
          <br />
          <Grid container spacing={2}>
            <Grid item>
              <Button
                data-testid="country-submit-btn"
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </Grid>
            <Grid item>
              <Button
                data-testid="country-random-id-btn"
                onClick={randomAsteroidId}
                variant="outlined"
                disabled={loading}
                startIcon={loading && <CircularProgress size={20} />}
              >
                Get Random Asteroid
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Home;
