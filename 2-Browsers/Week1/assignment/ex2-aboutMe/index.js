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
  switch (spanElement.id) {
    case 'nickname':
      spanElement.textContent = 'Fady saadeddin';
      break;
    case 'fav-food':
      spanElement.textContent = 'chicken and tomate with sauce ';
      break;
    case 'hometown':
      spanElement.textContent = 'fijnaart';
      break;
  }

  li.classList.add('list-item');
});
