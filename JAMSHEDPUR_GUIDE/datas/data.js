fetch("datas/info.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("company").textContent = data.industries.description;
    document.getElementById("hospital").textContent = data.hospitals.description;
})