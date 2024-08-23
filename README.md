# authentication-and-authorisation-with-expressjs
QUESTION
"The delete user functionality can be done after authentication" Good idea or Bad idea?

RESPONSE
It is definitely not a good idea to allow the delete functionality to work only after authentication. It is rather best to allow this functionality only after authorisation. For better understanding, a breakdown of the differences between authentication and authorisation is necessary.

Authentication, simply put, is proof of identity. It is a security layer that ensures that only allowed users are allowed to access a website or a resource. Authorisation on the other hand defines what permissions or rights are allowed to specific users. For example, workers in a company can have their identities authenticated when they swipe a key card or other similar security tools, however the workers have different roles and responsibles. Thus, a manager's key card may allow him to access more resources than a cleaner's key card due to the difference in authority.

It is best practice to allow the delete user functionality only after authorisation to prevent the situation where users can delete other users' profiles without their permission. This would only ensue in confusion.