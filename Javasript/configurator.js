var preferences = {
    color: '',
    season: '',
    gender: '',
    type: '',
}

function updatePreferences() {
    let colorSelector = document.getElementById('color');
    preferences.color = colorSelector.options[colorSelector.selectedIndex].text;

    let seasonSelector = document.getElementById('season');
    preferences.season = seasonSelector.options[seasonSelector.selectedIndex].value;

    let genderSelector = document.getElementById('gender');
    preferences.gender = genderSelector.options[genderSelector.selectedIndex].value;

    let typeSelector = document.getElementById('type');
    preferences.type = typeSelector.options[typeSelector.selectedIndex].value;
}