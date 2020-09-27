
const like1 = parseInt(document.querySelector("#recap").innerText);
const user1 = parseInt(document.querySelector("#user").innerText);

const buttonLike = document.querySelector("#like");

buttonLike.addEventListener('click', function(event) {

    let like = parseInt(document.querySelector("#recap").innerText);
    let user = parseInt(document.querySelector("#user").innerText);

    if (like > like1) {
        alert("You only have one attempt for like")
        like = like1 + 1
        user = user1 + 1
    } else {
        like += 1;
        user +=1;
    };

    document.querySelector("#user").innerText = user.toString();
    document.querySelector("#recap").innerText = like.toString();
    
});

const linkedin = document.querySelector("#linkedin");
const instagram = document.querySelector("#instagram");

linkedin.addEventListener('click', function(event) {
    window.open("https://www.linkedin.com/in/trisna-hidayat-b5b8341a5/");
});
instagram.addEventListener('click', function(event) {
    window.open("https://www.instagram.com/");
});