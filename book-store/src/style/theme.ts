import { DefaultTheme } from "styled-components";

// 무작위로 키를 추가하는 걸 막기 위해 키 제한!
type ColorKey = "primary" | "background" | "secondary" | "third"


export type ThemeName = "light" | "dark"

declare module "styled-components" {
    export interface DefaultTheme {
        name: ThemeName;
        color: Record<ColorKey, string>;
    }
}

// 테마도 타입으로 관리
// interface DefaultTheme {
//     name: ThemeName;
//     color: Record<ColorKey, string>; 
    // {
        //여러개의 컬러를 받아올 때 하나씩 추가해줘야 된다면? 너무 번거로움!!!
        
        // [key in ColorKey]: string
        // background: string;
    // }
// }


export const light: DefaultTheme = {
    name: 'light',
    color: {
        primary: 'brown',
        background: 'lightgray',
        secondary: 'blue',
        third: 'green'
    }
}

export const dark: DefaultTheme = {
    name: 'dark',
    color: {
        primary: 'coral',
        background: 'midnightblue',
        secondary: 'darkblue',
        third: 'darkgreen'
    }
}

// themeName에 맞는 값 return!
export const getTheme = (themeName: ThemeName) : DefaultTheme => {
    switch (themeName) {
        case 'light':
            return light;
        case 'dark':
            return dark;
    }
}