# Avochato Engineering Test - Carousel

## Description

For this project I choose to use the Slick.js library carousel and then to build my own pure JS carousel in a class structure.

I choose the Slick.js library because it was dead simple to replicate and satisfied the main UI requirements with little configuration.  

For my own implimentation I didn't necessarily try to copy the Slick.js approach. Given practical time contrainsts - I went for a simplier approach that essentially works by using the css translateX property to manipulate the visibility of the current, next, and previous slides.
The essential logic is to track these three positions at all times and constantly reset the previous and next slides to create the illusion of a sliding track. 

I choose to use a class based approach because it creates a private scope for all the neccessary variables, but is also extensible and could be imported/ exported more easily than a code structure that uses an anonymous function wrapper (for example) to create private scope.

If I had a bit more time, I would probably work more with specific device testing and try to add additional event handlers for touch/drag events. 


Thank you for your consideration.  This was a good exercise for me to work with pure JS and I hope you enjoy the cycling images :partying_face: !
