// controllers.js
// Controller for the Home Page
const getHomePage = (req, res) => {
    res.send('Welcome to the Blood Donation Home Page');
  };
  
  // Controller for the About Us Page
  const getAboutUsPage = (req, res) => {
    res.send('Learn more about our Blood Donation organization');
  };
  
  // Controller for the Find Blood Page
  const getFindBloodPage = (req, res) => {
    res.send('Find Blood Donors and Hospitals near you');
  };
  
  // Controller for the Register Page
  const getRegisterPage = (req, res) => {
    res.send('Register as a Blood Donor');
  };
  
  // Controller for the Register Organization Page
  const getRegisterOrganizationPage = (req, res) => {
    res.send('Register your Organization as a Blood Bank');
  };
  
  // Controller for the Dashboard Page
  const getDashboardPage = (req, res) => {
    res.send('User Dashboard - Manage your profile and donations');
  };
  
  // Controller for the Edit Profile Page
  const getEditProfilePage = (req, res) => {
    res.send('Edit Your Profile Information');
  };
  
  // Controller for the Sign In Page
  const getSignInPage = (req, res) => {
    res.send('Sign In to your Blood Donation account');
  };
  
  // Controller for the Contact Us Page
  const getContactUsPage = (req, res) => {
    res.send('Contact Us for any inquiries');
  };

//   post controller
  const postRegister = (req, res) => {
    console.log(req.body);
    res.json({message: req.body});
    res.send('Handling user registration (POST request)');
  };
  
  
  const postRegisterOrganization = (req, res) => {
    console.log(req.body);
    res.json({message: req.body});
    res.send('Handling organization registration (POST request)');
  };
  

  const postSignIn = (req, res) => {
    console.log(req.body);
    res.json({message: req.body});
    res.send('Handling user sign-in (POST request)');
  };
  
 
  const postEditProfile = (req, res) => {
    console.log(req.body);
    res.json({message: req.body});
    res.send('Handling user profile edit (POST request)');
  };
  
  module.exports = {
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
    postEditProfile,
  };
  