# heroimage
Responsive hero image

My first attempt at jQuery after learning a little about it. 

I needed a Div that covered the browser window regardless 
of the window size.  This is the solution I came up with. 

The CSS sets a background image and 100% width. The jQuery calculates the height of the browser window using $(window).height(); and then adds a fixed height property, equal to the window height, to the Div.
