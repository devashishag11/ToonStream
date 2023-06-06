const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

// const ball = document.querySelector(".toggle-ball");
// const items = document.querySelectorAll(
//   ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
// );

// ball.addEventListener("click", () => {
//   items.forEach((item) => {
//     item.classList.toggle("active");
//   });
//   ball.classList.toggle("active");
// });

function func1(){
  document.body.innerHTML = "<div class='section'><video controls><source src = 'sword.mp4' type='video/mp4'></video></div>"
 }
function func2(){
  document.body.innerHTML = "<div class='section'><video controls><source src = 'pokemon.mp4' type='video/mp4'></video></div>"
 }
function func3(){
  document.body.innerHTML = "<div class='section'><video controls><source src = 'digimon.mp4' type='video/mp4'></video></div>"
 }
function func4(){
  document.body.innerHTML = "<div class='section'><video controls><source src = 'Doremon.mp4' type='video/mp4'></video></div>"
 }
function func5(){
  document.body.innerHTML = "<div class='section'><video controls><source src = 'Chhota_Bheem.mp4' type='video/mp4'></video></div>"
 }
function func6(){
  document.body.innerHTML = "<div class='section'><video controls><source src = 'Air Gear.mp4' type='video/mp4'></video></div>"
 }
function func7(){
  document.body.innerHTML = "<div class='section'><video controls><source src = 'death_note.mp4' type='video/mp4'></video></div>"
 }
function func8(){
  document.body.innerHTML = "<div class='section'><video controls><source src = 'Demon_Slayer.mp4' type='video/mp4'></video></div>"
 }
function func9(){
  document.body.innerHTML = "<div class='section'><video controls><source src = 'motu_patlu.mp4' type='video/mp4'></video></div>"
 }
function func10(){
  document.body.innerHTML = "<div class='section'><video controls><source src = 'phineas_n_ferb.mp4' type='video/mp4'></video></div>"
 }
function func11(){
  document.body.innerHTML = "<div class='section'><video controls><source src = 'SPIDER-MAN.mp4' type='video/mp4'></video></div>"
 }
function func12(){
  document.body.innerHTML = "<div class='section'><video controls><source src = 'star_wars.mp4' type='video/mp4'></video></div>"
 }
