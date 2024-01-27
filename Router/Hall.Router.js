import express from 'express';

import { BookARoom, BookedCustomers, BookedRooms, CreateRoom, FindCustomerDetails } from '../Controller/Hall.Controller.js';

const router = express.Router();



router.post('/hall/createroom', CreateRoom);
router.post('/hall/book', BookARoom)
router.get('/hall/bookedrooms', BookedRooms)
router.get("/hall/allcustomers", BookedCustomers);
router.get('/hall/customerdetails', FindCustomerDetails)



export default router;