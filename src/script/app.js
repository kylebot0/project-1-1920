import { select, selectAll } from "./helpers/selectors"
import { createData, listenForEvent } from "./modules/data"
import { createRender } from "./modules/render"
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
}
const data = createData()
const render = createRender()
const storage = createStorage()

const clearField = () => {
    const button = select("#clear-field")
    const input = select("#search")
    button.addEventListener("click", event => {
        event.preventDefault()
        input.value = ""
    })
}

const toggleFilters = () => {
    const toggleButton = select("#toggle-filter")
    const filterContainer = select(".container-filter")
    toggleButton.addEventListener("click", event => {
        event.preventDefault()
        filterContainer.classList.toggle("active")
    })
}

const makeFormStick = () => {
    window.onscroll = function() {
        addStick()
    }
    const form = select("form")
    const formDOM = form.getBoundingClientRect()
    const sticky = form.offsetTop
    const main = select("main")

    function addStick() {
        if (window.pageYOffset >= sticky) {
            main.style.marginTop = `${formDOM.height}px`
            form.classList.add("sticky")
        } else {
            main.style.marginTop = `0px`
            form.classList.remove("sticky")
        }
    }
}

const pages = (inputVal, items) => {
    const totalPageCount = Math.floor(items.meta["result-count"] / 20)
    const next = select("#page-next")
    const previous = select("#page-previous")
        //   toggleButtons()
    next.addEventListener("click", async event => {
        event.preventDefault()
        toggleButtons()
        state.pageNumber =
            state.pageNumber > totalPageCount ? state.pageNumber : state.pageNumber + 1
        removeArticles()
        select(".loading-state").classList.add("loading")
        const pageData = await data.getPageData(inputVal, state.pageNumber)
        select(".loading-state").classList.remove("loading")
        render.renderOverview(pageData)
        toggleButtons()
    })
    previous.addEventListener("click", async event => {
        event.preventDefault()
        toggleButtons()
        state.pageNumber =
            state.pageNumber > 1 ? state.pageNumber - 1 : state.pageNumber
        removeArticles()
        select(".loading-state").classList.add("loading")
        const pageData = await data.getPageData(inputVal, state.pageNumber)
        select(".loading-state").classList.remove("loading")
        render.renderOverview(pageData)
        toggleButtons()
    })
}

const removeArticles = () => {
    const articles = selectAll("main article")
    console.log(articles)
    articles.forEach((item, i) => {
        item.remove()
    })
}

const toggleButtons = () => {
    const next = select("#page-next")
    const previous = select("#page-previous")
    next.classList.toggle("button-active")
    previous.classList.toggle("button-active")
}
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
            modal.style.display = "none"
        }
    }
}

const setProfileSettings = () => {
    const inputSwitches = selectAll(".switch input")
    inputSwitches.forEach((item, i) => {
        let storageItems = storage.getItem()
        if (storageItems) {
            Object.keys(storageItems.profile).forEach((storageItem, itemIndex) => {
                if (storageItem == item.id) {
                    item.checked = storageItems.profile[storageItem]
                    state.profile[storageItem] = storageItems.profile[storageItem]
                }
            })
        }
        item.addEventListener("click", function() {
            searchRecommendations()
            let isChecked = this.checked
            let thisId = this.id
            Object.keys(state.profile).forEach((option) => {
                if (option == thisId && isChecked) {
                    state.profile[option] = true
                    storage.setItem(state)
                    console.log(state.profile)
                } else if (option == thisId && !isChecked) {
                    state.profile[option] = false
                    storage.setItem(state)
                    console.log(state.profile)
                }
            })
        })
    })
}
const setProfileValues = () => {
    const inputSwitches = selectAll(".modal-body article>input")
    inputSwitches.forEach((input, i) => {
        let storageItems = storage.getItem()
        if (storageItems) {
            Object.keys(storageItems.profile.inputValues).forEach((storageItem, itemIndex) => {
                if (storageItem == input.classList.value) {
                    input.value = storageItems.profile.inputValues[storageItem]
                }
            })
        }
        input.addEventListener("input", function() {
            searchRecommendations()
            let val = this.value
            let thisId = this.classList.value
            Object.keys(state.profile).forEach((option) => {
                if (option == thisId) {
                    console.log(state.profile.inputValues[option])
                    state.profile.inputValues[option] = val
                    storage.setItem(state)

                } else {
                    return
                }
            })
        })
    })
}

const searchRecommendations = async() => {
    const container = select("aside")
    const inputSwitches = selectAll(".switch input")
    const inputValues = selectAll(".modal-body article>input")
    select(".recommendations-container h2").textContent = ""
    select(".lds-recommendations").classList.toggle("loading")

    let options = []
    inputSwitches.forEach((input, i) => {
        if (input.checked) {
            inputValues.forEach((inputValue) => {
                if (input.id == inputValue.classList.value) {
                    let category = inputValue.classList.value
                    let val = inputValue.value
                    let obj = {}
                    if (category == "genre") {
                        obj = { category: val }
                    } else if (category == "author") {
                        obj = { author: val }
                    } else if (category == "language") {
                        obj = { language: val }
                    }
                    options.push(obj)
                }
            })
        }
    })
    let loans = []
    if (loans.length == 0) {
        loans = await data.getRecommendationData()
    }
    // let loansGenre = loans.map(item => {
    //     return item.genre
    // })
    // console.log(loansGenre)
    const div = selectAll(".recommendations")
    div.forEach((item, i) => {
        item.remove()
    })

    if (options.length == 0) {
        select(".lds-recommendations").classList.toggle("loading")
        select(".recommendations-container h2").textContent = "Geen resultaten"
    } else {
        console.log(options)
        let filtered = []
        filtered = loans.filter((item, i) => {
            return item.genre == options[0].category
        })
        console.log(filtered)
        if (options.length >= 2) {
            let filteredLang = filtered.filter((item, i) => {

                return item.taal == options[1].language
            })
            filtered = filteredLang
        }

        console.log(filtered)
        if (filtered.length == 0) {
            select(".recommendations-container h2").textContent = "Geen resultaten"
            select(".lds-recommendations").classList.toggle("loading")
        } else {
            select(".recommendations-container h2").textContent = ""
            filtered = filtered.slice(0, 10)
            let recommendations = await data.getSingleData(filtered)
            select(".lds-recommendations").classList.toggle("loading")
            render.renderRecommendations(recommendations)
        }
    }
}

const app = async() => {
    const input = select("#search")
    const form = select("form")
    makeFormStick()
    clearField()
    toggleFilters()
    toggleModal()
    setProfileSettings()
    setProfileValues()
    searchRecommendations()
    form.addEventListener("submit", async event => {
        event.preventDefault()
    })
    form.addEventListener("input", async event => {
        event.preventDefault()
        select("main > div > h1").textContent = "Zoekresultaten:"
        removeArticles()
        state.pageNumber = 1
        state.buttonActive = false
        select(".loading-state").classList.add("loading")

        if (input.value.length == 0 || input.value == undefined) {
            setTimeout(() => {
                select("main > div > h1").textContent = "0 resultaten"
                removeArticles()
                select(".loading-state").classList.remove("loading")
            }, 1000)
        } else {
            let toggle = true
            if (toggle) {
                toggle = false
                const items = await data.getData(input.value)
                toggle = true
                console.log(items)
                items.results.reverse()
                toggleButtons()
                pages(input.value, items)
                removeArticles()
                select(".loading-state").classList.remove("loading")
                render.renderOverview(items)
            }

        }
    })
}

app()