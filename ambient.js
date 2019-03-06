const status = document.getElementById('status');
if ( 'AmbientLightSensor' in window ) {
  const sensor = new AmbientLightSensor();
  sensor.onreading = () => {
    status.innerText = `'Current light level: ${sensor.illuminance}`;
    
  document.body.style.backgroundColor = `rgb(${sensor.illuminance}, ${sensor.illuminance}, ${sensor.illuminance}`;

    
    
  };
  sensor.onerror = (event) => {
    status.innerText = `${event.error.name} ${event.error.message}`;
  };
  sensor.start();
} else {
  status.innerText = 'Not supported by browser'; 
}
