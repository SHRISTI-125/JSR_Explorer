document.addEventListener("mousemove", (e) => {
    const bubbleCursor = document.getElementById("bubble-cursor");
    bubbleCursor.style.transform = `translate(${e.pageX - 10}px, ${e.pageY - 10}px)`;

    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);
    bubble.style.left = `${e.pageX}px`;
    bubble.style.top = `${e.pageY}px`;

    setTimeout(() => {
        bubble.remove();
    }, 1000);
});

