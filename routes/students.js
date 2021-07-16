const router = require("express").Router();
let Student = require("../models/Student");

//this is the about student adding router
//methana me "/add" nisa http://localhost:8070/student/add kiyn ekat ynw
//this is the formal mechanism for the get value in req url
router.route("/add").post((req, res) => {  
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  const newStudent = new Student({
    name,
    age,
    gender,
  });
  //me save eken wenne me hdgtt newStudent kyn ibject ek databse ekat
  //psass krgnnw.
  //model eka haraha databse eketa pass krnw document ekk vidiht

  //when insert success
  newStudent
    .save()
    .then(() => {
      res.json("Student Added");
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error with update data." });
    });
});
//post is using when data insert and put is using when update


//http://localhost:8070/student methan "/" nisa aye me http eka
// agata mokuth en ne. meken wenne studentla seramatam adala wenw
router.route("/").get((req, res) => {
  //request eka success nam then eka athulat ynw ntnm catch
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
    });
});


//update section\
//http://localhost:8070/update/22222
//methanadi url eke /update ekata passe ena eka id ek vidihat fetch krgnnw
//id ek vitrk wnm gnn plwn. methka : aniwa dnn one
//put eken saha post dekenm data update krnn plwn
router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  // const name = req.body.name;
  // this is is the old mechanisam new is the destructure mechanism
  const { name, age, gender } = req.body;
  //receive the object from frontend
  const updateStudent = {
    name,
    age,
    gender,
  };
  const update = await Student.findByIdAndUpdate(userId, updateStudent)
    .then(() => {
      //if succesfull then you give status(200)
      res.status(200).send({ status: "User Updated." });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with update data.", error: err.message });
    });
});

//delete opersation
// router.route("/delete/:id").delete(async (req, res) => {
//   let userId = req.params.id;

//   await Student.findByIdAndDelete(userId).then(() => {
//     res.status(200).send({ status: "User deleted." })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).send({ status: "Error with update.", error: err.message });
//       });
//   });
// });

//get a data from onece user
// router.route("/get/:id").get(async (req, res) => {
//   let userId = req.params.id;
//   //this use the id, therefore we use findbyid, but we use userr email then we
//   //should use the findOne(primaryKey)
//   const user = await Student.findById(userId).then((student) => {
//     res.status(200).send({status: "user fetch", data: student})
//   }).catch((err) => {
//     console.log(err.message);
//     res.status(500).send({status: "Error with get user", error: err.message})
//   })
// })

//adding commit for checking 111
//adding commit for branches in checking

module.exports = router;
