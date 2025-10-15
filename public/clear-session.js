// Simple script to clear session storage for testing intro video
// Add ?clear=true to URL to clear session storage
if (window.location.search.includes('clear=true')) {
  sessionStorage.clear();
  console.log('Session storage cleared');
}
