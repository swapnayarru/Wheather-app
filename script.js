async function getWeather() {
  const city = document.getElementById("city").value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const res = await fetch(`http://localhost:3000/weather?city=${city}`);
  const data = await res.json();

  const resultDiv = document.getElementById("result");

  if (data.error) {
    resultDiv.innerHTML = `<p style="color:red">${data.error}</p>`;
  } else {
    resultDiv.innerHTML = `
      <h3>${data.city}, ${data.country}</h3>
      <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png" alt="">
      <p><b>${data.weather}</b></p>
      <p>🌡️ ${data.temperature} °C (feels like ${data.feels_like} °C)</p>
      <p>💧 Humidity: ${data.humidity}%</p>
    `;
  }
}
