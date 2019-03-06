window.addEventListener('userproximity', function(event) {
  if (event.near) {
    // let's power off the screen
    navigator.mozPower.screenEnabled = false;
    
    document.body.style.backgroundColor = '#000';
  } else {
    // Otherwise, let's power on the screen
    navigator.mozPower.screenEnabled = true;
    
    document.body.style.backgroundColor = '#fff';
  }
});


window.addEventListener('deviceproximity', function(e){
  document.body.innerText += e.value;
});

document.body.innerText += `deviceproximity in window ${"deviceproximity" in window}`;
document.body.innerText += `userproximity in window ${"userproximity" in window}`;
