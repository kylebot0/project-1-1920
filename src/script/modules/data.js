import { select } from "../helpers/selectors";

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

const createData = () => {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const key = '1e19898c87464e239192c8bfe422f280';
    const secret = '4289fec4e962a33118340c888699438d';
    const detail = 'Default';


    const config = {
        Authorization: `Bearer ${secret}`
    };

    return {
        getData: async(query) => {
            let url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json&refine=true`;
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
        getPageData: async(query, pageNumber) => {
            let page = pageNumber
            let url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json&page=${page}`;
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
        getRecommendationData: async(query) => {
            let data = await fetch("./src/loans.json")
                .then(res => {
                    return res.json()
                })
            return data
        },
        getSingleData: async(recommendations) => {
            let data = []
            await asyncForEach(recommendations, async(item, i) => {
                let url = `${cors}${endpoint}${item.titel}&authorization=${key}&detaillevel=${detail}&output=json&refine=true&pagesize=1`;
                let fetched = await fetch(url, config)
                    .then(response => {
                        return response.json();
                    })
                    .catch(err => {
                        console.log(err);
                    });
                data.push(fetched.results[0])
            })
            console.log(data)
            return data;
        }
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



export { createData };