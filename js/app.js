const Button = document.querySelectorAll(".btn")
var count = document.querySelector("#display_number")
var counter = 1

count = 0
changeCounter();

function add() {
  count += counter;
  document.getElementById('display_num').innerText = count;
}

function lower() {
  count -= counter;
  document.getElementById('display_num').innerText = count;
}


Button[0].addEventListener("click", function () {
  Button[0].classList.add("click_effect")
  setTimeout(function () {
    Button[0].classList.remove("click_effect")
  }, 5000)
})
Button[1].addEventListener("click", function () {
  Button[1].classList.add("click_effect")
  setTimeout(function () {
    Button[1].classList.remove("click_effect")
  }, 5000)
})

function changeCounter() {
  Button[2].addEventListener("click", function () {
    Button[2].classList.add("click_effect")
    setTimeout(function () {
      Button[2].classList.remove("click_effect")
    }, 5000)
    alert("Tap counter is +1")
    counter = 1;
  })
  Button[3].addEventListener("click", function () {
    Button[3].classList.add("click_effect")
    setTimeout(function () {
      Button[3].classList.remove("click_effect")
    }, 5000)
    alert("Tap counter is +2")
    counter = 2;
  })
  Button[4].addEventListener("click", function () {
    Button[4].classList.add("click_effect")
    setTimeout(function () {
      Button[4].classList.remove("click_effect")
    }, 5000)
    alert("Tap counter is +5")
    counter = 5;
  })
  Button[5].addEventListener("click", function () {
    Button[5].classList.add("click_effect")
    setTimeout(function () {
      Button[5].classList.remove("click_effect")
    }, 5000)
    alert("Tap counter is +10")
    counter = 10;
  })
  Button[6].addEventListener("click", function () {
    Button[6].classList.add("click_effect")
    setTimeout(function () {
      Button[6].classList.remove("click_effect")
    }, 5000)
    alert("Tap counter is +20")
    counter = 20;
  })
  Button[7].addEventListener("click", function () {
    Button[7].classList.add("click_effect")
    setTimeout(function () {
      Button[7].classList.remove("click_effect")
    }, 5000)
    alert("Tap counter is +30")
    counter = 30;
  })
  Button[8].addEventListener("click", function () {
    Button[8].classList.add("click_effect")
    setTimeout(function () {
      Button[8].classList.remove("click_effect")
    }, 5000)
    alert("Tap counter is +40")
    counter = 40;
  })
  Button[9].addEventListener("click", function () {
    Button[9].classList.add("click_effect")
    count = 0
    document.getElementById('display_num').innerText = count;
    alert("Counter has been reset")
    counter = 1;
  })
}
