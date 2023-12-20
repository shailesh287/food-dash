export async function getLocation() {
  try {
    if ("geolocation" in navigator) {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      // console.log(position);

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );

      const data = await res.json();

      console.log(data, "=============");

      //   console.log('Latitude: ' + latitude);
      //   console.log('Longitude: ' + longitude);

      return { longitude, latitude, city: data.address?.city };
    } else {
      throw new Error("Geolocation is not supported in your browser");
    }
  } catch (error) {
    console.error("Error getting location: " + error.message);
  }
}
