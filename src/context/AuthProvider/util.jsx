import api from '../../service/api';
import Api from '../../service/login';

export function setUserLocalStorage(user) {
  localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('u');

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  if (user) {
    api.defaults.headers.common['Authorization'] = `${user.token}`;
  }

  return user ?? null;

  export async function LoginRequest(email, password) {
    try {
      const response = await Api.post('/login', { email, password });
      if (response.data.auth === true) {
        setErrors({ email: '' });
        return response.data;
      } else {
        setErrors({ email: 'Email inexistente' });
      }
    } catch (error) {
      return null;
    }
  }
}
