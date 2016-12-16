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

to start the skill say 
`alexa start movie info`

then ask movieinfo for info on a movie or tv show e.g.
`movieinfo for Don't Be a Menace to South Central While Drinking Your Juice in the Hood`