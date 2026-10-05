import { } from "lucide-react-native";
import { useSize } from "../../store/useSize";
import { useColor } from "../../store/useColor";

const iconMap = {};

export const LucideIcon = ({ name, size, color, ...props }) => {
    const { moderateScale } = useSize();
    const { colors } = useColor();

    const IconComponent = iconMap[name];
    if (!IconComponent) {
        console.warn(`Icon "${name}" does not exist in lucide-react library.`);
        return null;
    }
    return <IconComponent size={size || moderateScale(28)} color={color || colors.textPrimary} {...props} />;
}