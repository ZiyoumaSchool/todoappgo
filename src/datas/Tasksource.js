import React, {useContext, useState}  from 'react';
import db from '../config/firebaseDb'
// import {createContext, useState} from 'react';
import { ApplicationContext } from '../pages/TaskHomePage';

// export const ApplicationContextSource = createContext();

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
   //   console.log("data ",data)
      list.push({id : data.id, title: data.title, state: data.state, dateEnd: data.dateEnd})              
     // setInfo(arr => [...arr , data]);
        
  });
 // console.log("result bd=====>",list)
 
  
})
console.log("default 000 =>",list)

const storeSource = list

let source = []


//export const Tasksource = defaultTasks1


export default function Tasksource() {

  const {store, setStore} = useContext(ApplicationContext);

  store.stateList[1](storeSource)
  // store.stateList[1](store.stateList[0].filter(item=>item.state!==""))

  source = store.stateList[0]
  console.log("StoreSource", source)

  // const defaultTasks1 = list 

  return (
    <div>
       {/* <ApplicationContext.Provider value={{state1, setState1}}>
       <ApplicationContextSource.Provider value={{storeSource}}>
    
       </ApplicationContextSource.Provider> */}
   </div>
       

   )


}
console.log("StoreSource505555", source)
export let TasksourceList = source


// export const Tasksource = [
//     {
//       id: 1,
//       title: 'The Godfather25',
//       dateEnd: 'Tue Jan 14 2022 12:06:37 GMT+0100',
//       state: 'TASK_PINNED'
//     },
//     {
//       id: 2,
//       title: 'Inception',
//       dateEnd: 'Tue Jan 16 2022 12:06:37 GMT+0100',
//       state: 'TASK_ARCHIVED'
//     },
//     {
//       id: 3,
//       title: 'Fight Club',
//       dateEnd: 'Tue Jan 11 2022 12:06:37 GMT+0100',
//       state: 'TASK_ARCHIVED'
//     },
//     {
//       id: 4,
//       title: 'Pulp Fiction',
//       dateEnd:'Tue Jan 15 2022 12:06:37 GMT+0100',
//       state: 'TASK_ARCHIVED'
//     },
//     {
//       id: 5,
//       title: 'Forrest Gump',
//       dateEnd: 'Tue Jan 18 2022 12:06:37 GMT+0100',
//       state: 'TASK_PINNED'
//     },
//     {
//       id: 6,
//       title: 'The Matrix',
//       dateEnd: 'Tue Jan 20 2022 12:06:37 GMT+0100',
//       state: 'TASK_INBOX'
//     },
//     {
//       id: 7,
//       title: 'Spirited Away',
//       dateEnd: 'Tue Jan 28 2022 12:06:37 GMT+0100',
//       state: 'TASK_INBOX'
//     },
//     {
//       id: 8,
//       title: 'Interstellar',
//       dateEnd: 'Tue Jan 21 2022 12:06:37 GMT+0100',
//       state: 'TASK_INBOX'
//     },
//     {
//       id: 9,
//       title: 'The Usual Suspects',
//       dateEnd: 'Tue Jan 31 2022 12:06:37 GMT+0100',
//       state: 'TASK_INBOX'
//     },
//     {
//       id: 10,
//       title: 'The Departed',
//       dateEnd: 'Tue Jan 18 2022 12:06:37 GMT+0100',
//       state: 'TASK_ARCHIVED'
//     },
//   ];