import { select, selectAll } from "../helpers/selectors";

const createRender = () => {
  const h1 = select('h1');

  return {
    renderOverview: data => {
      const results = data.results;
      
      results.forEach((item, i) => {
        const html = `
            <article>
              <h2>${item.titles[0]}</h2>
              <p>${item.summaries ? item.summaries[0] : "Geen samenvatting"}</p>
              <img src="${
                item.coverimages ? item.coverimages[1] : "Geen samenvatting"
              }">
              <button href="${item.detailLink}">Meer info</button>
            </article>
          `;
        h1.insertAdjacentHTML("afterend", html);
      });
    }
  };
};

export { createRender };
