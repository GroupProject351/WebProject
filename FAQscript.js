document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.question');

    buttons. forEach(button => {
        button.addEventListener('click', function() {

            const answer = this.nextElementSibling;

            answer.classList.toggle('show');
        });
    });
});