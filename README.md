# Thanks for stopping by!
Feel free to browse for inspiration, just don't 1:1 copy my work.

# Tech used

**Less CSS**, as my CSS Preprocessor.

**NextJS**, as the primary framework.

**Typescript**, duh.

**Prisim**, for syntax highlighting.


# The damned text effect
This text animation was *really*. *damn*. **difficult** to make. let me explain:

This is not a video, image, gif and doesn't use javascript (except for the syntax highlighting). It's just some text in a pre tag. 

I used Prisim for the syntax highlighting which basically detects all the code in the pre tag then adds a bunch of spans for the colors.

**How is this a problem?**

Every way I could think of or find online for the typing effect either utilized javascript or manipulated the text for the effect. Neither could work. I needed the text already on the page for the syntax highlighting, and the text manipulation would mess with my syntax highlighting.

**The solution**

An hour later of messing around and trying things, I found the solution of simply having one paragraph for every line (That's over 43) and reducing it's width over time. I found something similar to this on codepen but it wouldn't work for one reason.

***I would need to manually type in 43 unique CSS classes***

Yeah, no. I instead looked at using nth-child in CSS to somehow automate this. Luckily I did.

LessCSS has this obscure feature that does exactly what I needed, looks over every nth-child and generates a class for it in the generated css file. Some math to increment the delay and we had it.

Check it out in /components/background/