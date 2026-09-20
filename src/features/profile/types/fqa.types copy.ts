export type FQAResponse = {
    status: boolean,
    message: string,
    data: FqaData[]
}

export type FqaData = {
    id: number,
    question: string,
    answer: string
}

