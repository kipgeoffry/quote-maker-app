const {Router} = require("express");

const router = Router();

const family = [{
    name: "kigen",
    Age: 20,
    family: {
        father: "Moses",
        mother: "penina",
        children: ["june", "Jael"]
    }
},
{
    name:"evans",
    Age:30,
    family:{
        father:"John",
        siblings:["mark","Grace","Jeptoo"]
    }
}
];

router.get("/",(req,res)=>{
    res.json(family);
})

router.get("/:name", (req, res) => {
    let {name} = req.params;
    const personFamily = family.find((fam)=>fam.name == name );
    res.send(personFamily);

});

module.exports = router;