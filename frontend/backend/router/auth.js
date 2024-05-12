const express = require('express');
const router = express.Router();
const donorSchema = require("../validators/auth-validator");
const hospitalSchema = require("../validators/auth-validator2");
const validate = require("../middlewares/validate-middleware");
const{
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
// const hospitalSchema = require('../model/hospitalSchema');

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
router.post('/Register', validate(donorSchema), postRegister);
router.post('/RegisterOrganization', validate(hospitalSchema), postRegisterOrganization);
router.post('/SignIn', postSignIn);
router.post('/EditProfile', postEditProfile);

module.exports = router;
