//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const poke1 = document.querySelector('#poke1').value
  const poke2 = document.querySelector('#poke2').value
  const url = 'https://pokeapi.co/api/v2/pokemon/' + poke1
  const url2 = 'https://pokeapi.co/api/v2/pokemon/' + poke2
  let x = document.getElementById('results');
  let y = document.getElementById('results2');
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  if (y.style.display === "flex") {
    y.style.display = "none";
  } else {
    y.style.display = "flex";
  }
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)

      fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          document.querySelector('#pokeImg1').src = data.sprites.front_default;
          let pokeText1 = data.name;
          // let pokeText11 =pokeText1[0].toUpperCase + pokeText1.slice(1);
          document.querySelector('#pokeHeading1').innerHTML = pokeText1[0].toUpperCase() + pokeText1.slice(1);
          data.types.forEach( obj => {
            const li1 = document.createElement('li');
            li1.textContent = obj.type.name;
            document.querySelector('#pokeType1').appendChild(li1);
          })
          
          
        })
        .catch(err => {
          console.log(`error ${err}`)
        });


    })
    .catch(err => {
      console.log(`error ${err}`)
    });

  fetch(url2)
    .then(res => res.json()) // parse response as JSON
    .then(data2 => {
      console.log(data2)


      fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(data2 => {
            document.querySelector('#pokeImg2').src = data2.sprites.front_default;
            let pokeText2 = data2.name;
            // let pokeText22 = pokeText2[0].toUpperCase + pokeText2.slice(1);
            // console.log(pokeText22)
          document.querySelector('#pokeHeading2').innerText = pokeText2[0].toUpperCase() + pokeText2.slice(1);
          data2.types.forEach( obj2 => {
            const li2 = document.createElement('li');
            console.log(obj2.type.name)
            li2.textContent = obj2.type.name;
            document.querySelector('#pokeType2').appendChild(li2);
          })
        })
        .catch(err => {
          console.log(`error ${err}`)
        });


    })
    .catch(err => {
      console.log(`error ${err}`)
    });



};
