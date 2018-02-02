{
    $('#album-title').text(album.title);
    $('img#album-cover-art').attr('src', album.coverArtUrl);
    $('.artist').text(album.artist);
    $('#release-info').html(`<p>${album.releaseInfo}</p>`);
}
