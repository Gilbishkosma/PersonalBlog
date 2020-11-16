import Typography from "typography"

const typography = new Typography({
    baseFontSize: "20px",
    baseLineHeight: 2.15,
    headerLineHeight: 1.6,
    headerWeight: 600,
    blockMarginBottom: 0.5,
    headerFontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ],
    bodyFontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ],
  });
  
  // Insert styles directly into the <head>
  typography.injectStyles();



export default typography