import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from astropy.time import Time
from astropy.coordinates import SkyCoord, EarthLocation, AltAz
from astropy import units as u

# Function to plot the night sky using Hipparcos star data
def plot_night_sky(lat, lon, time, star_data_file):
    # Load star data from CSV
    star_data = pd.read_csv(star_data_file)
    names = star_data['Object'].values
    stars_ra = star_data['RA'].values
    stars_dec = star_data['DEC'].values

    # Convert to astropy SkyCoord object
    star_coords = SkyCoord(ra=stars_ra*u.degree, dec=stars_dec*u.degree, frame='icrs')

    # Observer's location and time
    observer_location = EarthLocation(lat=lat*u.deg, lon=lon*u.deg)
    observation_time = Time(time)

    # Convert to AltAz frame
    altaz_frame = AltAz(obstime=observation_time, location=observer_location)
    star_altaz = star_coords.transform_to(altaz_frame)

    # Plotting
    plt.figure(figsize=(10, 8))
    plt.scatter(star_altaz.az, star_altaz.alt, s=10, color='white', marker='*')
    for i in range(len(names)):
        plt.text(star_altaz.az[i].value, star_altaz.alt[i].value, ' ' + names[i], color='white', fontsize=8)
    plt.xlabel('Azimuth (degrees)')
    plt.ylabel('Altitude (degrees)')
    plt.title('Night Sky Map')
    plt.ylim(0, 90)  # Altitude ranges from 0 to 90 degrees
    plt.xlim(0, 360)  # Azimuth ranges from 0 to 360 degrees
    plt.gca().set_facecolor('black')
    plt.grid(True, color='gray')
    plt.show()

# Example usage
plot_night_sky(lat=51.984900, lon=20.957305, time='2023-12-06T21:55:00', star_data_file='hipparcos_data.csv')  # New York City, 10 PM UTC