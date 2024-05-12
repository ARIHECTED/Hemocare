// controllers.js
const bcrypt = require('bcryptjs');
// import { Request, Response } from 'express';
// import jwt = require('jsonwebtoken');
// import UserModel from './../models/UserModel';
// const userModel = new UserModel();

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
  
  // Controller for the donor Register Page
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

//   post controller for donor
const donor = require('../model/donarSchema');
  const postRegister = async(req, res) => {
    try{
      const{ fullName, Email, Password, Address, Phone, Age, bloodGroup, LastDonation, disease } = req.body;
      console.log(fullName, Email, Password, Address, Phone, Age, bloodGroup, LastDonation, disease);
      const exiuser = await donor.findOne({ Email });
      if(exiuser){
        // let response = res.status(400).json({message:'Donor already exist'});
        return res.status(400).json({message:'Donor already exist'});
        // if(res.status === 400 && response.message === 'Donor already exist'){
        //   alert("User already exist");
        // }
      }
      // Hash the password
      const hashedPassword2 = await bcrypt.hash(Password, 10);
      // new user instance
      const newUser = new donor({
        fullName,
        Email,
        Password: hashedPassword2,
        Address,
        Phone,
        Age,
        bloodGroup,
        LastDonation,
        disease,
      });
      await newUser.save();
      return  res.status(201).json({message: 'Donor Register Successfully'});
    }catch(error){
      console.error('Error during user registration:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  const hospital = require('../model/hospitalSchema');
  const postRegisterOrganization = async(req, res) => {
    try {
      const { hospital_name, Email, Password, Address, Phone } = req.body;
      console.log(hospital_name, Email, Password, Address, Phone);
  
      // Check if the email is already registered
      const existingUser = await hospital.findOne({ Email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(Password, 10);
  
      // Create a new user instance
      const newUser = new hospital({
        hospital_name,
        Email,
        Password: hashedPassword,
        Address,
        Phone,
      });
  
      // Save the user to the database
      await newUser.save();
  
      return res.status(201).json({ message: 'Organization registered successfully' });
    } catch (error) {
      console.error('Error during organization registration:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  const SignIn = require('../model/signInSchema')
  const postSignIn = async (req, res) => {
    try {
      const {Email, Password } = req.body;
      const user = await SignIn.findOne({ Email }); 
      // if user not found
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
      // compare password with hashed password
      const validPassword = await bcrypt.compare(Password, user.Password);
      if(validPassword){
          return res.json({ message: "Sign-in Successfully", user });
      }else{
          return res.status(401).json({ message: 'Invalid Password!' })
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      return res.status(500).json({message:'Internal-server error'});
    }
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
  