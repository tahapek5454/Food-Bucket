import { useState } from "react";
import { View, Image, ActivityIndicator, type ImageProps } from "react-native";

type LazyImageProps = ImageProps & {
    width: number;
    height: number;
};

function LazyImage({ width, height, style, resizeMode = "cover", onLoadEnd, ...rest }: LazyImageProps) {
    const [loading, setLoading] = useState(true)

    return (
        <View style={{ width, height }}>
            <Image
                {...rest}
                style={[{ width, height }, style]}
                resizeMode={resizeMode}
                onLoadEnd={() => {
                    setLoading(false)
                    onLoadEnd?.()
                }}
            />
            {loading && (
                <View style={{ position: "absolute", width, height, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator size="large" />
                </View>
            )}
        </View>
    )
}

export default LazyImage