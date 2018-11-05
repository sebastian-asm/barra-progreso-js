const btn = document.querySelector("button");
const barra1 = document.getElementById("barra1");
const p1 = document.getElementById("porciento1")

btn.addEventListener("click", progreso);

function progreso() {
    const int = setInterval(llenar, 15);
    barra1.value = 0;
    function llenar() {
        if (barra1.value >= 100) {
            clearInterval(int);
        } else {
            barra1.value++;
            p1.innerHTML = barra1.value * 1 + "%";
        }
    }    
}

const barra2 = document.getElementById("barra2");
const p2 = document.getElementById("porciento2");

setTimeout(() => {
    const int = setInterval(llenar, 15);
    barra2.value = 0;
    function llenar() {
        if (barra2.value >= 100) {
            clearInterval(int);
        } else {
            barra2.value++;
            p2.innerHTML = barra2.value * 1 + "%";
        }
    } 
}, 2000);