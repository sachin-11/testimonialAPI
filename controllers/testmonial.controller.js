const TestmonialModel = require("../models/testmonial.model");
const { sendSuccessResponse, sendErrorResponse } = require("../utils/response");
const constants = require("../utils/constants");
const messageConstants = require("../utils/messageConstants");

/**
 * @method get
 * @description for get all Testimonial
 * @returns {object}
 */
exports.getAllTestmonial = async (req, res) => {
  try {
    const testmonial = await TestmonialModel.find().lean();
    sendSuccessResponse(res, {
      data: testmonial,
    });
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

/**
 * @method get
 * @description for get single testmonial
 * @returns {object}
 */
exports.findTestmonialById = async (req, res) => {
  try {
    const { testmonialId } = req.params;
    const testmonial = await TestmonialModel.findById(testmonialId).lean();
    sendSuccessResponse(res, {
      data: testmonial,
    });
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

/**
 * @method post
 * @description for create Testmonial
 * @returns {object}
 */
exports.createTestmonial = async (req, res) => {
  try {
    const { photo, name, post, description } = req.body;

    const createTestmonial = await TestmonialModel({
      photo,
      name,
      post,
      description,
    }).save();

    sendSuccessResponse(res, {
      message: messageConstants.testimonial.TESTIMONIAL_CREATE_SUCCESS,
      data: createTestmonial,
    });
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

/**
 * @method put
 * @description for update Testmonial
 * @returns {object}
 */
exports.updateTestmonial = async (req, res) => {
  try {
    const { name, post, description, active } = req.body;

    const { testmonialId } = req.params;
    const updateTestmonial = await TestmonialModel.findByIdAndUpdate(
      testmonialId,
      {
        name,
        post,
        description,
        active: active ? active : 0,
      },
      { new: true }
    );

    sendSuccessResponse(res, {
      message: messageConstants.testimonial.UPDATE_TESTIMONIAL_SUCCESS,
      data: updateTestmonial,
    });
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

/**
 * @method delete
 * @description for delete testmonial
 * @returns {object}
 */
exports.deleteTestmonial = async (req, res) => {
  try {
    const { testmonialId } = req.params;
    const { active } = req.body;
    await TestmonialModel.findByIdAndUpdate(testmonialId, {
      active: active ? active : 0,
    });
    sendSuccessResponse(res, {
      message: messageConstants.testimonial.REMOVE_TESTIMONIAL_SUCCESS,
    });
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};
