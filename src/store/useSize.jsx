import { create } from 'zustand'
import { Size } from '../utils/sizes'
import { Scale } from '../utils/sizes'

export const useSize = create((set, get) => {
    return {
        fontSizes: Size.fontSizes,
        spacing: Size.spacing,
        borderRadii: Size.borderRadii,
        iconSizes: Size.iconSizes,
        componentSizes: Size.componentSizes,
        verticalScale: Scale.Vscale,
        horizontalScale: Scale.Hscale,
        moderateScale: Scale.moderateScale,
        fontScale: Scale.fontScale,
    }
})
