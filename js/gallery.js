let $photoGallery = $('.photo-gallery');
let $videoGallery = $('.video-gallery');
let imageNum = 1;
let numImages = 17;
let videoNum = 1;
let numVideos = 2;

// don't hardcode this somehow
for (let i = 1; i < numImages + 1; i++) {
  $photoGallery.append(imageCardTemplate(i, `dataCaption${i}`, `cardTitle${i}`, `cardContent${i}`));
}

for (let j = 1; j < numVideos + 1; j++) {
  $videoGallery.append(videoTemplate(j));
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

function videoTemplate(ind) {
  return `<div class="col s12">
            <video class="responsive-video" controls>
              <source src="assets/videos/vid${ind}.mp4" type="video/mp4">
            </video>
          </div>
          <br>
        `
}
