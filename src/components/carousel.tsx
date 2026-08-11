import { FlatList, ImageSourcePropType, Dimensions } from "react-native"
import { JSX } from "react/jsx-runtime"
import LazyImage from "./lazyImage"

type CarouselProps = {
    data: ImageSourcePropType[],
    renderItem?: (item: ImageSourcePropType) => JSX.Element,
    horizontal?: boolean,
    showsHorizontalScrollIndicator?: boolean,
    width?: number,
    height?: number,
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window")

function Carousel({
    data,
    renderItem,
    horizontal = true,
    showsHorizontalScrollIndicator = true,
    width = screenWidth,
    height = screenHeight * 0.25,
}: CarouselProps) {
    return (
        <FlatList
            data={data}
            renderItem={
                renderItem
                    ? ({ item }) => renderItem(item)
                    : ({ item }) => <LazyImage source={item} width={width} height={height} />
            }
            keyExtractor={(_, index) => index.toString()}
            horizontal={horizontal}
            showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
            snapToInterval={width}
            snapToAlignment="center"
            decelerationRate="fast"
        />
    )
}

export default Carousel