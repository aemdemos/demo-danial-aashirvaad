
export default function decorate(block) {
  block.classList.add('cards');
  
  Array.from(block.children).forEach((card) => {
    card.classList.add('card');
    const [imageWrapper, linkWrapper] = card.children;
    imageWrapper.classList.add('card-image');
    linkWrapper.classList.add('card-link');
  });
}
