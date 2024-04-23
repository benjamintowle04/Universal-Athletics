loadAllCoaches();


function handleButtonClick(path) {
    fetch(`http://localhost:8081/listCoaches/${path}`)
        .then(response => response.json())
        .then(data => filterCoaches(data));

}

function loadAllCoaches() {
    console.log("LOADING COACHES");
    fetch(`http://localhost:8081/listCoaches`)
        .then(response => response.json())
        .then(data => {
            var coachRow = document.getElementById('coach-list-container');
            for (let coach of data) {
                var coachCard = document.createElement('div');
                coachCard.className = "col";

                let coachName = coach.coachName;
                let location = coach.location;
                let url = coach.profilePic;

                console.log(coachName);

                coachCard.innerHTML = `<div class="list-item">
                                        <svg
                                            class="bd-placeholder-img rounded-circle"
                                            width="140"
                                            height="140"
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            aria-label="Placeholder"
                                            preserveAspectRatio="xMidYMid slice"
                                            focusable="false"
                                        >
                                            <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                                            <image
                                                xlink:href="${url}"
                                                width="140"
                                                height="140"
                                                preserveAspectRatio="xMidYMid slice"
                                            />
                                        </svg>
                                        <h4>${coachName}</h4>
                                        <p>Location: ${location}</p>
                                        <a class="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSdtWPgtS_MZyi2byuqITKK1L2xDy5g-8z_92iWUN9AlSVg3mA/viewform?usp=sf_link">Sign Up!</a>
                                    </div>`

                coachRow.appendChild(coachCard);
            }
        });
}

function filterCoaches(data) {
    var coachRow = document.getElementById('coach-list-container');

    //remove all items initially
    if (coachRow) {
        while (coachRow.firstChild) {
            coachRow.removeChild(coachRow.firstChild);
        }
    }

    for (let coach of data) {
        var coachCard = document.createElement('div');
        coachCard.className = "col";

        let coachName = coach.coachName;
        let location = coach.location;
        let url = coach.profilePic;

        console.log(coachName);

        coachCard.innerHTML = `<div class="list-item">
                                <svg
                                    class="bd-placeholder-img rounded-circle"
                                    width="140"
                                    height="140"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                                    <image
                                        xlink:href="${url}"
                                        width="140"
                                        height="140"
                                        preserveAspectRatio="xMidYMid slice"
                                    />
                                </svg>
                                <h4>${coachName}</h4>
                                <p>Location: ${location}</p>
                                    <a class="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSdtWPgtS_MZyi2byuqITKK1L2xDy5g-8z_92iWUN9AlSVg3mA/viewform?usp=sf_link">Sign Up!</a>
                                </div>`

        coachRow.appendChild(coachCard);

    }



}

