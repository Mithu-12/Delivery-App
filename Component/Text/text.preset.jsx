import Colors from "../../constants/Colors"
import { colors } from "../../Theme/colors"
import { typography } from "../../Theme/typography"


const base = {
    fontFamily: typography.primary,
    fontSize: 15,
    color: Colors.black
}
const BOLD = {
    fontFamily: typography.bold,
    color: colors.black
}

export const presets = {
    default: base,
    bold: BOLD,
    h1:{
        ...BOLD,
        fontSize: 56,

    },
    h2:{
        ...BOLD,
        fontSize: 48
    },
    h3:{
        ...BOLD,
        fontSize: 36
    },
    h4:{
        ...BOLD,
        fontSize: 28
    },
    h5:{
        ...BOLD,
        fontSize:24
    },
    h6:{
        ...BOLD,
        fontSize: 18
    },
    overline:{
        fontFamily: typography.regular,
        fontSize: 14,
    },
    subtitle:{
        ...BOLD,
        fontSize: 13,
    },
    title:{
        ...BOLD,
        fontSize: 14
    }
    
}