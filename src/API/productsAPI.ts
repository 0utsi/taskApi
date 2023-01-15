import axios from "axios";

export default axios.create({
	baseURL: "https://reqres.in",
	params: {
		per_page: 5,
	}
});
