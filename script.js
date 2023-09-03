document.addEventListener("DOMContentLoaded", function() {
    updateDateTime();

    setInterval(updateDateTime, 1000);

    function updateDateTime() {
        const now = new Date();
        document.querySelector(".date").textContent = now.toLocaleDateString('ja-JP');
        document.querySelector(".time").textContent = now.toLocaleTimeString('ja-JP');
    }
});
