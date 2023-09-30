import { CategoryDetailPage } from '@/components/pages/CategoryDetailPage'
import { CATEGORY_LABEL_MAP } from '@/constants/categoryLabelMap'
import { Category } from '@/types/book'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { category: Category }
}): Promise<Metadata> {
  return {
    title: CATEGORY_LABEL_MAP[params.category],
  }
}

export default function Page({ params }: { params: { category: Category } }) {
  return <CategoryDetailPage category={params.category} />
}
