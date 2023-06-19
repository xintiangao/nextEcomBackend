import express from 'express';
import prisma from '../utils/prisma.js';
import { isAuthenticated } from '../utils/auth.js';

const router = express.Router();

router.post('/photos', isAuthenticated, async (req, res) => {
  // Access the authenticated user's information
  const { userId } = req.user;

  // Access the uploaded file from the request
  const file = req.file;

  // Handle the file upload and save it to the database or storage
  // Here, you can use Prisma to save the file information to the database
  try {
    const uploadedPhoto = await prisma.photo.create({
      data: {
        userId,
        fileName: file.filename,
        // Add other relevant information about the photo
      },
    });

    // Send a success response
    res.status(200).json({ success: true, photo: uploadedPhoto });
  } catch (error) {
    // Handle any errors that occur during the upload process
    console.error('Error uploading photo:', error);
    res.status(500).json({ success: false, error: 'Failed to upload photo' });
  }
});

export default router;
