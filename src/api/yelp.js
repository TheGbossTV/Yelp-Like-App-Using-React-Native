import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer __iENFcpJsxo2hOkUGv_2GiPUFoBcPoSgDa-YFQ_rD2cZQlCS5xD9CrVdpgbz_Uvz6TH71LlpagdJqn0psQZZdMgqSCryg2XETj-hFEoX5lsDYeYJK_gqeAn1y62YHYx'
    }
});