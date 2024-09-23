const h2 = document.createElement("h2");
h2.textContent = "Thank you for visiting my website.";
document.querySelector("body").appendChild(h2);
const test = document.getElementById('test');
test.addEventListener( "mouseover", (event) => {
      event.target.style.color = "#CC1455";
      setTimeout(() => {
        event.target.style.color = "";
      }, 500);
    },
    false,
  );
const bio = document.getElementById('bio');
  bio.addEventListener( "mouseover", (event) => {
        event.target.style.color = "#CC1455";
        setTimeout(() => {
          event.target.style.color = "";
        }, 500);
      },
      false,
    );

const reco = document.getElementById('reco');
    reco.addEventListener( "mouseover", (event) => {
          event.target.style.color = "#CC1455";
          setTimeout(() => {
            event.target.style.color = "";
          }, 500);
        },
        false,
      );

const food = document.getElementById('food');
      food.addEventListener( "mouseover", (event) => {
            event.target.style.color = "#CC1455";
            setTimeout(() => {
              event.target.style.color = "";
            }, 500);
          },
          false,
        );