const completeButtons = document.querySelectorAll(".completeBtn");
const completedCount = document.getElementById("completedCount");
const pendingCount = document.getElementById("pendingCount");


function handleComplete(event) {

    const button = event.target;
    button.disabled = true;
    button.style.backgroundColor = 'white';
    button.style.color = 'black';  

    alert("Great job! Keep completing your tasks.");

    let completed = parseInt(completedCount.innerText);
    let pending = parseInt(pendingCount.innerText);

    if (pending > 0) {
        completedCount.innerText = completed - 1;
        pendingCount.innerText = pending + 1;
    } else {
        alert("No more pending tasks!");
    }
}



completeButtons.forEach(button => {
    button.addEventListener("click", handleComplete);
});