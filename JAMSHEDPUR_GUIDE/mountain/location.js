fetch('mountain/data.json')
.then(response => response.json())
.then(data => {
    const locationsContainer = document.getElementById('locations');
    data.forEach(location => {
        const hills = document.createElement('div');
        hills.classList.add('location');
        hills.innerHTML = `
            <h3>${location.name}</h3>
            <img src="${location.image}">
            <p><strong>About:</strong> ${location.about}</p>
            <p><strong>Address:</strong> ${location.address}</p>
        `;
        locationsContainer.appendChild(hills);
    });
})

