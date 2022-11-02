let outPutScreen = document.getElementById('inputText')

function display(sign) {
    outPutScreen.value += sign
}

function clean() {
    outPutScreen.value = ""
}

function deleted() {
    outPutScreen.value = outPutScreen.value.slice(0, -1)
}
function count() {
    try{ 
        outPutScreen.value = eval(outPutScreen.value);
    } catch(error){
        alert('invalid')
    }
}