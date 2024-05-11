const express = require('express');
const router = express.Router();

const {
  getHomePage,
  getAboutUsPage,
  getFindBloodPage,
  getRegisterPage,
  getRegisterOrganizationPage,
  getDashboardPage,
  getEditProfilePage,
  getSignInPage,
  getContactUsPage,
  postRegister,
  postRegisterOrganization,
  postSignIn,
  postEditProfile
} = require('./controller'); // Import your controllers

// Define routes
router.get('/', getHomePage);
router.get('/Home', getHomePage);
router.get('/AboutUs', getAboutUsPage);
router.get('/FindBlood', getFindBloodPage);
router.get('/Register', getRegisterPage);
router.get('/RegisterOrganization', getRegisterOrganizationPage);
router.get('/Dashboard', getDashboardPage);
router.get('/EditProfile', getEditProfilePage);
router.get('/SignIn', getSignInPage);
router.get('/contact-us', getContactUsPage);

// post request
router.post('/Register', postRegister);
router.post('/RegisterOrganization', 
postRegisterOrganization);
router.post('/SignIn', postSignIn);
router.post('/EditProfile', postEditProfile);

module.exports = router;
