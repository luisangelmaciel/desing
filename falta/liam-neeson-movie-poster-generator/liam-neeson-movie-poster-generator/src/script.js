const fonts = ['Roboto', 'Teko', 'Archivo Black', 'Syncopate', 'Sarpanch', 'Emblema One', 'Goblin One', 'Coda Caption', 'Work Sans', 'Stalinist One'];
const photos = [
	'https://media.gettyimages.com/photos/actor-liam-neeson-attends-the-passenger-paris-premiere-at-cinema-ugc-picture-id905741784?k=20&m=905741784&s=612x612&w=0&h=Jtn9j3Mx9ZBnMbY02_18XmkdTFi1QINnRad5OVnodFk=',
	'https://media.gettyimages.com/photos/liam-neeson-attends-the-uk-film-premiere-of-the-ateam-at-empire-on-picture-id103121160?k=20&m=103121160&s=612x612&w=0&h=hJEYvKsJ3TyVbMzXuFjGDPZBvjr4b7TLl1TrZBdhiCY=',
	'https://media.gettyimages.com/photos/liam-neeson-speaks-on-stage-at-the-2018-seriousfun-childrens-network-picture-id961170432?k=20&m=961170432&s=612x612&w=0&h=1Y5HVtcLoFtzvOvDTHzc4GMfBp_HfBawQPHunNb1Qvk=',
	'https://media.gettyimages.com/photos/liam-neeson-in-les-miserables-directed-by-bille-august-prague-1997-picture-id1302465842?k=20&m=1302465842&s=612x612&w=0&h=mFWzxOcmGPKkHNycwVWuEz8qTuWVZIP1j_S7x2O1pdw=',
	'https://media.gettyimages.com/photos/liam-neeson-attends-the-passenger-paris-premiere-at-cinema-ugc-on-picture-id905729918?k=20&m=905729918&s=612x612&w=0&h=6LcxGpC6idAmSrINDRUTbHGgL6FPvuoj6YcDqNyA9DA=',
	'https://media.gettyimages.com/photos/actor-liam-neeson-attends-a-monster-calls-new-york-premiere-at-amc-picture-id628448644?k=20&m=628448644&s=612x612&w=0&h=x87_xXUmsju3iG5WMzstsv1Y9aOFVlYwTQNWzC1AsFo=',
	'https://media.gettyimages.com/photos/actor-liam-neeson-attends-el-hormiguero-tv-show-at-vertice-studio-on-picture-id469959392?k=20&m=469959392&s=612x612&w=0&h=yQ0TkjP2Sk1kUcVBaP2l5sK0U47_3OEHTTDqzpwEfyw=',
	'https://media.gettyimages.com/photos/liam-neeson-attends-the-uk-premiere-of-the-white-crow-at-the-curzon-picture-id1130091891?k=20&m=1130091891&s=612x612&w=0&h=RYR1rQcqdtwFe6v-OJke_w-zSCidTILo5U5VtXubY1c=',
	'https://media.gettyimages.com/photos/liam-neeson-attends-the-passenger-paris-premiere-at-cinema-ugc-on-picture-id905732168?k=20&m=905732168&s=612x612&w=0&h=wi-D463_4dXNghDIfVIyxjRCitrX8CGHUgIsyOeTQME=',
	'https://media.gettyimages.com/photos/liam-neeson-attends-armani5th-avenue-store-opening-at-armani5th-on-picture-id659138724?k=20&m=659138724&s=612x612&w=0&h=EBuzE8uZWINks3iN3bAMcoSO4i7DivuNF7IBCnI5-lU=',
	'https://media.gettyimages.com/photos/liam-neeson-seen-at-bbc-radio-2-on-december-13-2016-in-london-england-picture-id629485962?k=20&m=629485962&s=612x612&w=0&h=m0iUAsdaJ0qKg12O76MGKuZlv1yVpSArBRNlKOgBKLw=',
	'https://media.gettyimages.com/photos/actor-liam-neeson-attends-the-press-conference-for-operation-chromite-picture-id546742568?k=20&m=546742568&s=612x612&w=0&h=Y5-fbC0Kdz5pOs-CAtod0UX86Q-tWpSyTGuw0PFeR2s=',
	'https://media.gettyimages.com/photos/actor-liam-neeson-attends-el-hormiguero-tv-show-at-vertice-studio-on-picture-id469959376?k=20&m=469959376&s=612x612&w=0&h=YCd6BRzxs231LyeVUagxZ40rbOI_ni4f8sNS7YGsb9M=',
	'https://media.gettyimages.com/photos/actor-liam-neeson-attends-una-noche-para-sobrevivir-premiere-at-the-picture-id467434980?k=20&m=467434980&s=612x612&w=0&h=PxZ6-dRdZx8TYcA5U9E3ejPGbJc6itSOpaJfqZuF-vU=',
	'https://media.gettyimages.com/photos/actor-liam-neeson-attends-una-noche-para-sobrevivir-premiere-at-the-picture-id467433330?k=20&m=467433330&s=612x612&w=0&h=uWEy8PETvhWnF8FGw4d0nP4bnckqh1uKhWOhAOawzsg=',
	'https://media.gettyimages.com/photos/actor-liam-neeson-attends-the-lego-movie-screening-hosted-by-warner-picture-id467040897?k=20&m=467040897&s=612x612&w=0&h=nXYu4A0WXITRCDQwsu83fmkf1SaB-Ak6MoOHF3Qxhus=',
	'https://media.gettyimages.com/photos/actor-liam-neeson-attends-the-universal-pictures-and-cross-creek-picture-id455636856?k=20&m=455636856&s=612x612&w=0&h=i2kbQibkgwRz3_cVo9hkqD_f68WcbZpWYd2gQ7EoLxw=',
	'https://media.gettyimages.com/photos/liam-neeson-filming-on-location-for-a-walk-among-the-tombstones-on-picture-id163956474?k=20&m=163956474&s=612x612&w=0&h=OxnnNDTOc4uvw7G7L05BthD3toiUD2dEQwTSzx0NOIA='
	
];
const titles = [
	"The Follower", 
	"Without Honor", 
	"Lost Bet", 
	"The Baker", 
	"Dignity's Demand", 
	"Wolves", 
	"The River", 
	"Last Rites", 
	"Lost Spy", 
	"Emissary of Pain", 
	"The Founder", 
	"Painbringer", 
	"Painseeker", 
	"The Demiser", 
	"Death Of Evil", 
	"Midnight Threat", 
	"The Miner", 
	"The Ghost", 
	"Death At Sea", 
	"Righteous Kill", 
	"Lifeline", 
	"Missed Call", 
	"Next in Command", 
	"Suncatcher",
	"The Forger",
	"The Boomer",
	'Why, Gone Jim?'
];
const tagStart = [
	`This time`,
	`Sometimes`,
	`If pain is all you know`,
	`When honor is lost`,
	`When all seems dark`,
	`In a world of hate`,
	`When all is at stake`,
	`If you push too far`,
];
const tagEnd = [
	`It's personal`,
	`Honor holds you back`,
	`That's all you can give`,
	`Pain is a skill`,
	`It can light the way`,
	`Second chances don't come easy`,
	`Nothing else matters`,
	`Strike first`,
	`Justice can wait`,
	`Death is optional`,
	`Ask questions later`
];
const colors = ['white', 0, 220, 35, '#dedede'];
const pos = {
	left: {
		anchor: 'start',
		x: '0%',
	},
	center: {
		anchor: 'middle',
		x: '50%',
	},
	right: {
		anchor: 'end',
		x: '100%',
	}
};

