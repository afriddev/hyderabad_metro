const baseUrl = "https://hyderabadmetroapi1-gn8j6tzm.b4a.run"

export async function getAllStationsAPI(){
    const server = await fetch(baseUrl+"/api/allstations")
    const response = await server.json()
    return response
}