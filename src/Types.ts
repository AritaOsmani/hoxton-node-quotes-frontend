export type Quote = {
    id: number
    content: string
    author: {
        firstName: string
        lastName: string
        born: number
        death?: number
        image: string
    }
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
    reset: () => void
}