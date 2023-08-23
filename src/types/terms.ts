export type TermPart = {
  id: number,
  title: string,
  order: number,
  link: string,
  content: string,
}

export type Term = {
  id: number,
  title: string,
  slug: string,
  link: string,
  resume: string,
  published_at: string,
  current_status: string,
  image: string,
  category: string,
  tags: string[],
  term_parts: TermPart[],
}