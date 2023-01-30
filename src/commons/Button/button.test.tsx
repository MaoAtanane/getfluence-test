import { describe, expect, test, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import Button from "./index.js";

describe("Button test", () => {
  test("should call onClick when clicked", () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button onClick={onClick}>test</Button>);
    fireEvent.click(getByText("test"));
    expect(onClick).toHaveBeenCalled();
  });

  test("should render correctly primary contained Button", () => {
    const contained = render(<Button onClick={() => {}}>test button</Button>);
    expect(contained).toMatchSnapshot();
  });
  test("should render correctly secondary contained Button", () => {
    const outlined = render(
      <Button variant={"outlined"} color={"secondary"} onClick={() => {}}>
        outlined test button
      </Button>
    );
    expect(outlined).toMatchSnapshot();
  });
  test("should render correctly primary outlined Button", () => {
    const outlined = render(
      <Button variant={"outlined"} onClick={() => {}}>
        outlined test button
      </Button>
    );
    expect(outlined).toMatchSnapshot();
  });
  test("should render correctly secondary outlined Button", () => {
    const outlined = render(
      <Button variant={"outlined"} color={"secondary"} onClick={() => {}}>
        outlined test button
      </Button>
    );
    expect(outlined).toMatchSnapshot();
  });

  test("should render correctly primary contained Button hover", () => {
    const contained = render(<Button onClick={() => {}}>test button</Button>);
    expect(contained).toMatchSnapshot();
  });
});
