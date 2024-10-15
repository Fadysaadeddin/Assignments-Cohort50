/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
const liElements = document.querySelectorAll('li');
liElements.forEach((li) => {
  const spanElement = li.querySelector('span');

  if (li.querySelector('#nickname')) {
    spanElement.textContent = 'Fady saadeddin';
  } else if (li.querySelector('#fav-food')) {
    spanElement.textContent = 'chicken and tomate with sauce ';
  } else {
    spanElement.textContent = 'fijnaart';
  }

  li.classList.add('list-item');
});
