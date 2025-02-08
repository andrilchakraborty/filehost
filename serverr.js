const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    if (file) {
        const fileUrl = `/uploads/${file.filename}`;
        res.json({ success: true, url: fileUrl });
    } else {
        res.json({ success: false, message: 'File upload failed' });
    }
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
