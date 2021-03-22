import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function openLargeImg(e) {
  if (e.target.tagName === 'IMG') {
    let largeImg = e.target.dataset.largeimgurl;
    const instance = basicLightbox.create(
      `<img src="${largeImg}" alt="image">`,
    );
    instance.show();
  }
}
export default openLargeImg;
