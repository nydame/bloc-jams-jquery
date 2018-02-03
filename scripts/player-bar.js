{
    // Implement Play/Pause button
    $('button#play-pause').on('click', function() {
        player.playPause();
        $(this).attr('playState', player.playState);
    });
    // Implement Next buttons
    $('button#next').on('click', function() {
        if (player.playState !== 'playing') {
            return;
        }
        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const nextSongIndex =
            currentSongIndex < album.songs.length - 1
                ? currentSongIndex + 1
                : 0;
        if (nextSongIndex) {
            player.playPause(album.songs[nextSongIndex]);
        }
    });
    // Impelment Previous button
    //
}
