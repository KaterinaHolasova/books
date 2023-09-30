export enum Category {
  Crime = 'crime',
  Fantasy = 'fantasy',
  Fiction = 'fiction',
  Horror = 'horror',
  NonFiction = 'nonFiction',
  ScienceFiction = 'scienceFiction',
}

export enum CoverImage {
  Animal = 'animal.jpg',
  Beach = 'beach.jpg',
  City = 'city.jpg',
  Food = 'food.jpg',
  nature = 'nature.jpg',
}

export type Book = {
  _id: string
  author: string
  category: Category
  coverImage: CoverImage
  description?: string
  title: string
}
