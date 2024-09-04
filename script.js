document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineDescription = document.getElementById('timeline-description');
    const descriptionImage = document.getElementById('description-image').querySelector('img');


    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            const description = item.getAttribute('data-description');
            const time = item.getAttribute('data-time');

            // Update the description text and image
            timelineDescription.querySelector('.description-text').innerHTML = `
                <p>${description}</p>
                <p><strong>Time:</strong> ${time}</p>
            `;
        });
    });
});
