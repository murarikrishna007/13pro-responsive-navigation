console.log("hello");

const toggleBtn = document.getElementsByClassName("toggle-btn")[0]
        const navmenu = document.getElementsByClassName("nav-menu")[0]


        toggleBtn.addEventListener("click", () => {
            navmenu.classList.toggle("active");
        })  