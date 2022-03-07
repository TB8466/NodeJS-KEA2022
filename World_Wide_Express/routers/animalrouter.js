const router = require("express").Router();

router.get("/amountoffavanimails", (req,res) => {
    res.send({ data: "Does this work?"});
});


//2 ways of exporting
module.exports = {
    router
};
//You can only export once. The last one will overwrite anything else
module.exports = router;