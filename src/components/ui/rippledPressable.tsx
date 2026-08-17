import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';
import {
  Animated,
  GestureResponderEvent,
  LayoutChangeEvent,
  Pressable,
  View,
} from 'react-native';

export type RippledPressableProps = React.ComponentProps<typeof Pressable> &
  React.RefAttributes<typeof Pressable> & {
    rippleColor?: string;
    rippleOpacity?: number;
    rippleDuration?: number;
    rippleContainerClassName?: string;
  };

type Ripple = {
  id: number;
  x: number;
  y: number;
  size: number;
  scale: Animated.Value;
  opacity: Animated.Value;
};

function RippledPressable({
  className,
  rippleContainerClassName,
  rippleColor = '#00000030',
  rippleOpacity = 1,
  rippleDuration = 500,
  onLayout,
  onPressIn,
  children,
  ...props
}: RippledPressableProps) {
  const layoutRef = useRef({ width: 0, height: 0 });
  const nextRippleId = useRef(0);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    layoutRef.current = { width, height };
    onLayout?.(event);
  };

  const handlePressIn = (event: GestureResponderEvent) => {
    const { locationX, locationY } = event.nativeEvent;
    const { width, height } = layoutRef.current;

    const maxDistanceX = Math.max(locationX, width - locationX);
    const maxDistanceY = Math.max(locationY, height - locationY);
    const size = Math.hypot(maxDistanceX, maxDistanceY) * 2;

    const id = nextRippleId.current++;
    const scale = new Animated.Value(0);
    const opacity = new Animated.Value(rippleOpacity);

    setRipples((prev) => [...prev, { id, x: locationX, y: locationY, size, scale, opacity }]);

    Animated.parallel([
      Animated.timing(scale, { toValue: 1, duration: rippleDuration, useNativeDriver: true }),
      Animated.timing(opacity, { toValue: 0, duration: rippleDuration, useNativeDriver: true }),
    ]).start(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    });

    onPressIn?.(event);
  };

  return (
    <Pressable
      className={cn(className)}
      onLayout={handleLayout}
      onPressIn={handlePressIn}
      {...props}
    >
      {(state) => (
        <>
          {typeof children === 'function' ? children(state) : children}
          <View
            pointerEvents="none"
            className={cn('absolute inset-0 overflow-hidden', rippleContainerClassName)}
          >
            {ripples.map(({ id, x, y, size, scale, opacity }) => (
              <Animated.View
                key={id}
                style={{
                  position: 'absolute',
                  left: x - size / 2,
                  top: y - size / 2,
                  width: size,
                  height: size,
                  borderRadius: size / 2,
                  backgroundColor: rippleColor,
                  opacity,
                  transform: [{ scale }],
                }}
              />
            ))}
          </View>
        </>
      )}
    </Pressable>
  );
}

export default RippledPressable;
