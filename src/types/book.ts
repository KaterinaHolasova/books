export enum CoverImage {
  Animal = 'animal.jpg',
  City = 'city.jpg',
  Food = 'food.jpg',
  nature = 'nature.jpg',
}

export type Book = {
  _id: string
  author: string
  coverImage: CoverImage
  description?: string
  title: string
}
