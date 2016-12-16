# Movie & TV Info
## A simple Amazon Alexa Skill that leverages OMDB

Schema:
```json
{
  "intents": [
    {
      "intent": "movieinfo",
      "slots": [
        {
          "name": "MEDIANAME",
          "type": "MEDIATITLE"
        }
      ]
    }
  ]
}
```

Utterances:
```
movieinfo	{MEDIANAME}
movieinfo	actors {MEDIANAME}
movieinfo	stars {MEDIANAME}
movieinfo	for {MEDIANAME}
movieinfo	actors for {MEDIANAME}
movieinfo	stars for {MEDIANAME}
movieinfo	in {MEDIANAME}
movieinfo	actors in {MEDIANAME}
movieinfo	stars in {MEDIANAME}
```

You will also need to create a custom slot type of type `MEDIATITLE` and assign it at least one value (seems to be required) although OMDB does a pretty good job with partial matches so don't worry about finding some exhaustive list of all the movies and tv shows ever produced.

to start the skill say 
`alexa start movie info`

then ask movieinfo for info on a movie or tv show e.g.
`movieinfo for Don't Be a Menace to South Central While Drinking Your Juice in the Hood`

or you can just say the name of the tv show or movie when prompted

also note you may need to use a name like `media info` for your invocation as it seems `movie info` is already an Alexa skill (perhaps unsurprising considering Amazon owns IMDB)