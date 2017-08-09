let $photoGallery = $('.photo-gallery');
let imageNum = 1;
let numImages = 17;

// don't hardcode this somehow
for (let i = 1; i < numImages + 1; i++) {
  $photoGallery.append(imageCardTemplate(i, `dataCaption${i}`, `cardTitle${i}`, `cardContent${i}`));
}

function imageCardTemplate(ind, dataCaption, cardTitle, cardContent) {
  return `<div class="col s12 m6">
            <div class="card large">
              <div class="card-image">
                <img class="materialboxed" src="assets/img/img${ind}.jpg" data-caption="${dataCaption}">
                <span class="card-title">
                  ${cardTitle}
                </span>
              </div>
              <div class="card-content">
                <p>${cardContent}</p>
              </div>
            </div>
          </div>`
}
