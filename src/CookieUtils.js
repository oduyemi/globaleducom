export const getCookie = (name) => {
  console.log("Getting cookie:", name);
  const cookies = document.cookie.split(';').map(cookie => cookie.trim().split('='));
  const cookieMap = new Map(cookies);
  return cookieMap.get(name) || null;
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

  cookieString += '; SameSite=None; Secure';

  document.cookie = cookieString;
};

  export const clearCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };