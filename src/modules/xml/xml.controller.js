const chhalllenges  = require('../../services/xml.services');
const { SERVER_ERROR} = require('../../utils/constant')
const js2xmlParser = require('js2xmlparser');

const covid19ImpactxmlEstimator =  (req, res) => {
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
			const data = {
				data: {
					region: { name, avgDailyIncomeInUSD, avgDailyIncomePopulation, avgAge },
					periodType, timeToElapse, reportedCases, totalHospitalBeds, population
				},
				impact: {},
				severeImpact: {}
			}
   

		const responsTpe = allChallenges(data)
		const xmlResponse = js2xmlParser.parse('response',responsTpe)

		return res.send(xmlResponse);

	} catch (error) {
	return res.json({ status: 500, messga: SERVER_ERROR })

}
}

module.exports = covid19ImpactxmlEstimator;