/*
let nextId = 1;

async function create(req, res) {
  const newObservation = req.body.data;

  const now = new Date().toISOString();
  newObservation.observation_id = nextId++;
  newObservation.created_at = now;
  newObservation.updated_at = now;

  res.status(201).json({
    data: newObservation,
  });
}

const validSkyConditions = [100, 101, 102, 103, 104, 106, 108, 109]

function hasData(req, res, next) {
  if (req.body.data) {
    return next()
  }
  next({status: 400, message: "body must have data property"})
}

function hasLatitude(req, res, next) {
  const latitude = Number(req.body.data.latitude)
  if (latitude >= -90 && latitude <= 90 ) {
    return next()
  }
  next({status: 400, message: "latitude must be between -90 and 90"})
}

function hasLongitude(req, res, next) {
  const longitude = Number(req.body.data.longitude)
  if (longitude >= -180 && longitude <= 180 ) {
    return next()
  }
  next({status: 400, message: "longitude must be between -180 and 180"})
}

function hasSkyCondition(req, res, next) {
  const skyCondition = Number(req.body.data.sky_condition)

  if (validSkyConditions.includes(skyCondition)) {
    return next()
  }
  next({status: 400, message: `sky_condition must be one of: ${validSkyConditions}`})
}

module.exports = {
  create: [hasData, hasLatitude, hasLongitude, hasSkyCondition, create],
};
*/