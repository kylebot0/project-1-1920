import { select, selectAll } from "../helpers/selectors";

const createRender = () => {
        const h1 = select('h1');

        return {
            renderOverview: data => {
                    const results = data.results;

                    results.forEach((item, i) => {
                                if (item.coverimages.length === 1) {
                                    item.coverimages.push(item.coverimages[0])
                                }
                                const html = `
            <article>
              <h2>${item.titles[0]}</h2>
              <p>${item.summaries ? item.summaries[0] : "Geen samenvatting"}</p>
              
                ${item.coverimages !== undefined ? `<img src="${item.coverimages[1]}">` : null}
              
              <button href="${item.detailLink}">Meer info</button>
            </article>
          `;
                h1.insertAdjacentHTML("afterend", html);
            });
        },
        renderRecommendations: data => {

        }
    };
};

export { createRender };