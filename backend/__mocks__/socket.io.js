const socket = jest.createMockFromModule("socket.io")

socket.Server = jest.fn().mockImplementation(() => ({ on: jest.fn() }))

module.exports = socket
