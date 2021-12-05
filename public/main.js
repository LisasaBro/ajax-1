addCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const style = document.createElement("style")
            style.innerHTML = request.response
            document.head.appendChild(style)
        }
    }
    request.send()
}
addJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const js = document.createElement("script")
            js.innerHTML = request.response
            document.body.appendChild(js)
        }
    }
    request.send()
}
addHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/index2.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const div = document.createElement("div")
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}
addXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const test = dom.getElementsByTagName("warning")[0].textContent
            alert(test.trim())
        }
    }
    request.send()
}
addJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)
            addObject.textContent = object.hobbies
        }
    }
    request.send()
}