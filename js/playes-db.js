const searchPlayer = () => {
  const searchField = document.getElementById('search-field');
  const searchFieldValue = searchField.value;
  searchField.value = '';

  if (isNaN(searchFieldValue)) {
    document.getElementById('warning').innerText = '';
    document.getElementById('spinner').style.display = 'block';
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchFieldValue}`;
    fetch(url)
      .then(res => res.json())
      .then(data => playerDetail(data))
  }
  else {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('warning').innerText = 'please type a name'
  }
}



const playerDetail = players => {
  document.getElementById('spinner').style.display = 'none';
  const playerList = document.getElementById('player-list');
  playerList.innerHTML = '';
  const eachPlayer = players.player;
  eachPlayer.forEach(player => {

    const div = document.createElement('div');
    div.className = 'col-md-6';
    div.innerHTML = `
        <div id="card-shadow" class="card mb-3" style="max-width: 540px;">
        <div class="row align-items-center justify-content-center p-3 g-0">
          <div class="col">
            <img src="${player.strThumb}" width="300px" class="rounded-start" alt="...">
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">${player.strPlayer}</h5>
              <p class="card-text">${(player.strDescriptionEN).slice(0, 300)}</p>
            </div>
          </div>
        </div>
      </div>
        `
    playerList.appendChild(div);

  });
}