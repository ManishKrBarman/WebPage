document.addEventListener("DOMContentLoaded", function () {
    const weather = document.getElementById("weather");
    const todo = document.getElementById("todo");
    const midiora = document.getElementById("midiora");
    const cudos = document.getElementById("cudos");
    const random = document.getElementById("random");

    weather.addEventListener("click", function () {
        window.open("https://manishkrbarman.github.io/WEATHER/", "_parent")
    })
    todo.addEventListener("click", function () {
        window.open("https://manishkrbarman.github.io/TO-DO/", "_parent")
    })
    midiora.addEventListener("click", function () {
        window.open("https://manishkrbarman.github.io/WebPage/", "_parent")
    })
    cudos.addEventListener("click", function () {
        window.open("https://manishkrbarman.github.io/CUDOS/", "_parent")
    })
    random.addEventListener("click", function () {
        window.open("https://replit.com/@ManishKrBarman/Random-Language", "_parent")
    })
});