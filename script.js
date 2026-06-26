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