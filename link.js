document.addEventListener("DOMContentLoaded", function () {
    const github = document.getElementById("github")
    const insta = document.getElementById("insta")
    const linkedin = document.getElementById("linkedin")
    const playstore = document.getElementById("playstore")
    const youtube = document.getElementById("youtube")
    const twitter = document.getElementById("twitter")

    github.addEventListener("click", function () {
        window.open("https://github.com/ManishKrBarman/", "_blank")
    })
    insta.addEventListener("click", function () {
        window.open("https://www.instagram.com/manishkumarbarman_1/", "_blank")
    })
    linkedin.addEventListener("click", function () {
        window.open("https://www.linkedin.com/in/manishkrbarman/", "_blank")
    })
    playstore.addEventListener("click", function () {
        window.open("https://play.google.com/store/apps/dev?id=5792144858575749880", "_blank")
    })
    youtube.addEventListener("click", function () {
        window.open("https://www.youtube.com/@midiora", "_blank")
    })
    twitter.addEventListener("click", function () {
        window.open("https://x.com/ManishKrBarman", "_blank")
    })
})