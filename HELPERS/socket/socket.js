module.exports = (socketIo) => {
    // console.log(socketIo, 9999)
    socketIo.on('connection', socket => {
        socket.on('send_message', message => {
            socketIo.emit('message', message)
        })
    })
}