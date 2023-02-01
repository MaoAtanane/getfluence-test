import React from "react";
import { describe, expect, test } from "vitest";
import Card from "./index";
import { render } from "@testing-library/react";

describe("Card test", () => {
  test("render correctly", () => {
    const contained = render(
      <Card>
        <div>test</div>
      </Card>
    );
    expect(contained).toMatchSnapshot();
  });
});
