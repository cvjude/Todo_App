import axios from 'axios';

const patterns = {
  title: /^[^\n]{2,30}$/,
  dscription: /^[^\n]{2,255}$/,
};

export const validate = (field, Regex) => {
  if (patterns[Regex].test(field)) return true;
  return false;
};

export const validateInput = (event) =>
  validate(event.target.value, event.target.attributes.name.value);

const baseurl =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '';

export const axiosInstance = axios.create({
  baseURL: `${baseurl}/api/v1`,
  headers: {
    'Access-Control-Allow-Headers':
      'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type',
    'Access-Control-Allow-Origin': '*',
  },
});
