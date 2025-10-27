
// API greier #1

var bySearch = "mat";
var randomPage = (Math.round((Math.random() * 226) / 10))
 
const randomAPI = `https://www.omdbapi.com/?s=${bySearch}&page=${randomPage}&apikey=3a692b48`;

  fetch(randomAPI)
    .then((response) => response.json())
    .then((data) => {

      console.log(data);
      console.log(data.Search[0].Poster);

      console.log(data.Search[0].Title);

      var banner1 = document.getElementById("banner1")
      var banner2 = document.getElementById("banner2")
      var banner3 = document.getElementById("banner3")

      var pInfo1 = document.querySelector(".APIInfo1")
      var pInfo2 = document.querySelector(".APIInfo2")
      var pInfo3 = document.querySelector(".APIInfo3")
      var pInfo4 = document.querySelector(".APIInfo4")
      var pInfo5 = document.querySelector(".APIInfo5")
      var pInfo6 = document.querySelector(".APIInfo6")
      var pInfo7 = document.querySelector(".APIInfo7")
      var pInfo8 = document.querySelector(".APIInfo8")
      var pInfo9 = document.querySelector(".APIInfo9")
      var pInfo10 = document.querySelector(".APIInfo10")
      var pInfo11 = document.querySelector(".APIInfo11")
      var pInfo12 = document.querySelector(".APIInfo12")
      var pInfo13 = document.querySelector(".APIInfo13")
      var pInfo14 = document.querySelector(".APIInfo14")
      var pInfo15 = document.querySelector(".APIInfo15")



      if (data.Search[0].Poster === 'N/A') {

        banner1.src = `https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist.jpg`

        pInfo1.innerHTML = `${data.Search[0].Title}`
        pInfo2.innerHTML = `${data.Search[0].Year}`
        pInfo3.innerHTML = `${data.Search[0].Type}`

        // Det skulle vare Genre og Plot, men det finnes ikke det. Så det derfor må de vare tomp. Beklager for det
        pInfo4.innerHTML = `${data.Search[0].Genre}`
        pInfo5.innerHTML = `${data.Search[0].Plot}`
        
      } else {

        banner1.src = `${data.Search[0].Poster}`

        pInfo1.innerHTML = `${data.Search[0].Title}`
        pInfo2.innerHTML = `${data.Search[0].Year}`
        pInfo3.innerHTML = `${data.Search[0].Type}`

        // Det skulle vare Genre og Plot, men det finnes ikke det. Så det derfor må de vare tomp. Beklager for det
        pInfo4.innerHTML = `${data.Search[0].Genre}`
        pInfo5.innerHTML = `${data.Search[0].Plot}`

      }



      if (data.Search[1].Poster === 'N/A') {

        banner2.src = `https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist.jpg`

        pInfo6.innerHTML = `${data.Search[1].Title}`
        pInfo7.innerHTML = `${data.Search[1].Year}`
        pInfo8.innerHTML = `${data.Search[1].Type}`

        // Det skulle vare Genre og Plot, men det finnes ikke det. Så det derfor må de vare tomp. Beklager for det
        pInfo9.innerHTML = `${data.Search[1].Genre}`
        pInfo10.innerHTML = `${data.Search[1].Plot}`
        
      } else {

        banner2.src = `${data.Search[1].Poster}`

        pInfo6.innerHTML = `${data.Search[1].Title}`
        pInfo7.innerHTML = `${data.Search[1].Year}`
        pInfo8.innerHTML = `${data.Search[1].Type}`

        // Det skulle vare Genre og Plot, men det finnes ikke det. Så det derfor må de vare tomp. Beklager for det
        pInfo9.innerHTML = `${data.Search[1].Genre}`
        pInfo10.innerHTML = `${data.Search[1].Plot}`

      }



      if (data.Search[2].Poster === 'N/A') {

        banner3.src = `https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist.jpg`

        pInfo11.innerHTML = `${data.Search[2].Title}`
        pInfo12.innerHTML = `${data.Search[2].Year}`
        pInfo13.innerHTML = `${data.Search[2].Type}`

        // Det skulle vare Genre og Plot, men det finnes ikke det. Så det derfor må de vare tomp. Beklager for det
        pInfo14.innerHTML = `${data.Search[2].Genre}`
        pInfo15.innerHTML = `${data.Search[2].Plot}`
        
      } else {

        banner3.src = `${data.Search[2].Poster}`

        pInfo11.innerHTML = `${data.Search[2].Title}`
        pInfo12.innerHTML = `${data.Search[2].Year}`
        pInfo13.innerHTML = `${data.Search[2].Type}`

        // Det skulle vare Genre og Plot, men det finnes ikke det. Så det derfor må de vare tomp. Beklager for det
        pInfo14.innerHTML = `${data.Search[2].Genre}`
        pInfo15.innerHTML = `${data.Search[2].Plot}`

      }



      // banner1.src = `${data.Search[0].Poster}`
      // banner2.src = `${data.Search[1].Poster}`
      // banner3.src = `${data.Search[2].Poster}`
      
    });

// API greier #1



// API greier #2

document.getElementById("submitBtn").addEventListener("click", function () {

  // Basic greier

  var searchInput = document.getElementById("searchInput").value.toLowerCase()

  minAPI = `http://www.omdbapi.com/?t=${searchInput}&apikey=3a692b48`

  // Basic greier
  


  // Søk system

  var hilseDiv = document.querySelector(".hilseTekstDiv")

  var filmN1 = document.querySelector(".filmN1")
  var filmN2 = document.querySelector(".filmN2")
  var filmN3 = document.querySelector(".filmN3")

  var filmSomVarSøkt = document.querySelector(".filmSomVarSøkt")

  let banner4 = document.getElementById("banner4")

  let pInfo16 = document.querySelector(".APIInfo16")
  let pInfo17 = document.querySelector(".APIInfo17")
  let pInfo18 = document.querySelector(".APIInfo18")
  let pInfo19 = document.querySelector(".APIInfo19")
  let pInfo20 = document.querySelector(".APIInfo20")

  fetch(minAPI)

    .then(response => response.json())
    .then(data => {

      console.log(data);

      hilseDiv.style.display = "none"

      filmN1.style.display = "none"
      filmN2.style.display = "none"
      filmN3.style.display = "none"

      filmSomVarSøkt.style.display = "flex"

      banner4.src = `${data.Poster}`

      pInfo16.textContent = `${data.Title}`
      pInfo17.textContent = `${data.Year}`
      pInfo18.textContent = `${data.Director}`
      pInfo19.textContent = `${data.Genre}`
      pInfo20.textContent = `${data.Plot}`
            
    })

  document.getElementById("searchInput").value = ''

  // Søk system

})

// API greier #2



// Design greier

let submitBtn = document.getElementById("submitBtn")
let searchIcons = document.querySelectorAll(".searchIcon")

submitBtn.addEventListener("mouseenter", function () {

    searchIcons.forEach(icon => icon.src = "./CSS/Icons/search.png")

})

submitBtn.addEventListener("mouseleave", function () {

    searchIcons.forEach(icon => icon.src = "./CSS/Icons/search2.png")

})

// Design greier



// Enter funksjon

searchInput.addEventListener("keypress", function(event) {

  // If the user presses the "Enter" key on the keyboard

  if (event.key === "Enter") {

    // Cancel the default action, if needed
    event.preventDefault();

    // Trigger the button element with a click
    submitBtn.click();

  }

})