// usar modelador
const Mscamp = require("../models/Mscamp.js");
const ErrorResponse = require("../utils/errorResponse.js");
const asyncHandler = require("../middleware/async.js");
/**
 * 
 * @desc obtener todo los info 
 * @route  GET /api/v1/mscamps
 * @access  PUBLICO
 */

exports.getMsCamps = asyncHandler(async(req, res, next) => {
     
        res.status(200).json(res.advancedResults);

});

/**
 * @desc crear info 
 * @route  POST /api/v1/mscamps
 * @access  PUBLICO
 */
exports.createMsCamp = asyncHandler(async(req, res, next) => {
   
        const mscamps =await Mscamp.create(req.body);
        res.status(200).json({ success: true, data: mscamps });
   
});

/**
 * @desc obtener un info 
 * @route  GET /api/v1/mscamps/1
 * @access  PUBLICO
 */
exports.getMsCamp = asyncHandler(async(req, res, next) => {
  
        const mscamp = await Mscamp.findById(req.params.id);

        if(!mscamp) {
           return next(
               new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
               );
        }

        res.status(200).json({ success:true,data: mscamp});
    
});

/**
 * @desc actualzar un info 
 * @route  GET /api/v1/mscamps/:id
 * @access  PUBLICO
 */
exports.updateMsCamp = asyncHandler(async(req, res, next) => {
    
        const mscamp = await Mscamp.findByIdAndUpdate(req.params.id, req.body, { 
            new: true,
            runValidators: true,
        });
        if(!mscamp) {
            return next(
                new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
                );
         }
        res.status(200).json({ success:true,data: mscamp});
   
});

/**
 * @desc eleminar un info 
 * @route  GET /api/v1/mscamps
 * @access  PUBLICO
 */
exports.deleteMsCamp = asyncHandler(async(req, res, next) => {

        const mscamp = await Mscamp.findById(req.params.id);
        if(!mscamp) {
            return next(
                new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
                );
         }

        mscamp.remove();
        
        res.status(200).json({ success:true,data: {} });
    
});