export const fetchData = async () => {
	try {
		const res = await fetch("../data/catalog.json");

		if (res.status === 400) {
			return res.json();
		}
	} catch (error) {
		console.error("Could not fetch product", error);
	}
};
