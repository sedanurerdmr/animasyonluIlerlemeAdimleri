/* Bu kod, bir HTML belgesi içindeki belirli öğeleri kullanarak
    bir ilerleme göstergesi oluşturan ve bu göstergenin 
    üzerindeki daireleri ilerlemenize göre etkin veya etkin 
    olmayan hale getiren basit bir JavaScript uygulamasını
    tanımlar.
*/

const progress = document.getElementById("progress"); //bu öğe, ilerleme çubuğunu temsil eder
const circles = document.querySelectorAll(".circle"); //dairesel adımları temsil eder
const prev = document.getElementById("prev"); // geri almayı
const next = document.getElementById("next"); // ilerlemeyi temsil eder

let currentActive = 1;

next.addEventListener("click", () => {  //next butonuna dinleyici eklenir
    currentActive ++;

    if(currentActive > circles.length){
        currentActive = circles.length;
    }

    update();
});

prev.addEventListener("click", () =>{
    currentActive --;

    if(currentActive < 1){
        currentActive = 1;
    }

    update();
});

function update(){
    circles.forEach((circle , index) => {
        if(index < currentActive){
            circle.classList.add("active");
        }else(
            circle.classList.remove("active")
        )
    })
    const active = document.querySelectorAll(".active");

    // console.log(active.length, circles.length)
    // console.log(active.length/circles.length)
    // console.log((active.length-1)/(circles.length-1)*100 + "%");
    progress.style.width = ((active.length-1)/(circles.length-1)*100 + "%");
    /* 
    prev ve next düğmelerinin etkinlik durumları kontrol edilir.
     Eğer currentActive 1 ise, "prev" düğmesi devre dışı bırakılır. 
     Eğer currentActive dairesel adımların toplam sayısına ulaşırsa,
     "next" düğmesi devre dışı bırakılır. Aksi takdirde, her iki
     düğme de etkin olur.*/
    if(currentActive == 1){
        prev.disabled = true;
    } else if(currentActive === circles.length){
        next.disabled == true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}
