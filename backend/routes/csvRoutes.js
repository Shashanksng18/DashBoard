const express = require("express");
const csvController = require("../controllers/csvController");
const multer = require("multer");
const router = express();

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage});

router.post("/read_csv", upload.single("file"), csvController.read_csv);

router.get("/get_csv_data", csvController.get_csv_data)

module.exports = router;