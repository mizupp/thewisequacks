const socket = jest.createMockFromModule("@socket.io/admin-ui")

socket.instrument = jest.fn()

module.exports = socket
