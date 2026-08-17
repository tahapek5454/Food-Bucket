import { ScrollView } from 'react-native-gesture-handler'
import { View } from 'react-native'
import type { StackScreenProps } from '@react-navigation/stack'
import CategoryFilter from '@/components/products/categoryFilter'
import type { HomeRootStackParamList } from '@/components/navigator/home'
import TypeFilter from '@/components/products/typeFilter'
import ProductCardScroll from '@/components/products/productCardScroll'
import { Text } from '@/components/ui/text'
import { useLanguage } from '@/hooks/useLanguage'
import ProductCardList from '@/components/products/productCardList'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export type ProductsProps = StackScreenProps<HomeRootStackParamList, 'Products'>

function Products({ route }: ProductsProps) {
  const { categoryId } = route.params
  const { t } = useLanguage()
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <ScrollView className='bg-background' contentContainerStyle={{ paddingBottom: tabBarHeight }}>
        <CategoryFilter categoryId={categoryId} />
        <TypeFilter categoryId={categoryId} />
        <ProductCardScroll categoryId={categoryId}/>
        <View className='p-2'>
          <Text className='text-lg font-bold text-foreground'>{t('products.allProducts')}</Text>
        </View>
        <ProductCardList categoryId={categoryId}/>
    </ScrollView>
  )
}

export default Products