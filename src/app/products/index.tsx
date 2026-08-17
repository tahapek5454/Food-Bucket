import { ScrollView } from 'react-native-gesture-handler'
import type { StackScreenProps } from '@react-navigation/stack'
import CategoryFilter from '@/components/products/categoryFilter'
import type { HomeRootStackParamList } from '@/components/navigator/home'
import TypeFilter from '@/components/products/typeFilter'

export type ProductsProps = StackScreenProps<HomeRootStackParamList, 'Products'>

function Products({ route }: ProductsProps) {
  const { categoryId } = route.params
  return (
    <ScrollView>
        <CategoryFilter categoryId={categoryId} />
        <TypeFilter categoryId={categoryId} />
    </ScrollView>
  )
}

export default Products