// A function to call on successful location retrieval
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  console.log('Location retrieved successfully.');
  console.log(`Latitude: ${latitude}`);
  console.log(`Longitude: ${longitude}`);
  console.log('done');
}

// A function to handle errors
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Options for a more accurate result
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

// Request the user's current position
navigator.geolocation.getCurrentPosition(success, error, options);


