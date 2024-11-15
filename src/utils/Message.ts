interface IformatMessageFromApi {
    error: any
}

export const getFirstErrorElementMessageFromApiResponse = (response: any) => {
    if (response.error) {
        const messages = Object.keys(response.error)

        return messages[0]
    }
    else if (response.response.data.error) {
        if(typeof response.response.data.error == "string")
            return response.response.data.error

        const firstMessage = Object.values(response.response.data.error)
        return firstMessage[0]
    }

    return "Erro interno"
}