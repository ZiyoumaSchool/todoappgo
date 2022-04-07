import React, {useContext, useState}  from 'react';
import db from '../config/firebaseDb'

let list=[]

async function demoInitialize(db) {
  // [START demo_initialize]
  // Fetch data from Firestore
  const snapshot = await db.collection('tasks').get();  

  // Print the ID and contents of each document
  snapshot.forEach(doc => {
    console.log(doc.id, ' => ', doc.data());
  });
  // [END demo_initialize]
}

demoInitialize(db)

db.collection("tasks").get().then((querySnapshot) => {        
  // Loop through the data and store
  // it in array to display
  querySnapshot.forEach(element => {
      var data = element.data();
  
      list.push({id : data.id, title: data.title, state: data.state, dateEnd: data.dateEnd})              
            
  }); 
  
})
console.log("default 000 =>",list)

export const Tasksource = list


