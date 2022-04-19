export const fetchCharacters = (url: string) => {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Error while loading characters from Rick and Morty API!")
            }
        })
}
