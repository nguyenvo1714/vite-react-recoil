import {selector} from "recoil";
import {getRequest} from "../../utils/axiosClient";

const currentPrices = selector({
  key: 'CurrentPrices',
  get: async ({get}) => {
    try {
      const { data } = await getRequest('bpi/currentprice.json')

      return data
    } catch (error) {
      console.log('error => ', error)
      throw error
    }
  }
})

export default currentPrices