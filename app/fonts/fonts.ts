import localFont from "next/font/local";

export const dancingScript = localFont({
  src: [
    {
      path: "./Dancing_Script/static/DancingScript-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Dancing_Script/static/DancingScript-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dancing",
  display: "swap",
});

export const montserrat = localFont({
  src: [
    {
      path: "./Montserrat/static/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Montserrat/static/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const onest = localFont({
  src: [
    {
      path: "./Onest/static/Onest-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Onest/static/Onest-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-onest",
  display: "swap",
});

export const sen = localFont({
  src: [
    {
      path: "./Sen/static/Sen-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Sen/static/Sen-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sen",
  display: "swap",
});

export const urbanist = localFont({
  src: [
    {
      path: "./Urbanist/static/Urbanist-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Urbanist/static/Urbanist-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-urbanist",
  display: "swap",
});