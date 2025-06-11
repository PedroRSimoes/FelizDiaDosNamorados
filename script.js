document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("modal").style.display = "none";
});

function showModal(imageSrc, title, description) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");

    modalImg.src = imageSrc;
    modalTitle.textContent = title;
    modalDesc.textContent = description;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Fecha o modal ao clicar fora dele
document.getElementById("modal").addEventListener("click", function (event) {
    if (event.target === this) {
        closeModal();
    }
});
