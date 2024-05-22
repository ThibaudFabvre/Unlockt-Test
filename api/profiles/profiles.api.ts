
export const getProfiles = async () => {
    try {
        const result = (await fetch('http://localhost:3000/profiles')).json();
        return result
    } catch(e){
        throw e
    }
}