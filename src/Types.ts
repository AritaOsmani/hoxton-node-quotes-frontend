export type Quote = {
    id: number
    content: string

    firstName: string
    lastName: string
    born: number
    death?: number
    image: string,
    bio: string

}

export type FormType = HTMLFormElement & {
    search: HTMLInputElement
    reset: () => void
}

export type AddForm = HTMLFormElement & {
    firstName: HTMLInputElement
    lastName: HTMLInputElement
    bornYear: HTMLInputElement
    deathYear: HTMLInputElement
    imgURL: HTMLInputElement
    content: HTMLTextAreaElement
    author_bio: HTMLTextAreaElement
    reset: () => void
}