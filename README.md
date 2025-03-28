# Gen AI Analytics Dashboard

A React-based analytics dashboard that visualizes data based on natural language queries. The dashboard supports trend analysis, regional comparisons, and category performance visualization.

## Features

- 📊 Interactive data visualization with charts
- 🔍 Natural language query interface
- 📜 Query history tracking
- 📈 Support for multiple visualization types:
  - Line charts for trend analysis
  - Bar charts for regional comparisons
  - Bar charts for category performance

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (check your version with `node -v`)
  - For Node.js v16 or v18: No special configuration needed
  - For Node.js v20+: Uses legacy OpenSSL provider  run(configured in package.json)
- npm (v6.0.0 or higher, check with `npm -v`)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gen-ai-dashboard
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

The command to start the app depends on your Node.js version:

### For Node.js v16 or v18 (Recommended)
```bash
npm start
```

### For Node.js v20 or higher
Option 1 (using package.json configuration - recommended):
```bash
npm start
```

Option 2 (manual setting - if option 1 doesn't work):
```bash
# Windows PowerShell
$env:NODE_OPTIONS="--openssl-legacy-provider" ; npm start

# Windows Command Prompt
set NODE_OPTIONS=--openssl-legacy-provider && npm start

# Linux/Mac
export NODE_OPTIONS=--openssl-legacy-provider && npm start
```

The app will be available at:
```
http://localhost:3000
```

### Troubleshooting

If you see the error `error:0308010C:digital envelope routines::unsupported`:

1. **Check Node.js Version**
```bash
node -v
```

2. **If using Node.js v20+**, try these solutions in order:

   a. Use the configured start command:
   ```bash
   npm start
   ```

   b. Set OpenSSL provider manually:
   ```bash
   # Windows PowerShell
   $env:NODE_OPTIONS="--openssl-legacy-provider" ; npm start
   
   # Windows Command Prompt
   set NODE_OPTIONS=--openssl-legacy-provider && npm start
   
   # Linux/Mac
   export NODE_OPTIONS=--openssl-legacy-provider && npm start
   ```

   c. Reset project (if still having issues):
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Remove node_modules
   rm -r node_modules
   
   # Reinstall dependencies
   npm install
   
   # Start the app
   npm start
   ```

3. **Alternative Solution**: Downgrade to Node.js v18
   - Download Node.js v18 from [Node.js website](https://nodejs.org/)
   - Reinstall and try `npm start` again

## Sample Queries

Try these example queries to get started:

1. Trend Analysis:
   - "Show sales trend"
   - "Show monthly trend"
   - "Show revenue trend"

2. Regional Analysis:
   - "Show regional sales"
   - "Regional performance"
   - "Show sales by region"

3. Category Analysis:
   - "Show category sales"
   - "Category performance"
   - "Product categories"

## Project Structure

```
gen-ai-dashboard/
├── src/
│   ├── components/
│   │   ├── QueryInput.jsx      # Search input component
│   │   ├── QueryHistory.jsx    # History tracking component
│   │   └── ResultDisplay.jsx   # Chart visualization component
│   ├── store/
│   │   ├── store.js           # Redux store configuration
│   │   └── queriesSlice.js    # Redux slice for query management
│   ├── utils/
│   │   └── mockData.js        # Mock data generation
│   ├── styles/
│   │   └── components.css     # Component styles
│   └── App.js                 # Main application component
├── package.json
└── README.md
```

## Dependencies

- React
- Redux Toolkit (for state management)
- Recharts (for data visualization)
- Heroicons (for icons)
- Tailwind CSS (for styling)

## Development

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

### Styling

The project uses Tailwind CSS for styling. Components are styled using:
- Utility classes for layout and spacing
- Custom CSS classes for specific components
- Responsive design patterns

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
