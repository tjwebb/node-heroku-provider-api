module.exports = {
  index: function (req, res) {
    Resource.findOne(req.session.resourceId)
      .then(function (resource) {
        if (!resource) return res.send('Not Found', 404);

        res.session.resource = resource;
        res.view({
          //layout: false,
          resource: req.session.resource,
          email: req.session.email
        });
      })
      .catch(function (error) {
        res.send(500, error);
      });
  }
};
