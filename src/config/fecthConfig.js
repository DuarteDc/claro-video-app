export const fetchConfig = async (endpoint, method = 'GET') => {

    const response = await fetch(endpoint, {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await response.json();

}