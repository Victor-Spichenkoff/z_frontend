interface IformatMessageFromApi {
    error: any
}

export const getFirstErrorElementMessageFromApiResponse = (response: any) => {
    if (response.error) {
        const messages = Object.keys(response.error)

        return messages[0]
    }
    else if (response.response.data) {

        return response.response.data.error
    }

    return "Erro interno"
}