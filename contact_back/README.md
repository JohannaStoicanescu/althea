# Contact backend

The sole purpose of this backend is to provide an endpoint on which to send any
data retrieved through the contact form on our website.

The endpoint is the following:
`http://HOST:3001/contact`

The data has to be sent in JSON format and contain the following two fields:
- `email`: the email. No validation is performed
- `role`: the role of the user sending data. ex: "bénéficiaire", "aide-soignant", "IDE", etc.

Any extra fields **will be recorded in the database** under `restOfData`.
