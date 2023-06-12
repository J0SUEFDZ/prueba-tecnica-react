import { style } from "@vanilla-extract/css";

export const story = style({
  color: "#374151",
  marginBottom: "2rem",
});

export const storyTitle = style({
  textDecoration: "none",
  color: "#111",
  fontSize: "1.5rem",
});

export const storyHeader = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginBottom: "0.3rem",
  lineHeight: "1.5rem",
});

export const storyFooter = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  marginBottom: "2rem",
  fontSize: "0.8rem",
});

export const storyLink = style({
  textDecoration: "none",
  color: "#888",
  ":hover": {
    textDecoration: "underline",
  },
});
