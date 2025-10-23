// Performance monitoring script
if (typeof window !== 'undefined' && window.performance) {
  window.addEventListener('load', () => {
    // Wait a bit for everything to settle
    setTimeout(() => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const connectTime = perfData.responseEnd - perfData.requestStart;
      const renderTime = perfData.domComplete - perfData.domLoading;
      
      console.log('⚡ Performance Metrics:');
      console.log(`Total Load Time: ${(pageLoadTime / 1000).toFixed(2)}s`);
      console.log(`Server Response: ${(connectTime / 1000).toFixed(2)}s`);
      console.log(`DOM Render: ${(renderTime / 1000).toFixed(2)}s`);
      
      // Log resource timing for large assets
      if (window.performance.getEntriesByType) {
        const resources = window.performance.getEntriesByType('resource');
        const largeResources = resources
          .filter(r => r.transferSize > 100000) // > 100KB
          .sort((a, b) => b.transferSize - a.transferSize);
        
        if (largeResources.length > 0) {
          console.log('📦 Large Resources (>100KB):');
          largeResources.forEach(r => {
            console.log(`  ${r.name.split('/').pop()}: ${(r.transferSize / 1024).toFixed(0)}KB in ${(r.duration / 1000).toFixed(2)}s`);
          });
        }
      }
    }, 0);
  });
}
