const peer = new Peer();
peer.on('open', (id) => {
    document.getElementById('display').innerText = "Your ID: " + id;
});
