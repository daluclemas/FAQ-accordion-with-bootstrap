const cardHeaderIcon = document.querySelectorAll('.card-header img');

Array.from(cardHeaderIcon).forEach(icon=>{

    icon.addEventListener('click', (e)=>{

        e.target.parentElement.previousElementSibling.classList.toggle('active');
    })
})