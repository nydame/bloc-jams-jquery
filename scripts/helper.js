class Helper {
    constructor() {}

    playPauseAndUpdate(song = player.currentlyPlaying) {
        player.playPause(song);
        // console.log('Using buzz library method: ', player.getDuration());
        // console.log('Using data: ', song.duration);
        $('#time-control .total-time').text(player.prettyTime(song.duration));
    }
}

const helper = new Helper();
