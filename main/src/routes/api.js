const express=require('express');
const BrandController = require("../controllers/BrandController");
const CategoryController = require("../controllers/CategoryController");
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");
const ProfileController = require("../controllers/ProfileController");
const InvoiceController = require("../controllers/InvoiceController");
const AuthVerification = require("../middlewares/AuthVerification");

const router=express.Router();

// Brand Category
router.get('/BrandList',BrandController.BrandList)
router.get('/CategoryList',CategoryController.CategoryList)


// Product
router.get('/ListByCategory/:categoryID',ProductController.ListByCategory)
router.get('/ListBySmilier/:categoryID',ProductController.ListBySmilier)
router.get('/ListByBrand/:brandID',ProductController.ListByBrand)
router.get('/ListByRemark/:remark',ProductController.ListByRemark)
router.get('/SliderList',ProductController.SliderList)
router.get('/ListByKeyword/:keyword',ProductController.ListByKeyword)


router.get('/WishList',AuthVerification,ProductController.WishList)
router.post('/CreateWishList',AuthVerification,ProductController.CreateWishList)
router.post('/RemoveWishList',AuthVerification,ProductController.RemoveWishList)

router.get('/CartList',AuthVerification,ProductController.CartList)
router.post('/CreateCartList',AuthVerification,ProductController.CreateCartList)
router.post('/RemoveCartList',AuthVerification,ProductController.RemoveCartList)





router.get('/ListReview',ProductController.ListReview)
router.get('/ProductDetails',ProductController.ProductDetails)









// User
router.get('/UserLogin/:email',UserController.UserLogin)
router.get('/VerifyLogin/:email/:otp',UserController.VerifyLogin);


// Profile
router.post('/CreateProfile',AuthVerification,ProfileController.CreateProfile);
router.post('/UpdateProfile',AuthVerification,ProfileController.UpdateProfile)
router.get('/ReadProfile',AuthVerification,ProfileController.ReadProfile)


// Invoice
router.get('/InvoiceCreate',AuthVerification,InvoiceController.InvoiceCreate)
router.get('/InvoiceList',AuthVerification,InvoiceController.InvoiceList)
router.get('/InvoiceProductList',AuthVerification,InvoiceController.InvoiceProductList)


router.get('/PaymentSuccess',InvoiceController.PaymentSuccess)
router.get('/PaymentCancel',InvoiceController.PaymentCancel)
router.get('/PaymentFail',InvoiceController.PaymentFail)
router.get('/PaymentIPN',InvoiceController.PaymentIPN)

module.exports=router;