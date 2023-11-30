# Tequila Service Package

This npm package provides functionalities to interact with the Tequila API for flight search and location information.

## Installation

To install the Tequila Service Package, use npm:
```bash
    npm install online-travel-tequila-service
```


## Usage

### TequilaService

The `TequilaService` class initializes the Tequila API service. It provides access to two main functionalities: location and flight search.

#### Example:

```typescript
import { TequilaService } from 'install online-travel-tequila-service';

// Initialize Tequila Service
const tequilaService = new TequilaService({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://api.tequila.kiwi.com',
});

// Access location service
const locationService = tequilaService.location;

// Access flight search service
const searchService = tequilaService.search
```


### TequilaLocationService

#### Example:

```typescript
import { TequilaLocationService } from 'install online-travel-tequila-service';

// Initialize Tequila Location Service
const locationService = new TequilaLocationService({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://api.tequila.kiwi.com',
});

// Example: Search location by query
const locationQuery = await locationService.searchByQuery({
  term: 'New York',
  limit: 10,
});
```

or


```typescript
import { TequilaService } from 'install online-travel-tequila-service';

// Initialize Tequila Service
const tequilaService = new TequilaService({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://api.tequila.kiwi.com',
});

// Access location service
const locationService = tequilaService.location;

// Example: Search location by query
const locationQuery = await locationService.searchByQuery({
  term: 'New York',
  limit: 10,
});
```


### TequilaSearchService

#### Example:

```typescript
// Initialize Tequila Search Service
import { TequilaSearchService } from 'install online-travel-tequila-service';

// Initialize Tequila Search Service
const searchService = new TequilaSearchService({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://api.tequila.kiwi.com',
});

// Example: Search flights
const flightResults = await searchService.searchFlights({
  fly_from: 'NYC',
  fly_to: 'LAX',
  date_from: '2023-12-01',
  date_to: '2023-12-05',
});

```

or


```typescript
import { TequilaService } from 'install online-travel-tequila-service';

// Initialize Tequila Service
const tequilaService = new TequilaService({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://api.tequila.kiwi.com',
});

// Access search service
const searchService = tequilaService.search

// Example: Search flights
const flightResults = await searchService.searchFlights({
  fly_from: 'NYC',
  fly_to: 'LAX',
  date_from: '2023-12-01',
  date_to: '2023-12-05',
});
```