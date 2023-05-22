//  const labels = document.querySelectorAll('#label');
  //const arrowIc = document.querySelectorAll('#arrowIcon');

  //labels.forEach((label,index) => {
    //label.addEventListener('click', () => {
      //const content = label.nextElementSibling;
      //content.classList.toggle('invisible');
      //arrowIc[index].classList.toggle('rotate-180');
    //});
  //});

 // const labels = document.querySelectorAll('#label');
//  const arrowIc = document.querySelectorAll('.arrowIcon');
  
  //labels.forEach((label, index) => {
    //label.addEventListener('click', () => {
      //const content = label.nextElementSibling;
      //content.classList.toggle('invisible');
      //arrowIc[index].classList.toggle('rotate-180');
    //});
  //});
  
  const labels = document.querySelectorAll('#label');

labels.forEach((label) => {
  const arrowIc = label.querySelector('.arrowIcon');
  const firstParagrahp = label.querySelector('.p:first-child');
  label.addEventListener('click', () => {
    const content = label.nextElementSibling;
    content.classList.toggle('invisible');
    arrowIc.classList.toggle('rotate');
    firstParagrahp.classList.toggle('text-black');
  });
});
