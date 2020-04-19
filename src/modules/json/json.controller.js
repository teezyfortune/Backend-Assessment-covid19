const { SERVER_ERROR} = require('../../utils/constant')
const chhalllenges = require('../../services/json.services');





const covid19ImpactEstimator = (data) => {
  const allChallenge = ({ impact, severeImpact }) => {
    chhalllenges.currentInFectedEstimator({ data, impact, severeImpact });
    chhalllenges.currentlyInfectedByRequestedTime({ data, impact, severeImpact });

    chhalllenges.serioulsyInfectedCases({ impact, severeImpact });
    chhalllenges.getAvailablebedByDuaration({ data, impact, severeImpact });

    // challenge 3
    chhalllenges.findICUImpact({ impact, severeImpact });
    chhalllenges.caseForVentilation({ impact, severeImpact });
    chhalllenges.dollarsInflightImpact({ data, impact, severeImpact });

    return { data, impact, severeImpact };
  };

  return allChallenge({
    data,
    impact: {},
    severeImpact: {}
  });
};


const fetCovid19ImpactEstimator =  (req, res, next) => {
	try {
		const data = req.body
		const result = covid19ImpactEstimator(data);
		res.send(result)
    
		next();
	} catch (error) {
		console.log(error);
	return res.json({ status: 500, messga: SERVER_ERROR })

}
}

module.exports = fetCovid19ImpactEstimator