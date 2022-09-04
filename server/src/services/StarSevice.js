class StarService {
	prepareOne(star) {
        const [firstName, lastName] = star.trim().split(' ');

        return {
            firstName: firstName || '',
            lastName: lastName || ''
        } 
	}

    prepareMany(stars) {
		const result = [];
		const starsList = stars.split(',')
	
        for (let star of starsList) {
            const [firstName, lastName] = star.trim().split(' ');
            result.push({
                firstName: firstName || '',
                lastName: lastName || ''
            })
        }

        return result;
    }

	// async getOne(id) {
	// 	if (!id) throw new Error("Id is not specified");
	// 	console.log(id);
	// 	const movie = await Movie.findOne({ where: { id } });
	// 	return movie;
	// }
}

export default new StarService();