document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('hidden');
    if (document.getElementById('sidebar').classList.contains('hidden')) {
        document.body.style.gridTemplateColumns = '0 1fr';
    } else {
        document.body.style.gridTemplateColumns = '250px 1fr';
    }
});

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
    loadContent("./html/form.html")
}

// Sales
document.getElementById("sales").onclick = function () {
    loadContent("./html/dashboard.html")
}