let memURL = "https://api.imgflip.com/get_memes"

let res = {}

function memeInfo(){
  axios.get(memURL).then(function(result){
  res = result.data

  res.data.memes.forEach(element => {
      
    document.getElementById('name').innerHTML += `<p>${element.name}</p> <img src="${element.url}" width=${element.width} height=${element.height}>`

  });
  })
}

memeInfo();
