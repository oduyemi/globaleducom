import { clearCookie } from '../../CookieUtils';


export const handleLogout = () => {
    if (getCookie('userId')) {
        clearCookie('userId');
        window.location.href = '/login';
      } else {
        window.location.href = '/';
      }
    };
  