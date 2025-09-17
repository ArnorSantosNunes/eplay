declare interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

declare type Game = {
  description: string
  id: number
  name: string
  descriptio: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}
