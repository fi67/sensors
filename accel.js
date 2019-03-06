const status = document.getElementById('status');

if("LinearAccelerationSensor" in window){
  navigator.permissions.query({ name: "accelerometer" }).then(result => {
    
    if (result.state != 'granted') {
      status.innerText = 'Permission not granted';
      return;
    }

    const sensor = new LinearAccelerationSensor({frequency: 60});

    sensor.addEventListener('reading', e => {
      status.innerHTML = "Linear acceleration along the X-axis " + sensor.x + "<br />";
      status.innerHTML += "Linear acceleration along the Y-axis " + sensor.y + "<br />";
      status.innerHTML += "Linear acceleration along the Z-axis " + sensor.z + "<br />";
    });

    sensor.addEventListener('error', e => {
      status.innerText = e.message;
    });

    sensor.start();
  });
  
} else {
  status.innerText = 'Not supported by browser'; 
}
