import { Alert, AlertTitle, Card } from "@mui/material";
import React from "react";

const AsteroidError: React.FC = () => {
  return (
    <Card>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Some error occurred, Please try again with different id...
      </Alert>
    </Card>
  );
};
export default AsteroidError;
