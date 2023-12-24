function Distance(coord1, coord2) {
    // Convert latitude and longitude from degrees to radians
    const toRadians = (angle) => angle * (Math.PI / 180);
    const dLat = toRadians(coord2.lat - coord1.lat);
    const dLon = toRadians(coord2.lon - coord1.lon);

    // Haversine formula
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(coord1.lat)) * Math.cos(toRadians(coord2.lat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Earth radius in kilometers
    const R = 6371;

    // Calculate the distance in meters
    const distance = R * c * 1000;

    return distance;
}

export default Distance;
