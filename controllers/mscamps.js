/**
 * 
 * @desc obtener todo los info 
 * @route  GET /api/v1/mscamps
 * @access  PUBLICO
 */

exports.getMsCamps = (req, res, next) => {
    res.status(200).json({ success:true, mes: "obtener toda las informaciones "});
};

exports.createMsCamp = (req, res, next) => {
    res.status(200).json({ success:true, mes: `crear informacion`});
};

exports.getMsCamp = (req, res, next) => {
    res.status(200).json({ success:true, mes: `para ${req.params.id} obtener solo una informacion`});
};

exports.updateMsCamp = (req, res, next) => {
    res.status(200).json({ success:true, mes: `para ${req.params.id} actualizar solo una informacion`});
};

exports.deleteMsCamp = (req, res, next) => {
    res.status(200).json({ success:true, mes: `para ${req.params.id} eliminar solo una informacion`});
};