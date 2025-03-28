import React from 'react';
import { useSelector } from 'react-redux';
import { 
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer 
} from 'recharts';
import '../styles/components.css';

const ResultDisplay = () => {
  const { currentResult, isLoading, error } = useSelector(state => state.queries);

  if (isLoading) {
    return (
      <div className="dashboard-card">
        <div className="p-4 flex justify-center">
          <div className="loading-spinner" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-card">
        <div className="p-4 text-red-500">{error}</div>
      </div>
    );
  }

  if (!currentResult) {
    return null;
  }

  const { data, query } = currentResult;
  const queryLower = query.toLowerCase();
  const isTrend = queryLower.includes('trend');
  const isRegional = queryLower.includes('region');
  
  const ChartComponent = isTrend ? LineChart : BarChart;
  const DataComponent = isTrend ? Line : Bar;

  // Set correct keys based on query type
  let xKey, yKey;
  if (isTrend) {
    xKey = 'month';
    yKey = 'value';
  } else if (isRegional) {
    xKey = 'region';
    yKey = 'sales';
  } else {
    xKey = 'category';
    yKey = 'revenue';
  }

  return (
    <div className="dashboard-card">
      <div className="chart-container aspect-[16/9] p-4">
        <ResponsiveContainer width="100%" height="100%">
          <ChartComponent data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey={xKey}
              tick={{ fontSize: 12, fill: '#666' }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#666' }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '4px'
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, '']}
            />
            <DataComponent
              type={isTrend ? "monotone" : undefined}
              dataKey={yKey}
              stroke="#3b82f6"
              fill="#3b82f6"
              strokeWidth={2}
            />
          </ChartComponent>
        </ResponsiveContainer>
      </div>

      <div className="data-summary border-t p-3">
        <div className="grid grid-cols-2 gap-4">
          {data.slice(0, 2).map((item, index) => (
            <div key={index} className="data-summary-item text-sm">
              <span className="data-summary-label text-gray-500">{item[xKey]}: </span>
              <span className="data-summary-value text-gray-900 font-medium">${item[yKey].toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;