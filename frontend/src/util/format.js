export function formatTime(date) {
  const datePart = new Date(date).toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',  
      month: 'long',    
      day: 'numeric'    
  });

  const timePart = new Date(date).toLocaleTimeString('en-US', { 
      hour: '2-digit',  
      minute: '2-digit',
      hour12: true
  });

  return `${datePart}, ${timePart}`;
}
