function show() {
    let email = document.querySelector("input[id=email]").value
    let text = document.querySelector("textarea[id=text]").value
    let datenow = new Date()

    let img = document.createElement("img")
    let reply = document.createElement("p")
    let date = document.createElement("div")
    date.id = "date"
    reply.id = "reply"
    img.id = "img"
    img.src = "https://64.media.tumblr.com/ef180c7acfc76395677168bda90fa40c/tumblr_oufj0neheA1vy2tgqo2_400.jpg"
    date.innerText = datenow.getDate() + "/" + (datenow.getMonth() + 1) + "/" + datenow.getFullYear() + " " +
        datenow.getHours() + ":" + datenow.getMinutes() + ":" + datenow.getSeconds()

    reply.innerText = `${email} \n ${text} `
    document.getElementById("comment").appendChild(date)
    document.getElementById("comment").appendChild(img)
    document.getElementById("comment").appendChild(reply)
}