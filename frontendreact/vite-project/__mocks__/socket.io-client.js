const socket = jest.createMockFromModule("socket.io-client")

socket.io = jest.fn().mockImplementation(() => ({ emit: jest.fn() }))

module.exports = socket
