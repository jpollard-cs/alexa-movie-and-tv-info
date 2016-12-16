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
```