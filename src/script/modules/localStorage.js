const createStorage = function() {

    return {
        getItem: function() {
            if (!window.localStorage.preferences) {
                return false
            } else if (window.localStorage.preferences) {
                let parsed = JSON.parse(window.localStorage.getItem("preferences"));
                return parsed;
            }
        },
        setItem: function(data) {
            console.log(data)
            return window.localStorage.setItem("preferences", JSON.stringify(data))
        },
        removeItem: function() {

        },
        clear: function() {

        }
    }
}

export { createStorage };