let status = document.getElementById('status');
    if ( 'Gyroscope' in window ) {
      let sensor = new Gyroscope();
      sensor.addEventListener('reading', function(e) {
        status.innerHTML = 'x: ' + e.target.x + '<br> y: ' + e.target.y + '<br> z: ' + e.target.z;
      });
      sensor.start();
    }
    else status.innerHTML = 'Gyroscope not supported';
