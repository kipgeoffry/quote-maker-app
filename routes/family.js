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

router.get("/:name", (req, res) => {
    console.log(req.params);
    let {name} = req.params
    const personFamily = family.find((fam)=>fam.name == name );
    res.json(personFamily);

});

module.exports = router;