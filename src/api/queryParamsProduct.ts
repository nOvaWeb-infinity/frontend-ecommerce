import { QueryParamsProductProps } from "@/types/"

export const newArrivalsParams: QueryParamsProductProps = {
  filters: {
    isFeature: { $eq: true },
  },
  pagination: {
    limit: 8,
  },
  populate: "images",
}

export const topSalesParams: QueryParamsProductProps = {
  filters: {
    topVentas: { $eq: true },
  },
  pagination: {
    limit: 3,
  },
  populate: "images",
}

export const kidsProductsParams: QueryParamsProductProps = {
  filters: {
    productCategory: "Niño",
  },
  populate: "images",
}

export const menProductsParams: QueryParamsProductProps = {
  filters: {
    productCategory: "Hombre",
  },
  populate: "images",
}

export const womenProductsParams: QueryParamsProductProps = {
  filters: {
    productCategory: "Mujer",
  },
  populate: "images",
}