function randomItem(items) {
	return items[Math.floor((Math.random() * items.length))];
}

function makeRange(length = 1) {
	return [...Array(length)].map((_, index) => index + 1);
}

function newPoster() {
	// Grab all relevant elements
	const fontLink = document.getElementById('font-link');
	const poster = document.getElementById('poster');
	const photo = document.getElementById('photo');
	const title = document.getElementById('title');
	const tagline = document.getElementById('tagline');
	const starring = document.getElementById('starring');
	
	// Set up layout values
	const rows = parseInt(window.getComputedStyle(poster).getPropertyValue("--rows"), 10) || 12;
	const rowsHalf = Math.floor(rows / 2);
	const cols = parseInt(window.getComputedStyle(poster).getPropertyValue("--cols"), 10) || 7;
	const font = randomItem(fonts);
	const hue = randomItem(colors);
	const accentColor = (typeof hue === 'string') ? hue : `hsl(${hue}, 65%, 80%)`;
	const starringPos = randomItem([1, rows - 1]); // Top or bottom row
	const reservedBottomRows = (starringPos === 1) ? 2 : 3;
	const titleName = randomItem(titles);
	const titleRow = randomItem(makeRange(rowsHalf - reservedBottomRows)) + rowsHalf; // Don't want it in top  half
	const titleAlign = randomItem(['left', 'center', 'right']);
	// const titlePosX = pos[titleAlign].x;
	// const titleAnchor = pos[titleAlign].anchor;
	const taglineText = `${randomItem(tagStart)}… ${randomItem(tagEnd)}`;
	const photoSrc = randomItem(photos);
	poster.style.setProperty("--poster-accent-color", accentColor);
	poster.style.setProperty("--poster-title-font", font);
	poster.style.setProperty("--poster-title-row", titleRow);
	poster.style.setProperty("--poster-subtitle-row", titleRow + 1);
	poster.style.setProperty("--poster-starring-row", starringPos);
	title.textContent = titleName;
	tagline.textContent = taglineText;
	// title.setAttribute('x', titlePosX);
	// title.setAttribute('text-anchor', titleAnchor);
	fontLink.setAttribute('href', `https://fonts.googleapis.com/css2?family=${font.replaceAll(' ', '+')}:wght@400;500;600;700;800;900&display=swap`);
	photo.setAttribute('src', photoSrc);
}

document.addEventListener('DOMContentLoaded', newPoster);
document.addEventListener('click', newPoster);