
const roller_even = document.querySelector('#c1');
const roller_odd = document.querySelector('#c2');
const roll = document.querySelector('.roll');

const newb = document.querySelector('.btn');
const even = document.getElementById('score_even');
const odd = document.getElementById('score_odd');

const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');

const we = document.getElementById('we');
const wo = document.getElementById('wo');

const to = document.getElementById('o');
const te = document.getElementById('e');

function check(roller)
{
          roller.classList.add('animate');
}


// button.addEventListener('click', check(roller));
var i = 0;
var roller;
var score_main;
var turn;
var total = 10;

roll.onclick = function () {

          roll.disabled = true;
          setTimeout(function () { 
                    roll.disabled = false;
          },1000)

          if (total == 0)
          {
                    return;
                    }

          if (i % 2 == 0)
          {
                    roller = roller_even;
                    m1.style.backgroundColor = "gray";
                    m2.style.backgroundColor = "gainsboro";
                    score_main = Number(even.innerHTML);
                    turn = Number(te.innerHTML);
                   
          }

          else
          {
                    roller = roller_odd;
                    m2.style.backgroundColor = "gray";
                    m1.style.backgroundColor = "gainsboro";
                    score_main = Number(odd.innerHTML);
                    turn = Number(to.innerHTML);
                   
          }
          roller.classList.remove('contback');
          roller.classList.remove('contleft');
          roller.classList.remove('contright');
          roller.classList.remove('conttop');
          roller.classList.remove('contbottom');
          setTimeout(function () {
                    roller.classList.remove('animate');
          }, 300)
          var score = Math.floor(Math.random() * 6) + 1;
          roller.classList.add('animate');

          console.log(score);
          
          if (score === 2)
          {
                    roller.classList.add('contback');
          }

          if (score === 3) {
                    roller.classList.add('contleft');
          }

          if (score === 4) {
                    roller.classList.add('contright');
          }

          if (score === 5) {
                    roller.classList.add('conttop');
          }

          if (score === 6) {
                    roller.classList.add('contbottom');
          }


          score_main += score;
          turn -= 1;
          total -= 1;

          if (i % 2 == 0)
          {
                    setTimeout(function () {
                              even.innerHTML = score_main;
                              te.innerHTML = turn;
                    }, 800);
                    
          }
          else
          {
                    setTimeout(function () {
                              odd.innerHTML = score_main;
                              to.innerHTML = turn;
                    }, 800);
          }
          i++;
          // roller.classList.remove('animate');

          if (total == 0) {
                    setTimeout(function () {
                              roll.style.display = 'none';
                              if (Number(even.innerHTML) > Number(odd.innerHTML)) {
                                        we.style.display = 'block';
                              }
                              if (Number(even.innerHTML) < Number(odd.innerHTML)) {
                                        wo.style.display = 'block';
                              }
                              // if (Number(even.innerHTML) === Number(odd.innerHTML)) {
                              //           we.style.display = 'block';
                              //           wo.style.display = 'block';
                              // }
                              c1.style.display = 'none';
                              c2.style.display = 'none';
                    }, 800);

          }

          
}

newb.onclick = function () {
          location.reload();
}



