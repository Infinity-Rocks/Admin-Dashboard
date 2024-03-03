const showBtns = document.getElementsByClassName("show");
const shareBtns = document.getElementsByClassName("share");
const starBtns = document.getElementsByClassName("star");
const githubBtns = document.getElementsByClassName("github");

githubLinks = [
    'https://github.com/Infinity-Rocks/Etch-A-Sketch',
    'https://github.com/Infinity-Rocks/Web-Calculator',
    'https://github.com/Infinity-Rocks/sign-up-form',
    'https://github.com/Infinity-Rocks/javascript-rps',
    'https://github.com/Infinity-Rocks/flexbox-project',
    'https://github.com/Infinity-Rocks/odin-recipes'
];

let popup = document.createElement('div');
popup.classList = "popup";
popup.textContent = "Link Copied!!";
document.body.appendChild(popup);

for (let i = 0; i < showBtns.length; i++) {
    showBtns[i].addEventListener("click", () => {
        const card = document.getElementsByClassName("card")[i];
        if (card.style.opacity == 0.5) {
            card.style.opacity = 1;
        }
        else {
            card.style.opacity = 0.5;
        }
    });

    shareBtns[i].addEventListener("click", () => {
        navigator.clipboard.writeText(githubLinks[i]);
        const buttonRect = shareBtns[i].getBoundingClientRect();
        const buttonTop = buttonRect.bottom + window.scrollY;
        const buttonLeft = buttonRect.left + window.scrollX;


        popup.style.top = buttonTop + 'px';
        popup.style.left = buttonLeft + 'px';

        popup.style.display = 'block';

        setTimeout(function () {
            popup.style.display = 'none';
        }, 2000);
    });

    starBtns[i].addEventListener("click", () => {
        let imgSrc = starBtns[i].children[0].src;
        let fileName = imgSrc.slice(29);
        console.log(fileName);
        if (fileName == "Star.svg") {
            console.log("1");
            starBtns[i].children[0].src = "./assets/Star-Filled.svg";
        }
        else {
            console.log("2");
            starBtns[i].children[0].src = "assets/Star.svg";
        }
    });

    githubBtns[i].addEventListener("click", () => {
        window.open(githubLinks[i]);
    });
}