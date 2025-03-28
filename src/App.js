import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import QueryInput from './components/QueryInput';
import QueryHistory from './components/QueryHistory';
import ResultDisplay from './components/ResultDisplay';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <h1 className="text-xl font-semibold text-center text-gray-800">Gen AI Analytics</h1>
          </div>
        </header>
        
        <main className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3">
              <QueryHistory />
            </div>
            <div className="col-span-9">
              <div className="space-y-4">
                <QueryInput />
                <ResultDisplay />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;