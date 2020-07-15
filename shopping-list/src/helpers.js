export const helpers = {
    fetchAPI : (callback) => {
        fetch('https://www.aesop.com/au/api/v1/nav/shop')
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => alert(error))
    }
}