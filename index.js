const display = document.getElementById('display');

function AppendDisplay(data) {
    display.value += data;
}
function ClearDisplay() {
    display.value = '';
}

function Calculate() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value='Error'
    }
}
function Delete() {
    display.value =display.value.toString().slice(0, -1);
}