const BASE_URL = "http://localhost:5000/api";

$(document).ready(function() {

    async function getCupcakes() {
        try {
            const response = await axios.get(`${BASE_URL}/cupcakes`);
            const cupcakes = response.data.cupcakes;

            for (let cupcake of cupcakes) {
                $('#cupcake-list').append(
                    `<li>
                    Flavor: ${cupcake.flavor}, Size: ${cupcake.size}, Rating: ${cupcake.rating}
                        <img src="${cupcake.image}" alt="Cupcake image" width="100">
                    </li>`
                )
            };

        } catch (err) {
            console.error("Error fetching cupcakes: ", err);
        }
    }
    getCupcakes();
});


$(document).ready(function() {
    $('#new-cupcake-form').on('submit', async function(event) {
        event.preventDefault();

        const flavor = $('#flavor').val();
        const size = $('#size').val();
        const rating = $('#rating').val();
        const image = $('#image').val() || null;

        const newCupcake = { flavor, size, rating, image };

        try {
            const response = await axios.post(`${BASE_URL}/cupcakes`, newCupcake);

            const cupcake = response.data.cupcake;
            $('#cupcake-list').append(
                `<li>
                    Flavor: ${cupcake.flavor}, Size: ${cupcake.size}, Rating: ${cupcake.rating}
                    <img src="${cupcake.image}" alt="Cupcake image" width="100">
                </li>`
            );
            $('#new-cupcake-form')[0].reset();
        } catch (err) {
            console.error("Erro creating cupcake: ", err);
        }
    });
});