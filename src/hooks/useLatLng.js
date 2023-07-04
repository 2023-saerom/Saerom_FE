import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
const [location, setLocation] = useState({
    latitude: 10, longitude: 10
});

useEffect(() => {
    const getCurrentLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
        position => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
        },
        error => {
            console.error(error);
            setLocation(null);
        }
        );
        } else {
        console.error('Geolocation is not supported by this browser.');
        setLocation(null);
        }
    };

    getCurrentLocation();
    }, []);

    return location;
};

export default useCurrentLocation;
