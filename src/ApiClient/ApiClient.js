
var base = 'https://api.github.com/search/repositories?q=trending&sort=stars&order=desc'


export const callApi = async () => {
    var finalResponse;
    await fetch(base, { 
        method: 'get'
    })
    .then((response) => response.json())
    .then((responseData) => {
        finalResponse=responseData;
    })
    .catch((error) => {
        //console.warn(error);
    });
    return await finalResponse;
}
