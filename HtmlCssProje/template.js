// alert("Deneme")

let darkMode = () => {
    // alert("Dark mode")
    document.body.classList.toggle("dark_mode");
    $(".card-text").css('color', '#0d6efd');
    $(".card-title").css('color', 'black')
}

// input search
$(document).ready(function () {
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

//scrollspy 
$(document).ready(function () {
    $('body').scrollspy({
        target: '#listscroll'
    });
})
$(document).ready(function () {
    $('body').on('activate.bs.scrollspy', function () {
        var activeSection = $('#listscroll li.active a').attr('href');

        // Gerekirse ek eylemler gerçekleştirin
    });
})