function handleRequest(req) {
    const url = new URL(req.url)
    const params = new URLSearchParams(url.search)
    if (params.get('go-get') == "1") {
        return fetch("https://gopkg.co" + url.pathname + "?go-get=1")
    } else {
        return fetch(req) 
    }
}

addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
})
