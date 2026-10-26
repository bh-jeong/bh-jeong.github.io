const profilePhotos = [
    "images/me_1.jpg",
    "images/me_2.jpg"
];

let currentProfilePhoto = 0;

function showProfilePhoto(index) {
    currentProfilePhoto = index;

    const photo = document.getElementById("profile-photo");
    photo.src = profilePhotos[currentProfilePhoto];

    for (let i = 0; i < profilePhotos.length; i++) {
        const dot = document.getElementById("profile-dot-" + i);

        if (dot) {
            if (i === currentProfilePhoto) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        }
    }
}

function nextProfilePhoto() {
    currentProfilePhoto = (currentProfilePhoto + 1) % profilePhotos.length;
    showProfilePhoto(currentProfilePhoto);
}

function prevProfilePhoto() {
    currentProfilePhoto = (currentProfilePhoto - 1 + profilePhotos.length) % profilePhotos.length;
    showProfilePhoto(currentProfilePhoto);
}

function updatePageMetadata() {
    const formatCount = (count, unit) =>
        `${count} ${unit}${count === 1 ? "" : "s"}`;

    let publicationTotal = 0;

    document.querySelectorAll("[data-paper-group]").forEach((counter) => {
        let count = 0;
        let row = counter.closest("tr").nextElementSibling;

        while (row && !row.querySelector("h3")) {
            count += row.querySelectorAll(".papertitle").length;
            row = row.nextElementSibling;
        }

        counter.textContent = formatCount(count, "paper");

        if (counter.dataset.paperGroup !== "ongoing") {
            publicationTotal += count;
        }
    });

    document.getElementById("publication-total").textContent =
        formatCount(publicationTotal, "paper");

    const patentTotal = document.querySelectorAll(
        "#patents-list .papertitle"
    ).length;

    document.getElementById("patent-total").textContent =
        formatCount(patentTotal, "patent");
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updatePageMetadata);
} else {
    updatePageMetadata();
}