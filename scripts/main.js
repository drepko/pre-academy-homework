function topAndReload() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  location.reload();
}

let foodbuttonFunction = () => {
  document.getElementById('foodmeme-img').style.display = 'block';
  document.getElementById('closingbutton2').style.display = 'block';
}

let displayAbout2 = () => {
  document.getElementById('foodmeme-img').style.display = 'none';
  document.getElementById('closingbutton2').style.display = 'none';
}

let codeMemeFunction = () => {
  document.getElementById('codememe-img').style.display = 'block';
  document.getElementById('closingbutton1').style.display = 'block';
}


let displayAbout1 = () => {
  document.getElementById('codememe-img').style.display = 'none';
  document.getElementById('closingbutton1').style.display = 'none';
}



let navFunction1 = () => {
  setTimeout(changeSpace1, 300);
  setTimeout(changeSpace2, 600);
}

let changeSpace1 = () => {
  document.getElementById('introduction').style.lineHeight = '70px';

}

let changeSpace2 = () => {
  document.getElementById('introduction').style.lineHeight = '60px';
}

let navFunction2 = () => {
  setTimeout(changeSpace3, 300);
  setTimeout(changeSpace4, 600);
}

let changeSpace3 = () => {
  document.getElementById('about1').style.lineHeight = '45px';
}

let changeSpace4 = () => {
  document.getElementById('about1').style.lineHeight = '35px';
}

let navFunction3 = () => {
  setTimeout(changeSpace5, 300);
  setTimeout(changeSpace6, 600);
}

let changeSpace5 = () => {
  document.getElementById('about2').style.lineHeight = '45px';

}

let changeSpace6 = () => {
  document.getElementById('about2').style.lineHeight = '35px';

}
