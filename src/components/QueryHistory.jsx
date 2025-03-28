import React from 'react';
import { useSelector } from 'react-redux';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import '../styles/components.css';

const QueryHistory = () => {
  const history = useSelector(state => state.queries.history);

  return (
    <div className="dashboard-card">
      <div className="p-3 border-b">
        <h2 className="font-medium text-gray-800">Query History</h2>
      </div>
      
      <div className="divide-y">
        {history.map((item, index) => (
          <div key={index} className="query-item hover:bg-gray-50">
            <div className="flex items-start gap-3">
              {index % 2 === 0 ? (
                <CheckIcon className="status-icon h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
              ) : (
                <XMarkIcon className="status-icon h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
              )}
              <div>
                <div className="timestamp text-xs text-gray-500 mb-1">
                  {new Date(item.timestamp).toLocaleTimeString([], { 
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                  })}
                </div>
                <div className="query-text text-sm text-gray-700 line-clamp-2">
                  {item.query}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {history.length === 0 && (
          <div className="p-4 text-center text-sm text-gray-500">
            No queries yet
          </div>
        )}
      </div>
    </div>
  );
};

export default QueryHistory;
