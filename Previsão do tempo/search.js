import React, { useState } from 'react';

function Search(props) {
  const [cidade, setCidade] = useState(null);

  function searchInput(e) {
    e.preventDefault();
    const currentValue = document.querySelector('input[name=searchInput]').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { main, name, sys, weather } = data;

        if (sys && weather) {
          const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
          setCidade({
            temp: main.temp,
            country: sys.country,
            city: name,
            description: weather[0].description,
            icon: icon,
          });
        } else {
          setCidade({ error: "Cidade não encontrada" });
        }
      })
      .catch(() => {
        setCidade({ error: "Ocorreu um erro, tente novamente" });
      });
  }

  return (
    <div className="searchWrapper">
      <div className="search">
        <h2>Digite a cidade que você quer saber a previsão...</h2>
        <form onSubmit={searchInput}>
          <input
            placeholder={props.placeholder}
            type="text"
            name="searchInput"
            className="teste"
          />
          <input className='pedro' type="submit" value="Pesquisar por cidade!" />
        </form>
      </div>

      {cidade ? (
        cidade.error ? (
          <div className="resultBox error">{cidade.error}</div>
        ) : (
          <div className="resultBox">
            <p>Temperatura: {cidade.temp}°C</p>
            <p>País: {cidade.country}</p>
            <p>Cidade: {cidade.city}</p>
            <p>Tipo: {cidade.description}</p>
            <img src={cidade.icon} alt="Weather Icon" />
          </div>
        )
      ) : (
        <div>Pesquise por algo acima...</div>
      )}
    </div>
  );
}

export default Search;
