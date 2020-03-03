import { select, selectAll} from "./helpers/selectors"
import {createData, listenForEvent} from "./modules/data"
import { createRender } from "./modules/render"

const clearField = () => {
  const button = select("#clear-field");
  const input = select("#search");
  button.addEventListener("click", event => {
    event.preventDefault();
    input.value = "";
  });
};

const toggleFilters = () => {
    const toggleButton = select("#toggle-filter")
    const filterContainer = select(".container-filter")
    toggleButton.addEventListener("click", event => {
        event.preventDefault()
        filterContainer.classList.toggle("active")
    })
}

const makeFormStick = () => {
    window.onscroll = function () { addStick() };
    const form = select("form");
    const formDOM = form.getBoundingClientRect();
    const sticky = form.offsetTop
    const main = select("main");
    function addStick() {
        if (window.pageYOffset >= sticky) {
            main.style.marginTop = `${formDOM.height}px`
            form.classList.add("sticky")
        } else {
            main.style.marginTop = `0px`;
            form.classList.remove("sticky");
        }
    }
    ;
       
}

const app = async () => {
    const data = createData();
    const render = createRender();
    const input = select('#search');
    const form = select("form");
    makeFormStick()
    clearField();
    toggleFilters();

    form.addEventListener("submit", async event => {
        event.preventDefault();
    }
    )
    form.addEventListener("input", async event => {
        event.preventDefault();
        select(".loading-state").classList.add("loading")

        if(input.value.length == 0 || input.value == undefined) {
            setTimeout(()=> {
                const articles = selectAll("article")
                articles.forEach((item, i) => {
                    item.remove()
                })
            }, 1000)
            
        } else {
            let items = await data.getData(input.value);
            const articles = selectAll("article");

            articles.forEach((item, i) => {
              item.remove();
            });
            select(".loading-state").classList.remove("loading");
            render.renderOverview(items)
        }
    });
    
}



app()

