const inputBtn = document.querySelector('.inputCity');
const buttonSb = document.querySelector('.btn');
const apiKey ="dee161088054c660b79884dbbd22efca";
const cityName = document.querySelector('.city');
const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

async function getWeather(apiKey,input){
  const promise =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`);
  return await promise.json();

}
buttonSb.addEventListener('click',async()=>{
  const input = inputBtn.value;
  const result = await getWeather(apiKey,input);
 console.log(result);
 temp.innerHTML = `${result.main.temp + " °C"}`;
 cityName.innerHTML = `${result.name }`;
 humidity.innerHTML = `${result.main.humidity +" % "}`;
 wind.innerHTML = `${result.wind.speed + "km/h" }`;
 })
 