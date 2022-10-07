<template>
    <div class="about">
        <button @click="testarray">test</button>
    </div>
  </template>
  

  <script>
      export default {
        data()
        {
          return{
            "items": [
                {
                  "id": "2aef253b-752f-f1cd-029c-3a02c7d96c12",
                  "name": "PDF",
                  "nameAr": "PDF",
                  "parent": null,
                  "parentLookup": null,
                  "code": 1,
                  "enabled": false,
                  "lookupTypeId": "952d7913-a18e-d172-49d1-3a02b92e3968",
                  "lookupType": null,
                  "isDeleted": false,
                  "deleterId": null,
                  "deletionTime": null,
                  "lastModificationTime": null,
                  "lastModifierId": null,
                  "creationTime": "2022-03-23T09:27:40.5749447",
                  "creatorId": "9726dcaf-c7ed-d910-bb8a-3a02ba6ef356",
                  "extraProperties": {},
                  "concurrencyStamp": "d6d50fec7eb14387ba5aef6029ef9a9b"
                },
                {
                  "id": "f845954a-699d-f59e-7594-3a02c7d9bfcc",
                  "name": "Word",
                  "nameAr": "Word",
                  "parent": null,
                  "parentLookup": null,
                  "code": 2,
                  "enabled": false,
                  "lookupTypeId": "952d7913-a18e-d172-49d1-3a02b92e3968",
                  "lookupType": null,
                  "isDeleted": false,
                  "deleterId": null,
                  "deletionTime": null,
                  "lastModificationTime": null,
                  "lastModifierId": null,
                  "creationTime": "2022-03-23T09:28:01.9972058",
                  "creatorId": "9726dcaf-c7ed-d910-bb8a-3a02ba6ef356",
                  "extraProperties": {},
                  "concurrencyStamp": "b368e41ab70640c4834c86cf0fdef276"
                },
                {
                  "id": "246303da-c6fb-c774-0759-3a02c7d9feba",
                  "name": "Image",
                  "nameAr": "Image",
                  "parent": null,
                  "parentLookup": null,
                  "code": 3,
                  "enabled": false,
                  "lookupTypeId": "952d7913-a18e-d172-49d1-3a02b92e3968",
                  "lookupType": null,
                  "isDeleted": false,
                  "deleterId": null,
                  "deletionTime": null,
                  "lastModificationTime": null,
                  "lastModifierId": null,
                  "creationTime": "2022-03-23T09:28:18.1071474",
                  "creatorId": "9726dcaf-c7ed-d910-bb8a-3a02ba6ef356",
                  "extraProperties": {},
                  "concurrencyStamp": "cbcc005155044975964d47a9722cd7b6"
                }
              ],
              idmap:[],
              historyday:''
          }
        },
        methods:{
          testarray()
          {
            var arrayitems = this.items
            // using for each and push the staus to array items 
              arrayitems.forEach((item) => item.status = true);
              
          // using find 
            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let currentDate = `${day}-${month}-${year}`;
            console.log('currentDate is '+currentDate); 
            // فش تاريخ اكبر من تاريخ اليوم لهيك عكستها
            var historyday = arrayitems.find(history=>history.creationTime<currentDate)
            console.log(historyday)
            
            // using fillter to array items 
            var codeitem = arrayitems.filter(result => result.code >2)
            console.log(codeitem)

            // using map to array items 

            const idmap = arrayitems.map(elem => (
              {
                id: elem.id,
                code: elem.code,
              } 
            ))
            console.log(idmap)
          }
        }
      }
  </script>