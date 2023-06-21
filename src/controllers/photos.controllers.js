import express from 'express';
import prisma from '../utils/prisma.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

  router.post('/', auth, async (req, res) => {
    const data = req.body;

    try {
      const uploadedPhoto = await prisma.photos.create({
        data: {
          id: data.id,
          file:data.file,
          UserId: req.user.payload.id,
          name: data.name,
          title: data.title,
          price: data.price,
          description: data.description
        },
      });

      res.status(200).json({ success: true, photos: uploadedPhoto });
    } catch (error) {

      console.error('Error uploading photo:', error);
      res.status(500).json({ success: false, error: 'Failed to upload photo' });
    }
  });

  router.get('/', async (req,res) => {
    const photos = await prisma.photos.findMany();
    res.json(photos)
  });
  
  router.delete('/:id', auth, async (req, res) => {
    const photos = await prisma.photos.findUnique({
      where: {
        id: req.params.id
      }
    })
    // we have access to `req.user` from our auth middleware function (see code above where the assignment was made)
    if (req.user.id != photos.user_id) {
        return res.status(401).send({"error": "Unauthorized"})
    }
  });

export default router;
