var mongoose = require('mongoose');
var Usuario  = mongoose.model('Usuario');

//Buscar usuario y contraseña
exports.findUsuario = function(req, res) {
	Usuario.find({correo: req.body.user, password: req.body.password}, function(err, tvshow) {
        if(err) return res.send(500, err.message);

        console.log('GET /Login/ ' + req.body.user + ' ' + req.body.password);
		res.status(200).jsonp(tvshow);
	});
};

//Insertar un nuevo usuario
exports.registrarUsuario = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var user = new Usuario({
		nombre:     req.body.nombre,
        apellido:   req.body.apellido,
        correo:     req.body.correo,
        password:   req.body.password,
        telefono:   req.body.telefono,
        id_rol:     req.body.id_rol,
        estado:     req.body.estado
	});

	user.save(function(err, user) {
		if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(user);
	});
};
