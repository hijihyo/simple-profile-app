import { Router } from 'express';
import { signup, signin, signout, confirmSession, getProfiles, getProfile, getMyProfile } from '../controllers';

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signout', signout);
router.get('/session', confirmSession);
router.get('/profile/:id', getProfile);
router.get('/profile', getProfiles);
router.get('/myprofile', getMyProfile);

export default router;