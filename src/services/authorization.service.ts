import { Credentials } from '@/models';
import base64 from 'base-64';

export const login = (data: Credentials) => {
  fetch('https://apingweb.com/api/login', {
    method: 'POST',
    headers: new Headers({
      Authorization: 'Bearer ' + base64.encode('admin : 12345'),
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.error(error));
};
