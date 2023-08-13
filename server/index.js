import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

let receivedData = null; // Store the received data

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// below password and username needs to be changed 
mongoose.connect('mongodb+srv://rajveerscs20:<password>@cluster0.qka9tyb.mongodb.net/?retryWrites=true&w=majority', {
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Configure multer for file upload
const storage = multer.memoryStorage(); // Store files as buffers in memory
const upload = multer({ storage });


const formDataSchema = new mongoose.Schema({
    name: String,
    phone: String,
    selectedFile: String,
    image: {
      data: Buffer, // Store the image data as a binary buffer
      contentType: String, // Store the content type (e.g., image/jpeg, image/png)
      originalName: String, // Store the original name of the uploaded file
      size: Number, // Store the size of the image in bytes
    },
    latitude: String,
    longitude: String,
  });
  
  const FormData = mongoose.model('FormData', formDataSchema);

  app.post('/users', upload.single('image'), async (req, res) => {
    const { name, phone, latitude, longitude } = req.body;
  
    const formData = new FormData({
        name,
        phone,
        latitude,
        longitude,
        selectedFile: req.file.originalname, // Store the original file name
        image: req.file.buffer, // Store the image binary data
      });
    
      try {
        await formData.save();
        res.status(200).json({ message: 'Data saved successfully' });
        // console.log(req.file.buffer); this helps to see the image converted to buffer
      } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ message: 'Error saving data' });
      }
    });