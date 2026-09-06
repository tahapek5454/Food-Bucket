import { useRef, useState } from "react"
import { FlatList, ImageSourcePropType, Dimensions, StyleProp, ViewStyle, View, NativeSyntheticEvent, NativeScrollEvent } from "react-native"
import { JSX } from "react/jsx-runtime"
import LazyImage from "./lazyImage"

type CarouselProps = {
    data: ImageSourcePropType[],
    renderItem?: (item: ImageSourcePropType) => JSX.Element,
    horizontal?: boolean,
    showsHorizontalScrollIndicator?: boolean,
    width?: number,
    itemWidth?: number,
    itemSpacing?: number,
    height?: number,
    style?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    pagination?: boolean;
    dotSize?: number;
    dotColor?: string;
    activeDotColor?: string;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window")

function Carousel({
    data,
    renderItem,
    horizontal = true,
    showsHorizontalScrollIndicator = false,
    width = screenWidth * 0.50,
    itemWidth = width,
    itemSpacing = 0,
    height = screenHeight * 0.25,
    style,
    containerStyle,
    pagination = true,
    dotSize = 8,
    dotColor = "#d1d5db",
    activeDotColor = "#6366f1",
}: CarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const listRef = useRef<FlatList>(null)
    const snapInterval = itemWidth + itemSpacing

    const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / snapInterval)
        setActiveIndex(index)
    }

    return (
        <View style={[{ alignItems: "center" }, containerStyle]}>
            <FlatList
                ref={listRef}
                style={[{ width, flexGrow: 0 }, style]}
                data={data}
                renderItem={
                    renderItem
                        ? ({ item }) => renderItem(item)
                        : ({ item, index }) => (
                            <View style={{ marginRight: index === data.length - 1 ? 0 : itemSpacing }}>
                                <LazyImage source={item} width={itemWidth} height={height} />
                            </View>
                        )
                }
                keyExtractor={(_, index) => index.toString()}
                horizontal={horizontal}
                showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
                snapToInterval={snapInterval}
                snapToAlignment="center"
                decelerationRate="fast"
                onMomentumScrollEnd={handleMomentumScrollEnd}
            />
            {pagination && data.length > 1 && (
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 8 }}>
                    {data.map((_, index) => (
                        <View
                            key={index}
                            style={{
                                width: dotSize,
                                height: dotSize,
                                borderRadius: dotSize / 2,
                                marginHorizontal: dotSize / 2,
                                backgroundColor: index === activeIndex ? activeDotColor : dotColor,
                            }}
                        />
                    ))}
                </View>
            )}
        </View>
    )
}

export default Carousel