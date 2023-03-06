import axios from "axios";

const BASE_URL = "http://indianrailapi.com/api/v2/";
const API = axios.create({ baseURL: BASE_URL });
const API_KEY = "";

export const getTrainStatus = async (trainNo, date) => {
	const newDate = date; // change date format to yyyy/mm/dd
	const response = await API.post(
		`livetrainstatus/apikey/${API_KEY}/trainnumber/${trainNo}/date/<yyyymmdd>/`
	);
	return response;
};

export const getStationStatus = async (stationCode) => {
	const response = await API.post(
		`AllTrainOnStation/apikey/${API_KEY}/StationCode/${stationCode}/`
	);
	return response;
};

export const getTrainFare = async (trainNo, stationFrom, stationTo, quota) => {
	const response = await API.post(
		`TrainFare/apikey/${API_KEY}/TrainNumber/${trainNo}/From/${stationFrom}/To/${stationTo}/Quota/${quota}`
	);
	return response;
};
