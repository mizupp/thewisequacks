const axios = jest.createMockFromModule("axios")

axios.all = jest.fn()
axios.get = jest.fn()
axios.spread = jest.fn()

module.exports = axios
