const express = require("express")

const server = express() 


server.use(express.json())


const school =[
    [
        {name: "Asimiyu Temitope", regNo: "12344767", dOb:"12/7/2000", state:"Osun state", gender:"Female"},
        {name: "Charles Duru", regNo:" 9876541", dOb:"12/7/1999", state:"Ogunstate", gender:"male"},
        {name: "Ola kemi", regNo:" 12344767", dOb:"12/4/2020", state:"Osun state", gender:"Female"},
        {name: "Samuel Chukwu", regNo: "12344767",dOb:"1/7/2002", state:"Rivers state", gender:"male"},
        {name: "Anayawu Justice", regNo: "12344767", dOb:"2/7/2004", state:"Enugu state", gender:"male"},
      
    ],
    [
        {name: "Adeleke Temitope", regNo:" 12344767", dOb:"3/7/2000", state:"Osun state", gender:"Female"},
        {name: "Benson Jeffrey", regNo: "98765413", dOb:"12/7/1999", state:"Ogun state", gender:"male"},
        {name: "Olamide Ayuba", regNo: "12344767", dOb:"12/4/2020", state:"Ekiti state", gender:"male"},
        {name: "David Ezi", regNo: "12344767", dOb:"1/7/2002", state:"Rivers state", gender:"male"},
        {name: " Justice Frank", regNo:" 12344767", dOb:"2/7/2020", state:"Enugu state", gender:"male"},
      
    ],
    [
        {name: "Mariam Abdul", regNo: "12344767", dOb:"12/7/2000", state:"Osun state", gender:"Female"},
        {name: "Uthman Yahya", regNo:" 09876564", dOb:"12/7/1999", state:"Taraba state", gender:"male"},
        {name: "Ololade Asake", regNo: "1234098", dOb:"12/4/2021", state:"Ogun state", gender:"Female"},
        {name: "Hassan Banke", regNo: "12344767",dOb:"1/7/2007", state:"Benin state", gender:"male"},
        {name: "Abdul Ghafar", regNo:" 98978765", dOb:"2/9/2001", state:"Kano state", gender:"male"},
      
    ]
   
   
   
]

server.get("/school", (req, res)=> {
    res.json(school)

} )



//const sssOne = [
    //     { name: "Blessing Joy", regNo: "0266543", gender: "female", dob: "14/07/1993", state: "Rivers State"},
    //     { name: "Benjamin oke", regNo: "7654027", gender: "male", dob: "07/12/1993", state: "Delta state"},
    //     { name: "Isa Abdulahi", regNo: "0654328", gender: "male", dob: "23/1/2002", state: "Borno state"},
    //     { name: "Zainab Dapo", regNo: "6543029", gender: "female", dob: "29/02/1994", state: "Osun state"},
    //     { name: "Favour Okon", regNo: "0376540", gender: "female", dob: "06/08/1993", state: "Akwaibom state"}
    // ]


    server.post("/another", (req, res) =>{

        const sssOne = req.body
    
        res.json([school, sssOne])
    })

server.listen(5000, () =>{
    console.log("server is here..")

})