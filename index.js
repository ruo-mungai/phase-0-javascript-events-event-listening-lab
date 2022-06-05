function addingEventListener(){
    const input = document.getElementById('input');
    input.addEventListener('click', function(){alert('I was clicked')});
}

//callback: arrow function
function addingEventListenerArr(){
    const input = document.getElementById('input');
    input.addEventListener('click', () => alert('I was clicked'));
}