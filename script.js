document.getElementById('scrollBtn').addEventListener('click', () => {
    window.scroll({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});