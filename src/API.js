
import React from 'react'

const baseUrl = 'http://localhost:3000/'
const bookUrl = baseUrl + 'books'
const readingsUrl = baseUrl + 'readings/'
const userReadingsUrl = baseUrl + 'userreadings'
const userReadBooksUrl = baseUrl + 'userreadbooks'
const userWantToReadBooksUrl = baseUrl + 'userwanttoreadbooks'
const userCurrentlyReadingBooksUrl = baseUrl + 'usercurrentlyreadingbooks'
const signInUrl = baseUrl + 'signin'
const validateUrl = baseUrl + 'validate'
const signUpUrl = baseUrl + 'signup'
const googleApiUrl = 'https://www.googleapis.com/books/v1/volumes?q='
const getReadingUrl = baseUrl + '/readings/'
const deleteReadingUrl = baseUrl + '/reading/'


    const get = (url) => 
        fetch(url)
        .then(resp => resp.json())

    
    const getwithauth = (url) =>
        fetch(url, {
            headers: {
            Authorization: localStorage.token
            }
        }).then(resp => resp.json()) 
    
    const post = (url, data) => 
        fetch(url, {
            method: 'POST',
            headers:{
                Authorization: localStorage.token,
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())

    const patch = (url, data, id) =>
        fetch(url + id, {
            method: 'PATCH',
            headers:{
                Authorization: localStorage.token,
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())

    const destroy = (url, id) => 
        fetch(url + id,{
            method:'DELETE'
        })


    const signUp = (username, password, passwordConfirmation) => post(signUpUrl, {user: {username, password, password_confirmation: passwordConfirmation}})

    const getReadBooks = () => getwithauth(userReadBooksUrl)

    const getWantToReadBooks = () => getwithauth(userWantToReadBooksUrl)

    const getCurrentlyReadingBooks = () => getwithauth(userCurrentlyReadingBooksUrl)

    const getUserReadings = () => getwithauth(userReadingsUrl)

    const signIn = (username, password) => post(signInUrl, { username, password })

    const validate  = () => getwithauth(validateUrl)

    const searchBook = (searchTerm) => get(googleApiUrl + searchTerm)

    const saveBook = (data) => post (bookUrl, data)

    const saveReading = (data) => post (readingsUrl,data)

    const patchStatus = (data, id) => patch(readingsUrl, data, id)

    const getReading = (id) => get(getReadingUrl + id)

    const deleteReading = (id) => destroy(deleteReadingUrl + id)

    


export default { getReadBooks, getWantToReadBooks, getCurrentlyReadingBooks, getUserReadings, signIn, validate, signUp, searchBook, saveBook, saveReading, patchStatus, getReading, deleteReading}

