import { describe, expect, test, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import TextField from "./index";

describe("TextField test", () => {
  test("call onChange when value changed", () => {
    const onClick = vi.fn();
    const { getByDisplayValue } = render(
      <TextField onChange={onClick} value={"test field"}></TextField>
    );
    fireEvent.change(getByDisplayValue("test field"), {
      target: { value: "test" },
    });
    expect(onClick).toHaveBeenCalledWith("test");
  });

  test("render correct value", () => {
    const onClick = vi.fn();
    const { getByDisplayValue } = render(
      <TextField onChange={onClick} value={"test field2"}></TextField>
    );

    expect(getByDisplayValue("test field2")).toBeDefined();
  });

  test("should render correctly TextField", () => {
    const contained = render(
      <TextField type={"password"} value={"test field"} />
    );
    expect(contained).toMatchSnapshot();
  });
});
