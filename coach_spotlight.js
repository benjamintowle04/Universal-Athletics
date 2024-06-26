
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function loadImage(image, imgId) {
    if (image != "") {
        var imageElement = document.getElementById(imgId);
        imageElement.setAttribute('href', image);
        console.log(imgId);
        console.log(imageElement.href);
    }
};

var dataId = getUrlParameter('id');

console.log('Data ID:', dataId);

fetch ('./coach_data.json') 
.then (response => response.json())
.then (data => {
    var myCoaches = data.coaches;

    for (let coach of myCoaches) {
        console.log(coach.id);
        if (coach.id === dataId) {

            //Initialize text content
            document.getElementById('coach-name').textContent = coach.coachName;
            document.getElementById('about-content').textContent = coach.about;
            document.getElementById('ua-meaning-content').textContent = coach.uaMeaning;
            document.getElementById('phone').textContent = coach.phone;
            document.getElementById('email').textContent = coach.email;

            //Initialize sports interest
            var sports = coach.sports;
            var sportList = document.getElementById('sports-list');
            for (let item of sports) {
                let listItem = document.createElement('li');
                listItem.innerHTML = `<p>${item.sport}</p>`;
                sportList.appendChild(listItem);
            }

            //Initialize images
            loadImage(coach.image1, "image-1");
            loadImage(coach.image2, "image-2");
        }
    }
})