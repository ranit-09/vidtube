import multer from "multer";
import fs from "fs";
import path from "path";

const uploadDir = "public/temp";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadDir);
  },
  filename(req, file, cb) {
    const ext = path.extname(file.originalname);
    const safeName = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, safeName);
  },
});

export const upload = multer({ storage });


/*
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

export const upload = multer({ 
    storage: storage,
 })
*/