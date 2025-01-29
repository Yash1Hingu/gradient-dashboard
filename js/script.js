if(window.innerWidth <= 512){
    document.getElementById('sidebar').classList.add('hidden');
}

function toggleMenu(){
    document.getElementById('sidebar').classList.toggle('hidden');
    if (document.getElementById('sidebar').classList.contains('hidden')) {
        document.body.style.gridTemplateColumns = '0 1fr';
    } else {
        if(window.innerWidth <= 512){
            document.body.style.gridTemplateColumns = '400px 1fr';
        } else {
            document.body.style.gridTemplateColumns = '250px 1fr';
        }
    }
}

document.getElementById('menu-toggle').addEventListener('click', toggleMenu);

document.querySelector('.dashboard-toggle').addEventListener('click', function () {
    const subMenu = this.nextElementSibling;
    subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
});

const contentBody = document.getElementById("content-body");

// Content Change Based on link
function loadContent(fileName) {
    req = new XMLHttpRequest();
    req.open("GET", fileName, false);
    req.send(null);

    contentBody.innerHTML = req.responseText;
};

// Form Validation
document.getElementById("form-link").onclick = function () {
    if(screen.width <= 512){
        toggleMenu();
    }
    loadContent("./html/form.html")
}

// Sales
document.getElementById("sales").onclick = function () {
    if(screen.width <= 512){
        toggleMenu();
    }
    loadContent("./html/dashboard.html")
}


// // sub-menu
// document.getElementsByClassName("sub-menu")[0].childNodes.forEach(node => {
//     console.log(node)
// })