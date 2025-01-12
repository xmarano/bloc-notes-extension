const note = document.getElementById('note');
const clearButton = document.getElementById('clear');

// Load note
chrome.storage.sync.get('savedNote', (data) => {
    note.value = data.savedNote || '';
});

// Save note at every modification
note.addEventListener('input', () => {
    chrome.storage.sync.set({ savedNote: note.value });
});
