# Estfor API Wrapper

A TypeScript wrapper for the Estfor Kingdom API.

## Installation

```bash
npm install estfor-api-wrapper
```

## Usage

### Browser

```html
<script src="node_modules/estfor-api-wrapper/dist/bundle.js"></script>
<script>
    const api = new EstforApiClient();
    
    // Example: Get all actions
    api.getActions()
        .then(actions => console.log(actions))
        .catch(error => console.error(error));
</script>
```

### Node.js / TypeScript

```typescript
import { EstforApiClient } from 'estfor-api-wrapper';

const api = new EstforApiClient();

// Example: Get all actions
const actions = await api.getActions();
console.log(actions);
```

### Configuration

You can configure the base URL when creating the client:

```typescript
const api = new EstforApiClient({
    baseUrl: 'https://api.estfor.com' // Default is http://localhost:4004
});
```

## Available Methods

- `getActions()` - Get all actions
- `getActionById(id)` - Get action by ID
- `getActionChoices(actionId)` - Get choices for an action
- `getActivities()` - Get all activities
- `getActivitiesByUser(userAddress)` - Get activities for a specific user
- `getAvatars()` - Get all avatars
- `getCoreData()` - Get core game data
- `getTerritories()` - Get all territories
- `getPriceLevels()` - Get price levels

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build
```

## License

MIT 