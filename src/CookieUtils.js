export const getCookie = (name) => {
  console.log("Getting cookie:", name);
  console.log("All cookies:", document.cookie);
  
  const cookieRegex = new RegExp(`(?:^|;)\\s*${name}=([^;]*)`);
  const match = document.cookie.match(cookieRegex);
  
  console.log("Cookie match:", match);
  
  return match ? match[1] : null;
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