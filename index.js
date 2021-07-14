function fanSubscribe() {
  let name = prompt("What's yoru first name?");
  let email = prompt("What's your email?");
  if (email) {
    alert("👋 Welcome to Team Avatar" + " " + name + "!");
  } else {
    alert("🥺Aww, monkey feathers! Come back soon!");
  }
}
let button = document.querySelector("button");
button.addEventListener("click", fanSubscribe);