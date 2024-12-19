const { Schema, default: mongoose } = require('mongoose');
const express = require('express');
const cors = require('cors');

const ContactDataSchema = new Schema({
  email: String,
  role: String,
  restOfData: String,
});

const ContactDataModel = mongoose.model('ContactData', ContactDataSchema);

async function handleContactDataUpload(req, res) {
  const { email, role } = req.body;

  const newContactData = new ContactDataModel({
    email,
    role,
    restOfData: JSON.stringify(req.body),
  });
  const savedContactData = await newContactData.save();
  res.json(savedContactData);
}

async function main() {
  const mongo_uri = process.env.MONGO_URI;
  if (!mongo_uri) {
    throw new Error('MONGO_URI is not defined');
  }
  await mongoose.connect(mongo_uri);

  const app = express();
  app.use(express.json());

  // cors
  app.options('*', cors());
  app.use(cors({
    origin: 'https://althea-assistance.fr',
    methods: ['POST', 'OPTIONS'],
    credentials: true,
  }));

  app.post('/contact', handleContactDataUpload);
  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });
}

main().catch((err) => console.error(err));
