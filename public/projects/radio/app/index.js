const radioStations = {
  Poland: [
    // Radio Złote Przeboje
    { name: "Radio RMF FM", url: "https://rs6-krk2.rmfstream.pl/RMFFM48" },
    { name: "Vox FM", url: "https://waw.ic.smcdn.pl/3990-1.aac" },
    { name: "Tok FM", url: "https://radiostream.pl/tuba10-1.mp3" },
    { name: "Radio Plus", url: "https://pl01.cdn.eurozet.pl/plu-waw.mp3" },
    // Radio Eska
    { name: "Radio ZET", url: "https://r.dcs.redcdn.pl/sc/o2/Eurozet/live/audio.livx", },
    { name: "Radio RMF MAXXX", url: "https://rs9-krk2-cyfronet.rmfstream.pl/RMFMAXXX48", },
  ],
  Romania: [
    { name: "Digi FM", url: "https://edge76.rcs-rds.ro/digifm/digifm.mp3" },
    { name: "Kiss FM", url: "https://live.kissfm.ro/kissfm.aacp" },
    { name: "Magic FM", url: "https://live.magicfm.ro/magicfm.aacp" },
    { name: "Europa FM", url: "https://astreaming.edi.ro:8443/EuropaFM_aac" },
  ],
  USA: [
    
  ],
  UNKNOWN: [
    { name: "Portal Radio", url: "https://radio.creeperita104.is-a.dev/listen/portal_radio/radio.mp3" },
    { name: "Newgrounds Radio", url: "https://stream.newgroundsradio.com/radio.mp3"}
  ]
};

const countrySelect = document.getElementById("country-select");
const stationSelect = document.getElementById("station-select");
const audioPlayer = document.getElementById("audio-player");
const themeToggle = document.getElementById("theme-toggle");

// Populate country dropdown
function populateCountries() {
  const countries = Object.keys(radioStations);
  countries.forEach((country) => { 
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });
}

// Populate station dropdown based on country selection
function populateStations(stations, isAllCountries) {
  stationSelect.innerHTML = '<option value="">--Select Station--</option>';

  if (stations) {
    const sortedStations = stations.sort((a, b) =>
      a.name.localeCompare(b.name),
    );

    sortedStations.forEach((station) => {
      const option = document.createElement("option");
      option.value = station.url;
      option.textContent = isAllCountries
        ? `[${station.country}] ${station.name}`
        : station.name;
      stationSelect.appendChild(option);
    });
  }
}

// Handle country selection
countrySelect.addEventListener("change", function () {
  const selectedCountry = this.value;

  if (selectedCountry === "") {
    // Show all stations with country name included in the format
    const allStations = Object.keys(radioStations).reduce((acc, country) => {
      return acc.concat(
        radioStations[country].map((station) => ({
          ...station,
          country: country,
        })),
      );
    }, []);

    // Pass 'true' to apply country prefix for all stations
    populateStations(allStations, true);
  } else if (radioStations[selectedCountry]) {
    // Show stations for the selected country without prefix
    populateStations(radioStations[selectedCountry], false);
  } else {
    // No stations available
    populateStations([], false);
  }
});

// Load the selected station
stationSelect.addEventListener("change", function () {
  const selectedStation = this.value;
  if (selectedStation) {
    audioPlayer.src = selectedStation;
    audioPlayer.hidden = false; // Show the audio player controls
  } else {
    audioPlayer.hidden = true; // Hide if no station selected
  }
});

// Handle theme toggle - optimized version
themeToggle.addEventListener("change", function () {
    const isDarkMode = this.checked;
    requestAnimationFrame(() => {
        document.body.classList.toggle("dark-mode", isDarkMode);
        document.querySelector(".radio-player").classList.toggle("dark-mode", isDarkMode);
        localStorage.setItem("darkMode", isDarkMode);
    });
});

// Initialize the player - optimized version
window.onload = function () {
    populateCountries();
    
    if (localStorage.getItem("darkMode") === "true") {
        themeToggle.checked = true;
        requestAnimationFrame(() => {
            document.body.classList.add("dark-mode");
            document.querySelector(".radio-player").classList.add("dark-mode");
        });
    }
};
