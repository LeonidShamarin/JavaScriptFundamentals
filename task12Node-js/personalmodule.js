function greeting(userName) {
    const now = new Date();
    const hour = now.getHours();
  
    let greetingMessage = '';
  
    if (hour >= 0 && hour < 6) {
      greetingMessage = 'Good night';
    } else if (hour >= 6 && hour < 12) {
      greetingMessage = 'Good morning';
    } else if (hour >= 12 && hour < 18) {
      greetingMessage = 'Good afternoon';
    } else {
      greetingMessage = 'Good evening';
    }
  
    return `${greetingMessage}, ${userName}`;
  }
  
  module.exports = { greeting };
  