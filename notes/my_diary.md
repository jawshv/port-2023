
### my diary

[my diary](https://diary.joshvredevoogd.com/) is an experiment in a gentle feed

for me (and i think like most people) traversing social media is a constant exercise in attention and turbulence and validation and crisis. and for whatever emotional upkeep it takes to garden it - i don't think it's dramatic to say stepping away from it is like uprooting a billboard broadcasting "hey i exist!"

as i've been working on that balance, i still wanted the a way to export fleeting thoughts, i wanted to be able to do it from anywhere, low friction, but without the attention cost of a feed or validation, no app required, without the weight of it being for anything besides the definition of a moment

so i built a little diary

its a small web app that lets me display all messages texted to a phone number, it works with any phone that can send an SMS (dumb phones!) and contextualizes the sending number into different profiles so friends can also post to the endpoint and even programmatically generates them a unique URL. it's very simple and nice and makes me happy

![](https://s3-external-1.amazonaws.com/media.twiliocdn.com/AC9f6ee7840461f5d77bd8d75d40441963/47ae3ae9dfc7f5ef84521adbe912565b)
![](https://s3-external-1.amazonaws.com/media.twiliocdn.com/AC9f6ee7840461f5d77bd8d75d40441963/f01b426bd2f79659f194c477f339cb14)
![](https://s3-external-1.amazonaws.com/media.twiliocdn.com/AC9f6ee7840461f5d77bd8d75d40441963/eb5e39303a93f0e4383a172228a05a5a)


for those that care about architecture, the diary uses a flask app to retrieve, store, and display messages pulled from a twillio phone number api that captures texts