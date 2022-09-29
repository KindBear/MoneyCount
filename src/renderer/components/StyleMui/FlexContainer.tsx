import React from "react";
import styled from "@emotion/styled";

type FlexContainerProps = {
  align?: "baseline" | "center" | "flex-end" | "flex-start",
  direction?: "column" | "row" | "row-reverse" | "column-reverse",
  justify?: "center" | "space-around" | "space-between",
  padding?: string;
};

export const FlexContainer = styled.div(
  (
    {
      direction = "column",
      align = "center",
      justify = "center",
      padding,
    }: FlexContainerProps,
  ) => ({
    display: "flex",
    alignItems: align,
    flexDirection: direction,
    justifyContent: justify,
    padding,
  }),
);
