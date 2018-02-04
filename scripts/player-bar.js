{
    // Implement Play/Pause button
    $('button#play-pause').on('click', function() {
        // player.playPause();
        helper.playPauseAndUpdate();
        $(this).attr('playState', player.playState);
    });
    // Implement Next button
    $('button#next').on('click', function() {
        if (player.playState !== 'playing') {
            return;
        }
        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const nextSongIndex =
            currentSongIndex < album.songs.length - 1
                ? currentSongIndex + 1
                : null;
        if (nextSongIndex) {
            // player.playPause(album.songs[nextSongIndex]);
            helper.playPauseAndUpdate(album.songs[nextSongIndex]);
        }
    });
    // Impelment Previous button
    $('button#previous').on('click', function() {
        if (player.playState !== 'playing') {
            return;
        }
        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const previousSongIndex =
            currentSongIndex > 0 ? currentSongIndex - 1 : null;
        if (previousSongIndex || previousSongIndex === 0) {
            // player.playPause(album.songs[previousSongIndex]);
            helper.playPauseAndUpdate(album.songs[previousSongIndex]);
        }
    });
    // Display time, updating once per second
    setInterval(() => {
        if (player.playState !== 'playing') {
            return;
        }
        const currentTime = player.getTime();
        const totalTime = player.getDuration();
        const percent = currentTime / totalTime * 100;
        // move slider to reflect where we are in the song
        $('#time-control input').val(percent);
        // display that information as time
        $('#time-control .current-time').text(player.prettyTime(currentTime));
    }, 1000);
    // Respond to time control slider by skipping to desired point in the song
    $('#time-control input').on('input', function(ev) {
        player.skipTo(ev.target.value);
    });
    // Respond to volume control slider by changing to desired volume
    $('#volume-control input').on('change', function(ev) {
        player.setVolume(ev.target.value);
    });
}
