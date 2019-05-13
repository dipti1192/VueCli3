
import axios from 'axios';
export default class ServerProxy {
  serverRequest(data) {
    const authOptions = {
      method: data.method,
      url: data.url,
      mode: 'cors',
      headers: data.headers,
      json: true,
    };
    if (data.body) {
      authOptions.data = data.body;
    }

    return new Promise((resolve) => {
      axios(authOptions)
        .then((json) => {
          setTimeout(() => {
            return resolve(json);
          }, 500)
        })
        .catch(err => resolve({
          error: err,
        }));
    });


  }


}

