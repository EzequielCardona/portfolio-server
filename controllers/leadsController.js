const Lead = require('../models/Lead');

exports.getLeads = (request, response) => {
  response.send('Leads here');
}

exports.createLead = async (request, response) => {
  const { nombreCompleto, email, mensaje } = request.body;

  const newLead = await Lead.create({
    nombreCompleto,
    email,
    mensaje
  })
  response.json({
    newLead,
    msg: "Se ha creado el lead correctamente"
  })
}