const allVideos = document.querySelectorAll('.video_wrapper');

allVideos.forEach((v) => {
	v.addEventListener('mouseover', () =>
	{
		const video = v.querySelector('video');
		video.play();
	});
	
	v.addEventListener('mouseleave', () => {
		const video = v.querySelector('video');
		video.pause();
	});
});