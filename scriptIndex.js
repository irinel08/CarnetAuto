    //1
    //FUNCTIE PENTRU MEIU
    var x = document.getElementById('nav2');
    var y = document.getElementById('poza_meniu');
    var ok = true;
    
    
    
    function myfunction() {
      if (ok) {
        x.style.animation = "animatie_open 1s 1";
        x.style.animationFillMode = "forwards";
        y.src = 'close_menu.jpg';
        ok = false;
      } else {
        x.style.animation = "animatie_close 1s 1";
        x.style.animationFillMode = "backwards";
        y.src = 'open_menu.jpg';
        ok = true;
      }
    };
    //11
    //FUNCTIE CARE FACE CA MENIUL ORIZONTAL SA DISPARA DACA ESTE VIZIBIL CAND REDIMENSIONAM LATIMEA PAGINII
    window.addEventListener('resize', function() {
      if (window.innerWidth > 1100) {
        x.style.animation = "animatie_close 0s 1";
        x.style.animationFillMode = "backwards";
        y.src = 'open_menu.jpg'; 
        ok = true;
      }
    });
    //FUNCTIE CARE FACE CA MENIUL ORIZONTAL SA DISPARA DACA ESTE VIZIBIL CAND REDIMENSIONAM LATIMEA PAGINII
    //FUNCTIE PENTRU MENIU
    
    
    
    //2
    //FUNCTIE CARE FACE CA TRECEREA DE LA UN LINK DIN PAGINA SA SE EFECTUEZE LIN
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    //FUNCTIE CARE FACE CA TRECEREA DE LA UN LINK DIN PAGINA SA SE EFECTUEZE LIN
    
    //3
    //SCHIMBA TITLUL PAGINII ATUNCI CAND USER-UL PARASESTE TAB-UL
       let docTitle = document.title;
       window.addEventListener("blur", ()=>{
           document.title = "Întoarce-te ;(";
       });
       window.addEventListener("focus", ()=>{
           document.title = docTitle;
       });
    //SCHIMBA TITLUL PAGINII ATUNCI CAND USER-UL PARASESTE TAB-UL
    
    //4
    //BUTON CARE REVINE LA INCEPUTUL PAGINII
       derulare.addEventListener("click", function() {
           document.documentElement.scrollIntoView({ behavior: "smooth" });
       });
    //BUTON CARE REVINE LA INCEPUTUL PAGINII
    
    
    //5
    //FUNCTIE CARE LA REFRESH TE DUCE LA INCEPUTUL PAGINII
           // Așteaptă ca pagina să se încarce complet
       document.addEventListener("DOMContentLoaded", function() {
         // Eveniment pentru reîmprospătarea paginii
         window.addEventListener("beforeunload", function() {
           // Muta pagina în partea de sus la reîmprospătare
           window.scrollTo(0, 0);
         });
       });
    //FUNCTIE CARE LA REFRESH TE DUCE LA INCEPUTUL PAGINII
     



    
    //6
    //FACE CA BUTONUL DE REVENIRE LA INCEPUTUL PAGINII SA FIE VIZIBIL DOAR DUPA CE SCROLAM 300PX
    // Adaugă un eveniment de scroll
    window.addEventListener('scroll', function() {
        // Obține poziția actuală a derulării
        var windowScroll = window.scrollY;
    
        // Obține elementul care va apărea
        var elementDeAparut = document.getElementById('derulare');
    
        // Verifică dacă s-a derulat suficient
        if (windowScroll > 300) {
          // Face elementul vizibil prin schimbarea opacității
          elementDeAparut.style.opacity = 1;
          elementDeAparut.style.transition = "0.5s";
        } else {
          // Păstrează elementul invizibil
          elementDeAparut.style.opacity = 0;
          elementDeAparut.style.transition = "0.5s";
        }
      });
    //FACE CA BUTONUL DE REVENIRE LA INCEPUTUL PAGINII SA FIE VIZIBIL DOAR DUPA CE SCROLAM 400PX
    
     

    //7
    // FUNCTIE CARE FACE CA TOATE ELEMENTELE SA FIE VIZIBILE DACA PARTE DE SUS A ELEMENTULUI ESTE VIZIBILA
    window.addEventListener('scroll', function() {
        // Obține toate elementele cu clasa "afisareSmooth"
        var allElements = document.querySelectorAll('.afisareSmooth');
    
        // Parcurge fiecare element
        allElements.forEach(function(element) {
            // Obține dimensiunile elementului
            var rect = element.getBoundingClientRect();
    
            // Verifică dacă partea de sus a elementului este vizibilă
            if (rect.top <= window.innerHeight) {
            // Face elementul vizibil prin schimbarea opacității
            element.style.opacity = 1;
            element.style.transition = "3s";
            }
        });
      });
    // FUNCTIE CARE FACE CA TOATE ELEMENTELE SA FIE VIZIBILE DACA PARTE DE SUS A ELEMENTULUI ESTE VIZIBILA
    

//9
// Selectează elementul paragrafului cu clasa containerMesajCentral pentru a schimba textul
var paragraf = document.querySelector('.containerMesajCentral1');


    

