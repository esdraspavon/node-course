const statusMessage = {
  '200': 'Done',
  '201': 'Created',
  '400': 'Invalid format',
  '500': 'Internal error'
};

exports.success = function(req, res, message, status) {
  resp.status(status || 200).send({
    error: '',
    body: data || statusMessage[status]
});
};

exports.error = function(req, res, message, status, details) {
  console.error(`[response error] ${details}`);
    resp.status(status || 500).send({
        error: message || statusMessage[status],
        body: ''
    });
};
