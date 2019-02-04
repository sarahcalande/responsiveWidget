document.addEventListener('DOMContentLoaded', () => {





fetchThumbnails()
.then(detectLanguage())


function fetchThumbnails() {
  return fetch('https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init').then(r=>r.json())
  .then(r=>r.list.forEach(thumbnail => renderThumbnails(thumbnail)))
}



function renderThumbnails(thumbnail) {
  let container = document.querySelector('.container')
  container.innerHTML += `<div class="col"> <img src=${thumbnail.thumbnail[0].url} class="click"> <h1 class="click" id="title" lang="en">${thumbnail.name}</h1> <h3 class="click">${thumbnail.branding}</h3> <text>${thumbnail.categories}</text></div>`
  let clicker = document.querySelectorAll('.click')

  for (var i = 0; i < clicker.length; i++) {
  clicker[i].addEventListener('click', ()=>{
    window.location = thumbnail.url;
  })
}

}


function detectLanguage(){
    let title = document.getElementById('#title')
  if (document.lang === "en") {
      title.lang = "en"
  } else if (document.lang === "fr") {
    title.lang="fr"
  }
}






})
