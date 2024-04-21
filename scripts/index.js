// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content; 

// @todo: DOM узлы
const list = document.querySelector('.places__list');
const card = document.querySelector('.places__item card');
const deleteButton = cardTemplate.querySelector('.card__delete-button');

// @todo: Функция создания карточки
function createCard(name, link, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard)
    cardElement.querySelector('.card__image').src = link;
    cardElement.querySelector('.card__image').alt = name;
    cardElement.querySelector('.card__title').textContent = name;

    return cardElement
}

// @todo: Функция удаления карточки
function deleteCard(event) {
    const removedCard = event.target.closest('.card');
    removedCard.remove()
}


// @todo: Вывести карточки на страницу
initialCards.forEach (function(item) {
    list.append(createCard(item.name, item.link, deleteCard))
})
