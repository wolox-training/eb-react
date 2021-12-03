import { create } from 'apisauce';
import LocalStorageService from 'services/LocalStorageService';
import { camelize } from '../utils/camelize';

const baseURL = process.env.REACT_APP_API_BASE_URL;

if (baseURL === process.env.REACT_APP_API_BASE_URL) {
  console.warn('API baseURL has not been properly initialized'); // eslint-disable-line no-console
}

const STATUS_CODES = {
  unauthorized: 401,
};

const api = create({
  baseURL,
  timeout: 15000,
});

api.addResponseTransform((response) => {
  if (response.ok) {
    response.data = camelize(response.data);
  }
});

api.addRequestTransform((req) => {
  const storageService = LocalStorageService;

  let accessToken = storageService.getValue('access-token');
  if (accessToken) {
    let uid = storageService.getValue('uid');
    let client = storageService.getValue('client');

    req.headers['uid'] = uid;
    req.headers['client'] = client;
    req.headers['access-token'] = accessToken;
  }
});

// eslint-disable-next-line no-unused-vars, prettier/prettier, @typescript-eslint/no-unused-vars
export const apiSetup = (dispatch) => {
  api.addMonitor((response) => {
    if (response.status === STATUS_CODES.unauthorized) {
      /*
       * TODO: These callbacks should only be called if no other callback was asigned for the response.
       * - dispatch(alertActions.error(i18next.t('apiErrors:expired')));
       */
    }
  });

  api.addMonitor((response) => {
    if (response.problem === 'NETWORK_ERROR') {
      // TODO: These callbacks should only be called if no other callback was asigned for the response.
    }
  });
};

export default api;
