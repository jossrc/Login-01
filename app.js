let inputs = Array.from(document.querySelectorAll('input'));
let icons = Array.from(document.querySelectorAll('.fas'));

inputs.forEach((input) => {
  let parent = input.parentNode;
  input.addEventListener('focus', (e) => {
    parent.classList.add('input-div-focus');
    let icon = e.target.parentNode.getElementsByClassName('fas')[0];
    icon.classList.add('color-fas');
  });

  input.addEventListener('blur', (e) => {
    parent.classList.remove('input-div-focus');
    let icon = e.target.parentNode.getElementsByClassName('fas')[0];
    icon.classList.remove('color-fas');
  });
});
