var arrObj = [
    {
        id: 120,
        name: "vj",
        role: "developer",
        Department: {
            dept: "cs"
        },
        Activity: [
            {
                club: "literary",
                physical: "Ncc"
            }
        ]
    },
    {
        id: 80,
        name: "moni",
        role: "fullstack",
        Department: {
            dept: "it"
        },
        Activity: [
            {
                club: "Yrc",
                physical: "Nss"
            }
        ]
    },
    {
        id: 101,
        name: "selva",
        role: "developer",
        Department: {
            dept: "ai"
        },
        Activity: [
            {
                club: "Rb",
                physical: "Ncc"
            }
        ]
    }
];
for (var i = 0; i < arrObj.length; i++) {
    console.log("\n          Id            :: ".concat(arrObj[i].id, "\n          Name          :: ").concat(arrObj[i].name, "\n          Role          :: ").concat(arrObj[i].role, "\n          Department    :: ").concat(arrObj[i].Department.dept, "\n    "));
    arrObj[i].Activity.forEach(function (item) {
        console.log("\n          Club          :: ".concat(item.club, "\n          Physical      :: ").concat(item.physical, "\n        "));
    });
}
