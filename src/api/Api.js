import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  .then(response => {
    return response.data;
  })
}

export const getProfile = (userId = 2) => {
  return instance.get(`profile/${userId}`)
  .then(response => {
    return response.data;
  })
}

export const getStatus = (userId) => {
  return instance.get(`profile/status/${userId}`)
  .then(response => {
    return response.data;
  })
}

export const updateStatus = (status) => {
  return instance.put(`profile/status`, {status: status})
  .then(response => {
    return response.data;
  })
}