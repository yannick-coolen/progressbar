const progress = document.querySelector('.progress')! as HTMLElement;
const prev = <HTMLButtonElement>document.querySelector('#prev');
const next = <HTMLButtonElement>document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let currentActive: number = 1;

next!.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev!.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

const update = (): void => {
  circles.forEach((circle, idx: number) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 99 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
