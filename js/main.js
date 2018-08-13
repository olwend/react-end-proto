const layoutGrid = document.getElementById("layout-grid");
const layoutList = document.getElementById("layout-list");
const imageTarget = document.getElementById("js-image-target");

layoutGrid.addEventListener('click', function () {
  imageTarget.classList.remove("list");
  imageTarget.classList.add("grid");
  layoutList.classList.remove('has-text-success');
  layoutGrid.classList.add('has-text-success');
}, false);

layoutList.addEventListener('click', function () {
  imageTarget.classList.remove("grid");
  imageTarget.classList.add("list");
  layoutGrid.classList.remove('has-text-success');
  layoutList.classList.add('has-text-success');
}, false);

document.addEventListener("DOMContentLoaded", function () {
  let theseObjects = "";

  Object.keys(dataObject).map((object) => {
    return theseObjects += buildImage(object);
  });

  function buildImage(image) {
    return '<div class="image-container"><a href="single.html?image=' + dataObject[image].id + '"><img src="' + urlRoot + dataObject[image].id + urlSuffix + '" /></a></div>';
  }

  imageTarget.innerHTML = theseObjects;
}, false);

