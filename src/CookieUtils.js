export const getCookie = (name) => {
    const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith(`${name}=`));
    return cookie ? cookie.split('=')[1] : null;
  };
  
  export const setCookie = (name, value, options = {}) => {
    let cookieString = `${name}=${value}`;
  
    if (options.expires) {
      const expires = new Date(options.expires).toUTCString();
      cookieString += `; expires=${expires}`;
    }
  
    if (options.path) {
      cookieString += `; path=${options.path}`;
    }
  
    if (options.domain) {
      cookieString += `; domain=${options.domain}`;
    }
  
    if (options.secure) {
      cookieString += '; secure';
    }
  
    if (options.httpOnly) {
      cookieString += '; HttpOnly';
    }
  
    document.cookie = cookieString;
  };
  