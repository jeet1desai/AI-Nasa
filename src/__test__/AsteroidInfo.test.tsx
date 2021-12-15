import { render, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import AsteroidInfo from "../pages/AstroidInfo";
import service from "../services/asteroid.service";

test("render asteroid info", async () => {
  const history = createMemoryHistory();
  const route = `/${2001980}`;
  history.push(route);

  render(
    <Router history={history}>
      <AsteroidInfo />
    </Router>
  );
});

test("should called specific id api", async () => {
  const mockFn = jest.spyOn(service, "getAsteroidById");

  const history = createMemoryHistory();
  const route = `/${2001980}`;
  history.push(route);

  render(
    <Router history={history}>
      <AsteroidInfo />
    </Router>
  );

  await waitFor(async () => {
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
