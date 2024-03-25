

document.addEventListener('DOMContentLoaded', function() {
    const coachLinks = document.querySelectorAll('.coach-link');
    console.log("I WORK!");
    coachLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            console.log("Link Clicked");
            event.preventDefault();
            const id = this.getAttribute('data-id');
            window.location.href = 'coach_spotlight.html?id=' + id;
        });
    });
});