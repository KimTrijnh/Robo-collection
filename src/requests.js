// import React from 'react'

// // const url = `http://localhost:3001/Candidates`;

// async function getData () {
//   const url = `http://localhost:3001/Candidates`;
//     try {
//       let response = await fetch(url);
//       let json = await response.json();
//       this.setState({ candidates: json, isLoading: false }, console.log(json));
//     } catch (err) {
//       alert(err);
//     }
//   }

//   export default getData

// async function delCandidate () {
// try {
//     let response = await fetch(url, {
//         method: 'DELETE',
//         header : {
//           "Content-Type": "application/json"
//         }
//     })
// } catch(err) {
//     alert(err);
// }
//   }

// async function postCandidate (firstName, lastName, gender) {
//     const formData = new FormData()
//     formData.append('first_name', firstName )
//     formData.append('last_name', lastName)
//     formData.append('Gender', gender)
//     try {
//       let response = await fetch(url, {
//         method: 'POST',
//         header : {
//           "Content-Type": "application/json"
//         },
//         body: formData
//       }) 
//     } catch(err) {
//       alert(err)
//     }
//   }

// //   export default {getData, delCandidate, postCandidate }