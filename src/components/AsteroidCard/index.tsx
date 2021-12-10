import { Card, CardContent, Link, Typography } from "@mui/material";
import React from "react";
import { IAsteroidData } from "../../utils/interfaces/asteroid";

interface AsteroidDataProps {
  asteroidInfo: IAsteroidData;
}

const AsteroidCard: React.FC<AsteroidDataProps> = ({ asteroidInfo }) => {
  return (
    <Card>
      <CardContent>
        <Typography component="div" variant="h5">
          {asteroidInfo.id}
        </Typography>
        <Typography variant="subtitle1" component="div">
          {asteroidInfo.name}
        </Typography>
        <Typography gutterBottom>
          <Link
            target="_blank"
            rel="noopener"
            href={asteroidInfo.nasa_jpl_url}
            title={asteroidInfo.nasa_jpl_url}
          >
            Nasa URL
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {asteroidInfo.is_potentially_hazardous_asteroid
            ? "Asteroid is potentially hazardous"
            : "Asteroid is most probably harmless"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AsteroidCard;
