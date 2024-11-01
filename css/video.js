    const video = document.getElementById('trickshot');
    video.addEventListener('error', function() {
        console.error('Error playing video:', video.error);
    });
    video.addEventListener('ended', function() {
        console.log('Video ended');
    });
