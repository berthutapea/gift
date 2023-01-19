const rekening = document.querySelector("#rekening");
const rekeningBank = document.querySelector("#rekening-bank");
const kado = document.querySelector("#kado");
const kadoContainer = document.querySelector("#kado-container");
const closeButton = document.querySelector("#close-button");
const salin1 = document.querySelector("#salin-1");
const salin2 = document.querySelector("#salin-2");
const salin3 = document.querySelector("#salin-3");
const copy1Button = document.querySelector("#copy1-button");
const copy2Button = document.querySelector("#copy2-button");
const copy3Button = document.querySelector("#copy3-button");
const rekeningBankCloseButton = document.querySelector("#rekening-bank .close button");
const kadoContainerCloseButton = document.querySelector("#kado-container .close button");

rekening.addEventListener("click", () => {
    rekeningBank.style.display = "block";
    kadoContainer.style.display = "none";
});

kado.addEventListener("click", () => {
    kadoContainer.style.display = "block";
    rekeningBank.style.display = "none";
});

//close button
closeButton.addEventListener("click", () => {
    rekeningBank.style.display = "none";
    kadoContainer.style.display = "none";
});

rekeningBankCloseButton.addEventListener("click", () => {
    rekeningBank.style.display = "none";
});

kadoContainerCloseButton.addEventListener("click", () => {
    kadoContainer.style.display = "none";
});

//Ketika di Refresh maka akan kembali semula
if (getCookie("rekening-bank") === "hidden") {
    rekeningBank.style.display = "none";
}
if (getCookie("kado-container") === "hidden") {
    kadoContainer.style.display = "none";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
window.addEventListener("beforeunload", function () {
    setCookie("rekening-bank", "hidden", 1);
});
window.addEventListener("beforeunload", function () {
    setCookie("kado-container", "hidden", 1);
});

//Salin Di Div Span
copy1Button.addEventListener("click", () => {
    navigator.clipboard.writeText(salin1.innerText).then(function () {
        console.log("Text copied to clipboard");
    }, function (err) {
        console.error("Could not copy text: ", err);
    });
    copy1Button.innerHTML = "Berhasil Disalin"; //notifikasi
    setTimeout(() => {
        copy1Button.innerHTML = "<i class='fas fa-copy'></i> Salin Rekening";
    }, 3000); //waktu notifikasi
});

//Salin Di Div Span
copy2Button.addEventListener("click", () => {
    navigator.clipboard.writeText(salin2.innerText).then(function () {
        console.log("Text copied to clipboard");
    }, function (err) {
        console.error("Could not copy text: ", err);
    });
    copy2Button.innerHTML = "Berhasil Disalin"; //notifikasi
    setTimeout(() => {
        copy2Button.innerHTML = "<i class='fas fa-copy'></i> Salin Rekening";
    }, 3000); //waktu notifikasi
});

//Salin Di Div Span
copy3Button.addEventListener("click", () => {
    navigator.clipboard.writeText(salin3.innerText).then(function () {
        console.log("Text copied to clipboard");
    }, function (err) {
        console.error("Could not copy text: ", err);
    });
    copy3Button.innerHTML = "Berhasil Disalin"; //notifikasi
    setTimeout(() => {
        copy3Button.innerHTML = "<i class='fas fa-copy'></i> Salin Rekening";
    }, 3000); //waktu notifikasi
});