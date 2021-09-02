// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: string;
      size: {
        default: string;
        large: string;
        medium: string;
        small: string;
        tiny: string;
      };
      weight: {
        semi: number;
        bold: number;
      };
    };
    color: {
      mainColor: string;
      mainColorAlt: string;
      white: string;
      dark: string;
      darkAlt: string;
      gray: string;
    };
    margin: {
      m1: string;
      m2: string;
      m3: string;
      m4: string;
    };
    header: {
      headerHeight: string;
    };
    body: {
      maxWidth: string;
    };
  }
}
