import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
  FETCH_JOBS,
  LIKE_JOB,
  CLEAR_LIKED_JOBS
} from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript'
};

const buildJobsUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

const GITHUB_BASE_URL = 'https://jobs.github.com/positions.json?';
 
export const fetchJobs = ({longitude, latitude}, callback) => {
 console.log('longitude  = ', longitude);
 console.log('latitude  = ', latitude);

    return async (dispatch) => {
        try {
            const url = `${GITHUB_BASE_URL}lat=${latitude}&long=${longitude}`;
 console.log(url)
            let {data} = await axios.get(url);
            
            dispatch({
                type: FETCH_JOBS,
                payload: data.map(d => {
                  d.longitude = longitude;
                  d.latitude = latitude;
                  return d;
                })
            });
            callback();
 
        } catch (err) {
            console.log("Something went wrong... ", err);
        }
    }
};

export const likeJob = (job) => {
  return {
    payload: job,
    type: LIKE_JOB
  };
};

export const clearLikedJobs = () => {
  return { type: CLEAR_LIKED_JOBS };
};