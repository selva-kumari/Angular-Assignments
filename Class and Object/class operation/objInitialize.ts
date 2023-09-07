
var arrObj=[
   
    {
        id:120,
        name:"vj",
        role:"developer",
        Department:
        {
         dept:"cs"
        },
        Activity:[
            {
            club:"literary",
            physical:"Ncc"
            }
        ]
    },
    {
        id:80,
        name:"moni",
        role:"fullstack",
        Department:
        {
         dept:"it"
        },
        Activity:[
            {
            club:"Yrc",
            physical:"Nss"
            }
        ]
    },
    {
        id:101,
        name:"selva",
        role:"developer",
        Department:
        {
         dept:"ai"
        },
        Activity:[
            {
            club:"Rb",
            physical:"Ncc"
            }
        ]
     }
]
for(var i=0;i<arrObj.length;i++){
    console.log(`
          Id            :: ${arrObj[i].id}
          Name          :: ${arrObj[i].name}
          Role          :: ${arrObj[i].role}
          Department    :: ${arrObj[i].Department.dept}
    `)
    arrObj[i].Activity.forEach((item) => {
        console.log(`
          Club          :: ${item.club}
          Physical      :: ${item.physical}
        `)
    });
    
}

