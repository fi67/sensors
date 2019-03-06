const status = document.getElementById('status');
let myVal = 0;
if ( 'AmbientLightSensor' in window ) {
  const sensor = new AmbientLightSensor();
  sensor.onreading = () => {
    status.innerText = `'Current light level: ${sensor.illuminance}`;
    myVal = Math.floor(sensor.illuminance);
    
  document.body.style.backgroundColor = `rgb(${myVal}, ${myVal}, ${myVal})`;
  };
  sensor.onerror = (event) => {
    status.innerText = `${event.error.name} ${event.error.message}`;
  };
  sensor.start();
} else {
  status.innerText = 'Not supported by browser'; 
}
