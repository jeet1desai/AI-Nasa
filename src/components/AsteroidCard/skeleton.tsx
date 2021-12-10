import { Card, CardContent, Skeleton, Typography } from "@mui/material";
import React from "react";

const AsteroidSkeleton: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="body1">
          Loading...
        </Typography>
        <Skeleton
          variant="rectangular"
          height={20}
          width="50%"
          animation="wave"
        />
        <br />
        <Skeleton
          variant="rectangular"
          height={15}
          width="30%"
          animation="wave"
        />
        <br />
        <Skeleton
          variant="rectangular"
          height={15}
          width="80%"
          animation="wave"
        />
      </CardContent>
    </Card>
  );
};

export default AsteroidSkeleton;
