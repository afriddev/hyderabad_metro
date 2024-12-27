export async function getAllStationsAPI(){
    const server = await fetch("https://hyderabadmetroapi1-gn8j6tzm.b4a.run/api/allstations")
    const response = await server.json()
    return response
}