document.querySelector(".check-button").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .try-again").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});
document.querySelector(".popup .back-home").addEventListener("click", function(){
    window.location.href="home.html"
});
//jalan kalau submit diklik
function simpanNama() { 
    let nama = document.getElementById("input-box").value; // Get the current value from the input element
    
    if (nama === "") {
        Swal.fire('Nama harus diisi!'); // Alert if the input box is empty
        return; // Exit the function without further processing
    }
    
    // Retrieve the existing names from local storage
    let savedNames = localStorage.getItem('names');
    
    // Convert the saved string of names to an array
    let namesArray = savedNames ? JSON.parse(savedNames) : [];
    
    // Check if the name already exists in the array
    if (namesArray.includes(nama)) {
        // Redirect to game.html even if the name is already registered
        window.location.href = "game.html";
        return; // Exit the function without saving the duplicate name
    } else {
        // Add the new name to the array
        namesArray.push(nama);
        
        // Save the updated array back to local storage
        localStorage.setItem('names', JSON.stringify(namesArray));
        
        // Redirect to game.html after successful submission
        window.location.href = "game.html";
    }
}
//localStorage.getItem(name);




