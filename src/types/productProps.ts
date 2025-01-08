// Type definitions for the products
export interface ProductProps {
  id: number
  documentId: string
  productName: string
  slug: string
  description: string
  active: boolean
  price: number
  stock: number
  availability: string
  orderStatus: null | string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  isFeature: boolean
  productCategory: null | string
  topVentas: boolean
  images: ProductImageProps[]
}

// Type definitions for the product images
export interface ProductImageProps {
  id: number
  documentId: string
  name: string
  alternativeText: null | string
  caption: null | string
  width: null | number
  height: null | number
  formats: null | object
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null | string
  provider: string
  provider_metadata: null | object
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

// Type definitions for the products state
export interface ProductsStateProps {
  kidsProducts: ProductProps[]
  menProducts: ProductProps[]
  womenProducts: ProductProps[]
  allProducts: ProductProps[]
}

// Base type for any product list
export interface ProductListProps {
  products: ProductProps[]
}

// Type definitions for the new arrivals list
export interface NewArrivalsProps {
  newArrivals: ProductProps[]
}

// Type definitions for the top sales list
export interface TopSalesProps {
  topSales: ProductProps[]
}