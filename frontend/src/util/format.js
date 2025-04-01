export function formatTime(date) {
  const datePart = new Date(date).toLocaleDateString('sv-SE', { 
      weekday: 'long',  // Full weekday name
      year: 'numeric',  
      month: 'long',    
      day: '2-digit'    
  });

  const timePart = new Date(date).toLocaleTimeString('sv-SE', { 
      hour: '2-digit',  
      minute: '2-digit', 
      second: '2-digit', 
      hour12: false
  });

  return `${datePart} kl. ${timePart}`;
}
