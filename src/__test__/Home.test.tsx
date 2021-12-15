import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Home from "../pages/Home";
import service from "../services/asteroid.service";

beforeEach(() => {
  render(<Home />);
});

test("should called random api", async () => {
  const mockFn = jest.spyOn(service, "getRandomAsteroidId");
  const randomButtonEl = screen.getByTestId("country-random-id-btn");
  await act(async () => {
    fireEvent.click(randomButtonEl);
  });
  await waitFor(async () => {
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});


