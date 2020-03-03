import { select } from "../helpers/selectors";

const createData =  () => {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const key = '1e19898c87464e239192c8bfe422f280';
    const secret = '4289fec4e962a33118340c888699438d';
    const detail = 'Default';
    

    const config = {
        Authorization: `Bearer ${secret}`
    };

    return {
        getData: async (query) => {
            let url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
            let data = await fetch(url, config)
                .then(response => {                
                    return response.json();
                })
                .catch(err => {
                    console.log(err);
                });
            console.log(data)
                return data;
        },
        getLoanData:  () => {
        },
        
        
    }
}

// const listenForEvent = () => {
//         const input = select('#search');
//         const form = select("form");

//         form.addEventListener("submit", event => {
//             event.preventDefault();
//             createData.getData(input.value);
//         });
// }



export { createData};