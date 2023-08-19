import { ResponseListResult } from "./generics"

export type Author = {
  name: string,
  slug: string,
  image: string,
}

export type WritenContent = {
  title: string,
  slug: string,
  image: string,
  resume: string,
  pubDate: string,
  views: number,
  author: Author,
}

export type WritenContentListResult = ResponseListResult<WritenContent>