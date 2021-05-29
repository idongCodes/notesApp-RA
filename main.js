// get notes key helper function
function getNoteId() {
    // If nothing in text field, return 1
    let noteObject = getExistingNotes();

    if(!noteObject){
        return 1;
    }

    // retrieve keys for each local storage entry
    const keysArray = Object.keys(noteObject);

    // Convert keys to number value
    const numberKeys = keysArray.map((key)=>Number(key));

    return Math.max(...numberKeys) + 1;
}

// Helper function to retrieve notes from local storage
function getExistingNotes(){
    // Saving notes items to variable
    let notes = localStorage.getItem('notes');

    // Return null if no notes exist
    if(!notes){
        return null;
    }

    // Return notes Object vs string
    return JSON.parse(notes);
}