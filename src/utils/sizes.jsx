import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const Hscale = (size) => (width / BASE_WIDTH) * size;
const Vscale = (size) => (height / BASE_HEIGHT) * size;

const moderateScale = (size, factore = .3) => size + (Hscale(size) - size) * factore;

const fontScale = (size) => moderateScale(size, 0.3)

const fontSizes = {

};

const spacing = {
    // xxs: Hscale(4),
    // xs: Hscale(8),
    // sm: Hscale(12),
    // md: Hscale(16),
    // lg: Hscale(20),
    // xl: Hscale(24),
    // xxl: Hscale(32),

    // vxxs: Vscale(4),
    // vxs: Vscale(8),
    // vsm: Vscale(12),
    // vmd: Vscale(16),
    // vlg: Vscale(20),
    // vxl: Vscale(24),
    // vxxl: Vscale(32),

    // screenGutter: Hscale(20),
    // compactGutter: Hscale(16),
};

const borderRadii = {

};

const iconSizes = {

};

const componentSizes = {

};

export const Scale = { Hscale, Vscale, moderateScale, fontScale };

export const Size = { fontSizes, spacing, borderRadii, iconSizes, componentSizes };