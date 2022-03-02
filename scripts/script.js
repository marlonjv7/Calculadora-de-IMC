let butt = document.getElementById('btnCalcular');
butt.addEventListener('click', BtnAgregar);
butt.addEventListener('click', clickBtnCalcular);

ObtenerLocalStorage();

function BtnAgregar() {
   let Pes = document.getElementById('txPeso');
   let peso = Pes;
   let Altu = document.getElementById('txAltura');
   let altura = Altu;
   let Sex = document.getElementById('txSexo');
   let sexo = Sex;
   let IMC = document.getElementById('Resultado');


   let Peso = [];
   if (localStorage.Peso) {
      Peso = JSON.parse(localStorage.Peso);
   }
   Peso.push(peso.value);
   localStorage.Peso = JSON.stringify(Peso);

   let Altura = [];
   if (localStorage.Altura) {
      Altura = JSON.parse(localStorage.Altura);
   }
   Altura.push(altura.value);
   localStorage.Altura = JSON.stringify(Altura);

   let Sexo = [];
   if (localStorage.Sexo) {
      Sexo = JSON.parse(localStorage.Sexo);
   }
   Sexo.push(sexo.value);
   localStorage.Sexo = JSON.stringify(Sexo);
   ObtenerLocalStorage
}


function ObtenerLocalStorage() {

   let Peso = [];
   if (localStorage.Peso) {
      Peso = JSON.parse(localStorage.Peso);
   }
   let Altura = [];
   if (localStorage.Altura) {
      Altura = JSON.parse(localStorage.Altura);
   }
   let Sexo = [];
   if (localStorage.Sexo) {
      Sexo = JSON.parse(localStorage.Sexo);
   }

}


function clickBtnCalcular() {
   let Pes = Number(document.getElementById('txPeso').value);
   let peso = Pes;
   let Altu = Number(document.getElementById('txAltura').value);
   let altura = Altu;
   let Sex = document.getElementById('txSexo');
   let sexo = Sex;
   let IMC = document.getElementById('Resultado');
   let imc = peso / (altura * altura);
   IMC.innerHTML = imc.toFixed(2);
   alert(imc.toFixed(2));

   if (imc <= 18.4) {
      alert("Bajo peso")
   }
   else if (imc <= 24.9) {
      alert("Normal")
   }
   else if (imc <= 29.9) {
      alert("Sobre Peso")
   }
   else if (imc <= 34.9) {
      alert("Obesidad I")
   }
   else if (imc <= 39.9) {
      alert("Obesidad II")
   }
   else if (imc <= 49.9) {
      alert("Obesidad III")
   }
   else {
      alert("Obesidad IV")
   }
}