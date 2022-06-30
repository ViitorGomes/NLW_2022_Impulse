type ColorsType = {
    brand: string
    background: string
    surface_primary: string
    surface_secondary: string
    text_primary: string
    text_secondary: string
    text_on_brand_color: string
    stroke: string
}

type ColorsSchemeType = {
    dark: ColorsType
    light: ColorsType
}

export const colorsScheme : ColorsSchemeType = {
    dark: {
        brand: '#8257E5',
        background: '#09090A',
        surface_primary: '#18181B',
        surface_secondary: '#27272A',
        text_primary: '#F4F4F5',
        text_secondary: '#A1A1AA',
        text_on_brand_color: '#FFFFFF',
        stroke: '#52525B'
    },
    light: {
        brand: '#8257E5',
        background: '#F4F4F5',
        surface_primary: '#FFFFFF',
        surface_secondary: '#F4F4F5',
        text_primary: '#27272A',
        text_secondary: '#71717A',
        text_on_brand_color: '#FFFFFF',
        stroke: '#D4D4D8'
    }
}