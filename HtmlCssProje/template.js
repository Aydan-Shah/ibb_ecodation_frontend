// alert("Deneme")

let darkMode = () => {
    // alert("Dark mode")
    document.body.classList.toggle("dark_mode")
}

// input search
$(document).ready(function() {
    const searchApi = ["Adana", "Balikesir", "Corum", "Denizli", "Van"];
    $("#tags").autocomplete({
        source: searchApi
    })
})


// footer js
let newDate = () => {
    document.getElementById("date_id").innerHTML = new Date().getFullYear();
}
newDate()