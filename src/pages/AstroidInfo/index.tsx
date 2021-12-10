import {
  Card,
  CardContent,
  Container,
  Typography,
  Link,
  Skeleton,
  Alert,
  AlertTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAsteroidData } from "../../utils/interfaces/asteroid";

import asteroidServices from "../../services/asteroid.service";
import AsteroidCard from "../../components/AsteroidCard";
import AsteroidSkeleton from "../../components/AsteroidCard/skeleton";
import AsteroidError from "../../components/AsteroidCard/error";

const AsteroidInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const [asteroidInfo, setAsteroidInfo] = useState<IAsteroidData>(
    {} as IAsteroidData
  );

  useEffect(() => {
    getAsteroidInfo();
  }, []);

  const getAsteroidInfo = async () => {
    try {
      const result = await asteroidServices.getAsteroidById(id);
      if (result.data) {
        setLoading(false);
        setAsteroidInfo(result.data);
      }
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  };

  if (loading) {
    return (
      <div className="asteroid-info">
        <Container component="main" maxWidth="md">
          <AsteroidSkeleton />
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div className="asteroid-info">
        <Container component="main" maxWidth="md">
          <AsteroidError />
        </Container>
      </div>
    );
  }

  return (
    <div className="asteroid-info">
      <Container component="main" maxWidth="md">
        <AsteroidCard asteroidInfo={asteroidInfo} />
      </Container>
    </div>
  );
};

export default AsteroidInfo;
