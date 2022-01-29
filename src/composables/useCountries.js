import axios from "axios"
import { ref } from "vue"

export default () => {
    const countries = ref([])
    const cities = ref([])

    const getCountries = async () => {
        let response = await axios.get(`https://countriesnow.space/api/v0.1/countries/iso`)
        countries.value = response.data.data
    }

    const getCities = async (name) => {
        let response = await axios.post(`https://countriesnow.space/api/v0.1/countries/cities`, {
            country: name
        })
        cities.value = response.data.data
    }

    return {
        countries,
        cities,
        getCountries,
        getCities
    }
}