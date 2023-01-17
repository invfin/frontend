export class Tag {
  id: number
  title: string
  url: string

  constructor(id: number, title: string, url: string) {
    this.id = id
    this.title = title
    this.url = url
  }
}

export class Author {
  name: string
  url: string
  image: string

  constructor(name: string, url: string, image: string) {
    this.name = name
    this.url = url
    this.image = image
  }
}

export class TextContent {
  title: string
  tags: Array<Tag>
  url: string
  resume: string
  author: Author
  image: string

  constructor(
    title: string,
    tags: Array<Tag>,
    url: string,
    resume: string,
    author: Author,
    image: string
  ) {
    this.title = title
    this.tags = tags
    this.url = url
    this.resume = resume
    this.author = author
    this.image = image
  }
}
