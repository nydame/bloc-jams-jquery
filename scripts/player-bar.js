{
    // Implement Play/Pause button
    $('button#play-pause').on('click', function() {
        player.playPause();
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
            player.playPause(album.songs[nextSongIndex]);
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
            player.playPause(album.songs[previousSongIndex]);
        }
    });
}
