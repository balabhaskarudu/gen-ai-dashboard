export const generateMockData = (query) => {
    const isTrendQuery = query.toLowerCase().includes('trend');
    const categories = ['Electronics', 'Apparel', 'Home Goods', 'Sports'];
    const regions = ['North', 'South', 'East', 'West'];
  
    if (isTrendQuery) {
      return Array.from({ length: 6 }, (_, i) => ({
        month: `Month ${i + 1}`,
        value: Math.floor(Math.random() * 4000) + 1000
      }));
    }
  
    if (query.toLowerCase().includes('region')) {
      return regions.map(region => ({
        region,
        sales: Math.floor(Math.random() * 5000) + 2000,
        profit: Math.floor(Math.random() * 2000) + 500
      }));
    }
  
    return categories.map(category => ({
      category,
      revenue: Math.floor(Math.random() * 8000) + 3000,
      units: Math.floor(Math.random() * 500) + 100
    }));
  };