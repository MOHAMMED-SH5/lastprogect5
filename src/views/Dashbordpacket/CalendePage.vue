<template>
    <div class="about">
          <button @click="viewdata">viewdata</button>
    </div>
  </template>
  
  <script>
    export default {
      data()
      {
        return {
          viewdata()
          {
            let name="6"
            let newvalue = parseInt(name,10)
            console.log('type '+typeof newvalue)
            console.log(newvalue)
          }
        }
      }
    }
  </script>