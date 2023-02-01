import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import UserInfoField from "./index.js";

describe("UserInfoField test", () => {
  test("should render correctly primary contained Button", () => {
    const contained = render(<UserInfoField icon={"user"} value={"test"} />);
    expect(contained).toMatchSnapshot();
  });
  test("should render correctly primary contained Button", () => {
    const contained = render(<UserInfoField icon={"email"} value={"test"} />);
    expect(contained).toMatchSnapshot();
  });
  test("should render correctly primary contained Button", () => {
    const contained = render(<UserInfoField icon={"phone"} value={"test"} />);
    expect(contained).toMatchSnapshot();
  });
  test("should render correctly primary contained Button", () => {
    const contained = render(<UserInfoField icon={"city"} value={"test"} />);
    expect(contained).toMatchSnapshot();
  });
});
