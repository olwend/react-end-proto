const urlParams = new URLSearchParams(window.location.search);
const imageTarget = document.getElementById("js-image-target");
const linksTarget = document.getElementById("js-links-target");

document.addEventListener("DOMContentLoaded", function () {

  let thisImage = urlParams.get("image");
  // let commonName = '';
  // getCommonName(thisImage)
  // .then(result => {
  //   console.log(result);
  //   commonName = result;
  // });
  let linksObject = buildLinks(thisImage);
  let imageObject = buildImage(thisImage);
  let textObject = buildText(thisImage);
  // console.log("Common name: ", commonName);

  function sentenceCase(string) {
    string = string.toLowerCase();
    return string.replace(/[a-z]/i, function (letter) {
      return letter.toUpperCase();
    }).trim();
  }

  function formatCollection(string) {
    copy = [];
    string = string.split(/\./);
    string.forEach(element => {
      element = element.replace(/^0+/, '');
      element == '' ? element = "0" : null;
      copy.push(element);
    });
    return copy.join('');
  }

  function buildImage(image) {
    return '<div class="single-image-container"><a id="imageLink" href="' + urlRoot + dataObject[image].id + urlSuffix + '" class="img-lightbox-link" data-src="' + urlRoot + dataObject[image].id + urlSuffix + '"><img id="image-' + dataObject[image].id + '" src="' + urlRoot + dataObject[image].id + urlSuffix + '" /></a></div>';
  }

  function buildText(image) {
    let textObject = '<div>';

    dataObject[image].species ? textObject += '<p class="text-primary"><strong>Species:</strong> <em>'+ sentenceCase(dataObject[image].species) +'</em></p>' : null;
    // textObject += '<p><strong>Common name:</strong> '+ commonName +'</p>';
    dataObject[image].family ? textObject += '<p class="text-primary"><strong>Family:</strong> <em>'+ dataObject[image].family +'</em></p>' : null;
    dataObject[image].country ? textObject += '<p class="text-primary"><strong>Country:</strong> '+ dataObject[image].country +'</p>' : null;
    dataObject[image].place ? textObject += '<p class="text-primary"><strong>Place:</strong> '+ dataObject[image].place +'</p>' : null;
    dataObject[image].artist ? textObject += '<p class="text-primary"><strong>Artist:</strong> '+ dataObject[image].artist +'</p>' : null;
    dataObject[image].format ? textObject += '<p class="text-primary"><strong>Format:</strong> '+ dataObject[image].format +'</p>' : null;
    dataObject[image].medium ? textObject += '<p class="text-primary"><strong>Medium:</strong> '+ dataObject[image].medium +'</p>' : null;
    dataObject[image].dimensions ? textObject += '<p class="text-primary"><strong>Dimensions:</strong> '+ dataObject[image].dimensions +'</p>' : null;
    textObject += '<br>';
    dataObject[image].collection ? textObject += '<p class="text-secondary"><strong>Collection:</strong> '+ formatCollection(dataObject[image].collection) +'</p>' : null;
    dataObject[image].notesRecto ? textObject += '<p class="text-secondary"><strong>Notes Recto:</strong> '+ dataObject[image].notesRecto +'</p>' : null;
    dataObject[image].notesVerso ? textObject += '<p class="text-secondary"><strong>Notes Verso:</strong> '+ dataObject[image].notesVerso +'</p>' : null;
    dataObject[image].authority ? textObject += '<p class="text-secondary"><strong>Authority:</strong> '+ dataObject[image].authority +'</p>' : null;
    // dataObject[image].specimen ? textObject += '<p class="text-secondary"><strong>Specimen:</strong> '+ dataObject[image].specimen +'</p>' : null;
    dataObject[image].citation ? textObject += '<p class="text-secondary"><strong>Citation:</strong> '+ dataObject[image].citation +'</p>' : null;

    textObject += buildButton(image);

    textObject += buildCopyright(image);

    textObject += '</div>';

    return textObject;
  }

  function buildButton(image) {
    // Download attribute should work when used on same origin
    const buttonObject = '<div class="download-button"><a class="button is-success" href="' + urlRoot + dataObject[image].id + urlSuffix + '" download>Download ' + dataObject[image].id + "</a> (--- Kb)</div>";
    return buttonObject;
  }

  function buildCopyright(image) {
    // const copyrightObject = dataObject[image].copyright;
    return '<div class="copyright-notice">This image is covered by the Creative Commons license. <a href="">Click here</a> to find out more.</div>'
  }

  function buildLinks(image) {
    links = '<a href="single.html?image=' + getPrev(image) + '">Prev</a>';
    links += ' | ';
    links += '<a href="single.html?image=' + getNext(image) + '">Next</a>';
    return links;
  }

  function getNext(image) {
    const index = dataKeys.findIndex(find => find === image);
    let next = '';
    index === dataKeys.length - 1 ? next = 0 : next = index + 1;
    return dataKeys[next];
  }

  function getPrev(image) {
    const index = dataKeys.findIndex(find => find === image);
    let prev = '';
    index === 0 ? prev = dataKeys.length - 1 : prev = index - 1;
    return dataKeys[prev];
  }

  imageTarget.innerHTML = imageObject;
  imageTarget.innerHTML += textObject;
  linksTarget.innerHTML = linksObject;


  // const imageUrl = document.getElementById('image-' + dataObject[thisImage].id).src;

  // async function getCommonName(image) {
  //   const response = await fetch('http://api.gbif.org/v1/species?name=' + dataObject[image].species, {});
  //   const json = await response.json();
  //   Object.keys(json.results).map(key => {
  //     if (json.results[key].vernacularName) {
  //       console.log(json.results[key].vernacularName);
  //     }
  //   })
  //   return json.results[0].vernacularName;
  //   // return json.first_name.concat(' ').concat(json.last_name);
  // }

  // Initialise lightbox
  imgLightbox(document.body, {
    // This is a callback for options / settings, used to fulfill nav redirection
    onClosed: () => {
      if (location.toString().split("image=")[1] != thisImage) {
        location.replace(location.pathname + "?image=" + thisImage)
      }
    }
  });

  let leftArrowDiv = document.getElementsByClassName('nav-left')[0];
  let rightArrowDiv = document.getElementsByClassName('nav-right')[0];
  var imgTarget = document.getElementsByClassName('img-target')[0];

  leftArrowDiv.innerHTML = '<img src="img/arrow-left.jpg" />';
  rightArrowDiv.innerHTML = '<img src="img/arrow-right.jpg" />';

  leftArrowDiv.addEventListener("click", () => {
    thisImage = getPrev(thisImage);
    imgTarget.setAttribute("src", urlRoot + dataObject[thisImage].id + urlSuffix);
  })

  rightArrowDiv.addEventListener("click", () => {
    thisImage = getNext(thisImage);
    imgTarget.setAttribute("src", urlRoot + dataObject[thisImage].id + urlSuffix);
  })

}, false);
