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
  document.body.innerHTML = "<div class='section'><video controls><source src = 'JURASSIC_WORLD.mp4' type='video/mp4'></video></div>"
 }
function func2(){
  document.body.innerHTML = "<div class='section'><video controls><source src = 'The_Simpsons.mp4' type='video/mp4'></video></div>"
 }
function func3(){
  document.body.innerHTML = "<div class='section'><video controls><source src = 'Vinland_Saga.mp4' type='video/mp4'></video></div>"
 }
function func4(){
  document.body.innerHTML = "<div class='section'><video controls><source src = 'TOY_STORY.mp4' type='video/mp4'></video></div>"
 }
function func5(){
  document.body.innerHTML = "<div class='section'><video controls><source src = 'Demon_Slayer.mp4' type='video/mp4'></video></div>"
 }