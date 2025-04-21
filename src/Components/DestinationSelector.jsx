const DestinationSelector = ({ tours, selectedDestination, onSelect }) => { // DestinationSelector component to filter tours by destination
    const uniqueDestinations = ['all', ...new Set(tours.map(tour => tour.name))]; // Getting unique destinations from the tours array
  
    return (
      <div className="destination-selector"> 
        <label htmlFor="destination">Select Destination:</label>
        <select
          id="destination"
          value={selectedDestination}
          onChange={(e) => onSelect(e.target.value)} // Handling selection change
        >
          {uniqueDestinations.map((destination, index) => ( // Mapping unique destinations
            <option key={index} value={destination}>
              {destination === 'all' ? 'All Destinations' : destination} 
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default DestinationSelector; // Exporting the DestinationSelector component