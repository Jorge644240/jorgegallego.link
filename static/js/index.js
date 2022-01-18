document.querySelector("#year").innerText = new Date().getFullYear();

document.querySelectorAll("ul li").forEach(li => {
    li.addEventListener("click", () => {
        li.children[li.children.length-1].click();
    });
});