var express = require("express");
var router = express.Router();
const {
  getAllTestmonial,
  createTestmonial,
  findTestmonialById,
  updateTestmonial,
  deleteTestmonial,
} = require("../../controllers/testmonial.controller");
const { validate } = require("express-validation");
const {
  createTestimonial,
  updateTestimonial,
  deletetestimonial,
} = require("../../models/testmonial.validation");

/**
 * Route to return get all trstmonial
 * @method GET/
 * @name testmonial
 */
router.get("/", getAllTestmonial);

/**
 * Route to return get single testmonial
 * @method GET/
 * @name find_testmonial_by_id
 */
router.get("/:testmonialId", findTestmonialById);

/**
 * Route to return create testmonial object
 * @method POST/
 * @name craeteTestmonial
 */
router.post("/", validate(createTestimonial), createTestmonial);

/**
 * Route to return update testmonial object
 * @method PUT/
 * @name updateTestmonial
 */
router.put("/:testmonialId", validate(updateTestimonial), updateTestmonial);

/**
 * Route to return delete testmonial object
 * @method DELETE/
 * @name deleteTestmonial
 */
router.patch("/:testmonialId", validate(deletetestimonial), deleteTestmonial);

module.exports = router;
