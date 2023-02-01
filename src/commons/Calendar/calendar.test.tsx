import React from "react";
import { describe, expect, test, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import Calendar from "./index.js";

describe("Calendar test", () => {
  test("should call handleChange when calendar is clicked", () => {
    const onClick = vi.fn();
    const date = new Date("2023-01-01");
    const { getByTestId } = render(
      <Calendar onChange={onClick} value={date} />
    );
    fireEvent.click(getByTestId("2/2/2023"));
    expect(onClick).toHaveBeenCalledWith(new Date("2023-02-02 12:00 AM"));
  });

  test("should call handleChange when time picker is clicked", () => {
    const onClick = vi.fn();
    const date = new Date("2023-01-01");
    const { getByTestId } = render(
      <Calendar onChange={onClick} value={date} />
    );
    fireEvent.click(getByTestId("08 : 00 AM"));
    expect(onClick).toHaveBeenCalledWith(new Date("2023-01-01 08:00 AM"));
  });

  test("should render correctly", () => {
    const onClick = vi.fn();
    const date = new Date("2021-01-01");
    const contained = render(<Calendar onChange={onClick} value={date} />);
    expect(contained).toMatchSnapshot();
  });
});
