import React, { useState } from "react";
import BucketForm from "./BucketForm";
import Bucket from "./Bucket";

function BucketList() {
  const [bucket, setBucket] = useState([]);
  const [doEdit, setEditState] = useState(false);
  // Function to add a bucket list item
  const addBucketItem = (item) => {
    if(item.text === "") return;
    setBucket((preState) => {
      return [...preState, item];
    });
  };

  // Function to mark bucket list item as complete
  const completeBucketItem = (id) => {
    // console.log(id,item);
    let targetId = parseInt(id.target.getAttribute('data-key'));
    // let updatedBucket = 
    bucket.map((item) => {
      if (item.id === targetId) {
        id.target.parentElement.classList.toggle('complete');
      }
    });
    //setBucket(updatedBucket);
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    let realId = parseInt(id.target.parentElement.parentElement.getAttribute('data-key') );
     setBucket( 
      bucket.filter( (obj)=>{
         if(obj.id === realId){
           return false;
         } 
         return true;
       }) 
     );
  };

  // Function to edit the bucket list item
  const editBucketItem = (itemId, newValue) => {
    if(doEdit){
      setEditState(false );
    } else {
      setEditState(true );
    }
    
    // Make sure that the value isn't empty

    // // So we want to change the edi tin the bucketform to true
    // // then when it's update 
    // if (!newValue.text) {
    //   return;
    // }
    // // We use the "prev" argument provided with the useState hook to map through our list of items
    // // We then check to see if the item ID matches the id of the item that was clicked and if so, we set it to a new value
    // setBucket((prev) =>
    //   prev.map((item) => (item.id === itemId ? newValue : item))
    // );
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} edit={doEdit}/>
      <Bucket
        bucket={bucket} // that's just the data
        completeBucketItem={completeBucketItem} // this is the compete form.
         removeBucketItem={removeBucketItem}
         editBucketItem={setEditState}
      ></Bucket>
    </div>
  );
}

export default BucketList;
