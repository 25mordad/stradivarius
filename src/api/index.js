import axios from 'axios';


export const SlideDress = (orientation) => {
    try {

      return axios({
      method: 'get',
      url: 'https://api.unsplash.com/search/photos/?client_id=HDGvszfww_N-dDzhZZuIQ6lk5V7vMHBK982dmdQR3E8&query=dress&orientation='+orientation,

      });

    } catch (e) {
      console.log(e);
    }
}

export const Handbag = (orientation) => {

    try {

      return axios({
      method: 'get',
      url: 'https://api.unsplash.com/search/photos/?client_id=HDGvszfww_N-dDzhZZuIQ6lk5V7vMHBK982dmdQR3E8&query=handbag&orientation='+orientation,

      });
    } catch (e) {
      console.log(e);
    }
}

export const Exclusive = (orientation) => {

  try {
    return axios({
    method: 'get',
    url: 'https://api.unsplash.com/search/photos/?client_id=HDGvszfww_N-dDzhZZuIQ6lk5V7vMHBK982dmdQR3E8&query=scarves&orientation='+orientation,

    });
  } catch (e) {
    console.log(e);

  }

}
