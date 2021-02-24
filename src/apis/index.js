/* eslint-disable camelcase */
// import libs
import { create } from 'apisauce';

const API_URI = process.env.REACT_APP_API_URL;

export const ROUTES = {
  // Auths
  SIGN_IN: `/auth/login`,
  SIGN_UP: `/auth/register`,
  CHECK_EMAIL: '/email/check',
  GET_LIST_FAVORITE: `/videos/favorite`,
  GET_LIST_HISTORY_FAVORITE: `/videos/previously`,
  GET_LIST_GENRES: `/genres`,
  GET_LIST_EVENT: `/events`,
  ADD_GENES: `/interests`,
  LOGOUT: `/auth/logout`,
  PROFILE: `/profiles`,
  UPDATE_PROFILE: `/profiles`,
  LOGIN_SOCIAL: '/auth/login-social',
  LANGUAGE: `/languages`,
  WITHDRAW_MEMBER: '/users/withdraw-membership',
  MAKING_ENQUIRY: `/requests`,
  GET_ENQUIRY: `/requests`,
  PAYMENT_HISTORY: `/users/payment-history`,
  SUBSCRIBE_PAYMENT_HISTORY: `/users/subscribe`,
  UNSUBSCRIBE_PAYMENT_HISTORY: `/users/unsubscribe`,
  SETTING_LANGUAGE: `/languages`,
  GET_NOTICE: `/notices`,
  PUSH_NOTIFICATION: `/pushs/user`,
  RESEND_EMAIL: '/auth/resend-mail',
  GET_POINT: '/users/point-history',
  CREATE_POINT: '/users/point',
  GET_TOTAL_POINT: '/users/point',

  // main page
  API_LIST_RECOMMENDED_USER: `/videos/interest`,
  API_MAIN: `/main`,
  API_LIST_RECOMMENDED: `/videos/recommend/auto`,
  API_LIST_TODAY_WORD: `/vocabularies/today`,
  API_GET_LIST_HOT_STAR: `/videos/hot-star`,
  UPDATE_AVATAR: `profiles/avatar`,
  FIND_PASSWORD: `password/find`,
  GET_EVENT_DETAIL: (id) => `/events/${id}`,
  GET_VIDEOS_BY_GENRE: (genre_id, page) =>
    `/videos/genres/${genre_id}?page=${page}`,
  GET_VIDEOS_BY_EXCITING_FEELING: (id) => `/videos/exciting-feeling/${id}`,
  GET_SEARCH_HISTORY: `/videos/search`,
  SEARCH_KEYWORD: `/videos/search/keywords`,
  DELETE_ITEMS_SEARCH: (item) => `/videos/search/${item}`,
  VIDEO_DETAIL: (id) => `/videos/${id}/detail`,
  GET_VIDEO_DAY: `/videos/today`,
  GET_VIDEO_WEEKLY: `/videos/weekly`,
  NON_MEMBER: `/guest/main`,
  DELETE_FAVORITE: (favorite) => `/videos/favorite/${favorite}`,
  DELETE_HISTORY_FAVORITE: (id) => `/videos/previously/${id}`,
  GET_VIDEO_CATEGORY: (id) => `/categories/${id}`,
  GET_ALL_VIDEO_CONTENTS: `/videos/all`,
};

export const API = create({
  baseURL: API_URI,
});
