import { select, selectAll } from "./helpers/selectors";
import { createData, listenForEvent } from "./modules/data";
import { createRender } from "./modules/render";
import { createStorage } from "./modules/localStorage"

let state = {
    pageNumber: 1,
    buttonActive: false,
    profile: {
        gender: false,
        year: false,
        place: false,
        genre: false,
        author: false,
        language: false,
        inputValues: {
            genre: '',
            author: '',
            language: ''
        }
    }
};
const data = createData();
const render = createRender();
const storage = createStorage();

const clearField = () => {
    const button = select("#clear-field");
    const input = select("#search");
    button.addEventListener("click", event => {
        event.preventDefault();
        input.value = "";
    });
};

const toggleFilters = () => {
    const toggleButton = select("#toggle-filter");
    const filterContainer = select(".container-filter");
    toggleButton.addEventListener("click", event => {
        event.preventDefault();
        filterContainer.classList.toggle("active");
    });
};

const makeFormStick = () => {
    window.onscroll = function() {
        addStick();
    };
    const form = select("form");
    const formDOM = form.getBoundingClientRect();
    const sticky = form.offsetTop;
    const main = select("main");

    function addStick() {
        if (window.pageYOffset >= sticky) {
            main.style.marginTop = `${formDOM.height}px`;
            form.classList.add("sticky");
        } else {
            main.style.marginTop = `0px`;
            form.classList.remove("sticky");
        }
    }
};

const pages = (inputVal, items) => {
    const totalPageCount = Math.floor(items.meta["result-count"] / 20);
    const next = select("#page-next");
    const previous = select("#page-previous");
    //   toggleButtons()
    next.addEventListener("click", async event => {
        event.preventDefault();
        toggleButtons()
        state.pageNumber =
            state.pageNumber > totalPageCount ? state.pageNumber : state.pageNumber + 1;
        removeArticles();
        select(".loading-state").classList.add("loading");
        const pageData = await data.getPageData(inputVal, state.pageNumber)
        select(".loading-state").classList.remove("loading");
        render.renderOverview(pageData);
        toggleButtons();
    });
    previous.addEventListener("click", async event => {
        event.preventDefault();
        toggleButtons()
        state.pageNumber =
            state.pageNumber > 1 ? state.pageNumber - 1 : state.pageNumber;
        removeArticles();
        select(".loading-state").classList.add("loading");
        const pageData = await data.getPageData(inputVal, state.pageNumber);
        select(".loading-state").classList.remove("loading");
        render.renderOverview(pageData);
        toggleButtons();
    });
};

const removeArticles = () => {
    const articles = selectAll("main article");
    console.log(articles)
    articles.forEach((item, i) => {
        item.remove();
    });
}

const toggleButtons = () => {
    const next = select("#page-next");
    const previous = select("#page-previous");
    next.classList.toggle("button-active")
    previous.classList.toggle("button-active")
};
const toggleModal = () => {
    const modal = select("#modal-profile")
    const button = select(".profile")
    const span = select(".close")
    button.addEventListener("click", () => {
        modal.style.display = "block"
    })
    span.addEventListener("click", () => {
        modal.style.display = "none"
    })
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

const setProfileSettings = () => {
    const inputSwitches = selectAll(".switch input")
    inputSwitches.forEach((item, i) => {
        item.addEventListener("click", function() {
            let isChecked = this.checked
            let thisId = this.id;
            Object.keys(state.profile).forEach((option) => {
                if (option == thisId && isChecked) {
                    state.profile[option] = true;
                    console.log(state.profile)
                } else if (option == thisId && !isChecked) {
                    state.profile[option] = false;
                    console.log(state.profile)
                }
            })
        })
    })
}
const setProfileValues = () => {
    const inputSwitches = selectAll(".modal-body article>input")
    inputSwitches.forEach((input, i) => {
        input.addEventListener("input", function() {
            let val = this.value
            let thisId = this.classList.value
            console.log(thisId)
            Object.keys(state.profile).forEach((option) => {
                if (option == thisId) {
                    state.profile[option] = val;
                    console.log(state.profile)
                } else {
                    return;
                }
            })
        })
    })
}

const app = async() => {
    const input = select("#search");
    const form = select("form");
    makeFormStick();
    clearField();
    toggleFilters();
    toggleModal()
    setProfileSettings()
    setProfileValues()
    form.addEventListener("submit", async event => {
        event.preventDefault();
    });
    form.addEventListener("input", async event => {
        event.preventDefault();
        select("main > div > h1").textContent = "Zoekresultaten:"
        removeArticles()
        state.pageNumber = 1;
        state.buttonActive = false
        select(".loading-state").classList.add("loading");

        if (input.value.length == 0 || input.value == undefined) {
            setTimeout(() => {

                removeArticles()
            }, 1000);
        } else {
            const items = await data.getData(input.value);
            toggleButtons()
            pages(input.value, items);
            removeArticles()
            select(".loading-state").classList.remove("loading");
            render.renderOverview(items);
        }
    });
};

app();