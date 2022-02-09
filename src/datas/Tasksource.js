import React, {useContext, useState, useEffect}  from 'react';
import db from '../config/firebaseDb'
// import { ApplicationContext } from '../pages/TaskHomePage'

let list=[]

// async function demoInitialize(db) {
//   // [START demo_initialize]
//   // Fetch data from Firestore
//   const snapshot = await db.collection('tasks').get();  

//   // Print the ID and contents of each document
//   snapshot.forEach(doc => {
//     console.log(doc.id, ' => ', doc.data());
//   });
//   // [END demo_initialize]
// }

// demoInitialize(db)

// db.collection("tasks").get().then((querySnapshot) => {        
//   // Loop through the data and store
//   // it in array to display
//   querySnapshot.forEach(element => {
//       var data = element.data();
  
//       list.push({id : data.id, title: data.title, state: data.state, dateEnd: data.dateEnd})              
            
//   }); 
  
// })

// export const Tasksource = list

/////////////////////////////////////////////////////////////////////////////
const ref = db.collection('tasks')

console.log("REFERENCE", ref)
console.log("default 000 =>",list)

export function DataSource(){
// const {store, setStore} = useContext(ApplicationContext);
const [data, setData] = useState([])
const [loader, setLoader] = useState(true)

// console.log("STORAGEEEEEE=>",store.stateList[0])

function getData(){
  ref.onSnapshot((querySnapshot) => {
    const items = []
    querySnapshot.forEach((doc) => {
      items.push(doc.data())
      // list.push({id : data.id, title: data.title, state: data.state, dateEnd: data.dateEnd})
    })
    setData(items)
    setLoader(false)
    list = items

  })
}
  useEffect(()=> {
    getData()
    console.log("Dityrambique DATA", data)
    
  })

  // return list
  // store.stateList[1](list)

}

export const Tasksource = list

console.log("NUVIBZ", list)




