import useCurrentLocation from "./useCurrentLocation";

export default function CurrentLocation() {
  const { location, error, loading, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      <button onClick={getCurrentLocation}>Get Current Location</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
}
