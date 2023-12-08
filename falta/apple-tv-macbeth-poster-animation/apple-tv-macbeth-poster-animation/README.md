# Apple TV Macbeth Poster Animation

A Pen created on CodePen.io. Original URL: [https://codepen.io/Darkbbeider/pen/OJwNmzO](https://codepen.io/Darkbbeider/pen/OJwNmzO).

Source of inspiration by Konstantine Trundayev - https://dribbble.com/shots/2245238-Apple-TV-Macbeth-poster

Not working in IE 11-. Shiny effect really sucks compared to original gif, I killed more than 1 hour on gradients and box-shadows, all of them looks not good enough :(

"360 degree rotation of already rotatated element" it is kinda tricky part. It's easy to imagine in your brain how this animation should work, but actually it's not that straightforward. I tried keyframes with steps like rotateX(10deg)>rotateY(10deg)>rotateX(-10deg)>rotateY(-10deg) but animation was absolutely different, because it wasn't actually rotating around Z axis. Then I tried double 360deg-Zrotation (normal for inner element and reversed for parent, to keep element not actually rotated) but for some reason any rotation for second block above 179deg was not working. So I ended up doing this hacky part with #{percentage(179/360)} {rotate: 179deg} > 50% {rotate: 180deg} > 100% {rotate: 360deg} and that trick worked!