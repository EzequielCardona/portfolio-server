exports.getLeads = (request, response) => {
  response.send('Leads here');
}

exports.createLead = (request, response) => {
  const { nombreCompleto, email, mensaje } = request.body;
  response.send(nombreCompleto);
}