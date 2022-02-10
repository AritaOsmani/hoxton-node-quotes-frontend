export type Quote = {
    id: number
    content: string
    author: string
}

export type FormType = HTMLFormElement & {
    search: HTMLInputElement
    reset: () => void
}
