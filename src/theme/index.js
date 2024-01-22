
// CMD K + G TO GENERATE COLORS

 


export const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#dddddd",
    200: "#bbbbbb",
    300: "#989898",
    400: "#767676",
    500: "#545454",
    600: "#434343",
    700: "#323232",
    800: "#222222",
    900: "#111111",
    1000: "#000000",
  },
  primary: {
    // blue
    100: "#fddacd",
    200: "#fab69c",
    300: "#f8916a",
    400: "#f56d39",
    500: "#f34807",
    600: "#c23a06",
    700: "#922b04",
    800: "#611d03",
    900: "#310e01"
  },
  secondary: {
    // teal
    100: "#d3d3d3",
    200: "#a7a7a7",
    300: "#7b7b7b",
    400: "#4f4f4f",
    500: "#232323",
    600: "#1c1c1c",
    700: "#151515",
    800: "#0e0e0e",
    900: "#070707"
  },
  thirdly: {
    100: "#fff8de",
    200: "#fff2bd",
    300: "#ffeb9b",
    400: "#ffe57a",
    500: "#ffde59",
    600: "#ccb247",
    700: "#998535",
    800: "#665924",
    900: "#332c12",
  },
};

function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[500],
              light: tokensDark.primary[100],
              dark: tokensDark.primary[900],
              contrastText: tokensDark.primary[700],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[500],
              light: tokensDark.secondary[100],
              dark: tokensDark.secondary[900],
              contrastText: tokensDark.secondary[100],
            },
            neutral: {
              ...tokensDark.thirdly,
              ...tokensDark.grey,
              main: tokensDark.thirdly[500],
              light: tokensDark.thirdly[100],
              dark: tokensDark.thirdly[900],
            contrastText: tokensDark.grey[1000],


            },
            background: {
              ...tokensDark.grey,
              ...tokensDark.primary,
              default: tokensDark.grey[1000],
              alt: tokensDark.grey[0],
              paper: tokensDark.grey[10],
              main: tokensDark.primary[100],

            },
            text :{
              ...tokensDark.grey,
              ...tokensDark.primary,
              ...tokensDark.primary,
              main: tokensDark.primary[500],
              light: tokensDark.grey[0],
              dark: tokensDark.grey[1000],
              contrastText: tokensDark.grey[300],
            }
          }
        : {
            primary: {
              ...tokensLight.primary,
              light: tokensDark.primary[900],
              main: tokensDark.primary[500],
              dark: tokensDark.primary[100],
              contrastText: tokensDark.primary[300],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[500],
              light: tokensDark.secondary[900],
              dark: tokensDark.secondary[100],
              contrastText: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensLight.thirdly,
              main: tokensDark.thirdly[0],
              light: tokensDark.thirdly[900],
              dark: tokensDark.thirdly[100],
              contrastText: tokensDark.thirdly[500],

            },
            background: {
              ...tokensLight.grey,
              default: tokensDark.grey[10],
              alt: tokensDark.grey[900],
              paper: tokensDark.grey[800],
              main: tokensDark.grey[900],

            },
            text :{
              ...tokensDark.grey,
              ...tokensDark.primary,
              main: tokensDark.grey[0],
              light: tokensDark.grey[800],
              dark: tokensDark.grey[50],
              contrastText: tokensDark.primary[200],

            }
          }),
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
