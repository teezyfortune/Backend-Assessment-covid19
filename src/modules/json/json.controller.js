const { SERVER_ERROR} = require('../../utils/constant')
const chhalllenges = require('../../services/json.services');

const covid19ImpactEstimator =  (req, res, next) => {
	try {
		const allChallenges =  ({ data, impact, severeImpact } ) => {
			// chhalllenge one
			chhalllenges.currentInFectedEstimator({ data, impact, severeImpact });
			chhalllenges.currentlyInfectedByRequestedTime({ data, impact, severeImpact })
	
		//challenge two
		chhalllenges.serioulsyInfectedCases({ data, impact, severeImpact })
		chhalllenges.getAvailablebedByDuaration({ data, impact, severeImpact })
	
		//	challenge three
		chhalllenges.findICUImpact({ impact, severeImpact })
		chhalllenges.caseForVentilation({ impact, severeImpact })
		chhalllenges.dollarsInflightImpact({ data, impact, severeImpact })
	
		const datas = { data, estimate: { impact, severeImpact } }
		return datas
	}
	const { name, avgDailyIncomeInUSD, avgDailyIncomePopulation, avgAge, periodType, timeToElapse,
		reportedCases, totalHospitalBeds, population } = req.body;

	const input = {
		data: {
			region: { name, avgDailyIncomeInUSD, avgDailyIncomePopulation, avgAge },
			periodType, timeToElapse, reportedCases, totalHospitalBeds, population
		},
		impact: {},
		severeImpact: {}
		}
		next();
	return res.status(201).json(allChallenges(input))
	
} catch (error) {
	return res.json({ status: 500, messga: SERVER_ERROR })

}
}

module.exports = covid19ImpactEstimator