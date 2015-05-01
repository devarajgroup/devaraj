#Devaraj Website

This is a website for the Devaraj Research Group @ UCSD. The site is constructed using the static site generator [Harp]().


###Global Variables

Found in harp.json, under the `globals` key.

`navbar` : Contains the name and the paths that should be in the navigation bar of the website. The values are looped using the `for` construct within the Jade templating language.

###Known Issues

- The Jade on the people page renders inconsistently. If a person on the rightmost side of each section (faculty, graduate, etc.) doesn't have an email, the pictures don't tile correctly. It's almost 100% likely that you need to dynamically change the Bootstrap rows based on how many pictures are in the peoples folder, but I'm not sure how to effectively do this yet.
