export const useRequest = () => {
    return async (url, method, body) => {
        try {
            const response =  await fetch(`http://localhost:3002/api/todos/${url}`, {
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...body
                })
            })
            if (response.status !== 200) {
                const json = await response.json()
                alert(json.message)
            }
        } catch (e) {
            console.log(e)
        }
    }
}