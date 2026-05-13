document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.question');

    buttons.forEach(button => {
        button.addEventListener('click', function() {

            const answer = this.nextElementSibling;

            document.querySelectorAll('.answer').forEach(otherAnswer => {
                if (otherAnswer !== answer) {
                    otherAnswer.classList.remove('show');
                }
            });

            answer.classList.toggle('show');
        });
    });
});
