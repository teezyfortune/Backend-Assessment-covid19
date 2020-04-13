
// challenge one
exports.currentInFectedEstimator =  ({ data, impact, severeImpact }) => {
	try {
		impact.currentlyInfected = data.reportedCases * 10;
		severeImpact.currentlyInfected =  data.reportedCases * 50;
		return { impact, severeImpact };
	} catch (error) {
	return error
	}
}

const calEstimatedTime =  (periodType, timeValue) => {
  switch (periodType) {
    case 'months':
      return timeValue * 30;
    case 'weeks':
      return timeValue * 7;
    default:
      break;
  }
  return timeValue;
};

exports.currentlyInfectedByRequestedTime =  ({ data, impact, severeImpact }) => {
	try {
		impact.infectionsByRequestedTime =  (impact.currentlyInfected
			* (2 ** Math.trunc(calEstimatedTime(data.periodType, data.timeToElapse / 3))));
		severeImpact.infectionsByRequestedTime =  (severeImpact.currentlyInfected
			* (2 ** Math.trunc(calEstimatedTime(data.periodType, data.timeToElapse / 3))));
		return { impact, severeImpact };
	} catch (error) {
		return error
	}
}
exports.serioulsyInfectedCases = ({ impact, severeImpact }) => {
	try {
		impact.severeCasesByRequestedTime =  Math.trunc(0.15 * impact.infectionsByRequestedTime);
		severeImpact.severeCasesByRequestedTime =  Math.trunc(0.15
			* severeImpact.infectionsByRequestedTime);
		return { impact, severeImpact };
	
	} catch (eror) {
		return eror;
}
}



// challenge two
exports.getAvailablebedByDuaration = ({ data, impact, severeImpact }) => {
	try {
		// hospitalBedsByRequestedTime
		impact.hospitalBedsByRequestedTime =  Math.trunc((0.35 * data.totalHospitalBeds)
			- impact.severeCasesByRequestedTime);
		severeImpact.hospitalBedsByRequestedTime = Math.trunc((0.35 * data.totalHospitalBeds)
			- severeImpact.severeCasesByRequestedTime);
		return { impact, severeImpact };
	} catch (error) {
		return error;
	}
}
// challeng three begin here
// casesForVentilatorsByRequestedTime
exports.findICUImpact =  ({ impact, severeImpact }) => {
  impact.casesForICUByRequestedTime = Math.trunc(0.05 * impact.infectionsByRequestedTime);
  severeImpact.casesForICUByRequestedTime =  Math.trunc(0.05
    * severeImpact.infectionsByRequestedTime);
  return { impact, severeImpact };
};

exports.caseForVentilation = ({ impact, severeImpact }) => {

  impact.casesForVentilatorsByRequestedTime = Math.trunc(0.02 * impact.infectionsByRequestedTime);
  severeImpact.casesForVentilatorsByRequestedTime = Math.trunc(0.02
    * severeImpact.infectionsByRequestedTime);
  return { impact, severeImpact };
};


//  dollarsInFlight
exports.dollarsInflightImpact =  ({ data, impact, severeImpact }) => {
  impact.dollarsInFlight = Math.trunc(Math.trunc(impact.infectionsByRequestedTime
    * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD) / (Math.trunc(
    calEstimatedTime(data.periodType, data.timeToElapse)
  )));

  severeImpact.dollarsInFlight = Math.trunc(Math.trunc(severeImpact.infectionsByRequestedTime
    * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD) / (Math.trunc(
    calEstimatedTime(data.periodType, data.timeToElapse)
  )));
  return { impact, severeImpact };
};

