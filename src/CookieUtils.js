export const getCookie = (name) => {
  console.log("Getting cookie:", name);
  const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith(`${name}=`));
  return cookie ? cookie.split('=')[1] : null;
};
  
export const setCookie = (name, value, options = {}) => {
  console.log("Setting cookie:", name, value);

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

  if (options.secure && window.location.protocol === 'https:') {
    cookieString += '; secure';
  }

  if (options.httpOnly) {
    cookieString += '; HttpOnly';
  }

  document.cookie = cookieString;
};

  export const clearCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };