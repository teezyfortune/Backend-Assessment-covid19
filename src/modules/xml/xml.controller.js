const chhalllenges  = require('../../services/xml.services');
const { SERVER_ERROR} = require('../../utils/constant')
const js2xmlParser = require('js2xmlparser');


const getcovid19ImpactxmlEstimator = (data) => {
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

  return allChallenges({
    data,
    impact: {},
    severeImpact: {}
  });}



const covid19ImpactxmlEstimator = (req, res, next) => {
	try {
		const data = req.body;
			const sxmlResponse = 	getcovid19ImpactxmlEstimator(data)
		const xmlResponse = js2xmlParser.parse('response', sxmlResponse)
		res.type('application/xml')
		res.send(xmlResponse);
		next()
	} catch (error) {
	return res.json({ status: 500, message: SERVER_ERROR })

}
}

module.exports = covid19ImpactxmlEstimator;