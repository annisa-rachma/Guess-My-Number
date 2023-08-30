

//jalan kalau submit diklik
function simpanNama() { 
    let nama = document.getElementById("input-box").value; // Get the current value from the input element
    
    // Retrieve the existing names from local storage
    let savedNames = localStorage.getItem('names');
    
    // Convert the saved string of names to an array
    let namesArray = savedNames ? JSON.parse(savedNames) : [];
    
    // Check if the name already exists in the array
    if (namesArray.includes(nama)) {
        alert("Nama sudah terdaftar!"); // Alert if name already exists
    } else {
        // Add the new name to the array
        namesArray.push(nama);
        
        // Save the updated array back to local storage
        localStorage.setItem('names', JSON.stringify(namesArray));
        
        // Clear the input field for the next name
        document.getElementById("input-box").value = "";
    }
}
//localStorage.getItem(name);




