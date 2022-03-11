# hotel-app-react-express-ex
Backend

Routes
``` 
GET
http://localhost:3001/api/hotel/get-hotels
```
``` 
POST
http://localhost:3001/api/hotel/insert-hotel
JSON de ejemplo para el insert
```
```JSON
{
  "hotel_name": "Poramba Hostel",
  "hotel_desc": "Small, friendly and relaxed hostel, offering both shared and private rooms. In a very nice.",
  "hotel_location": "El Urú 120, Puerto Iguazú",
  "category": "3",
  "price": "30",
  "photos": [
    "https://i.ibb.co/0ym6qXw/poramba-hostel.jpg",
    "https://i.ibb.co/pjCZYFy/280495506.jpg",
    "https://i.ibb.co/S3h1MY6/las-areas-comunes-son.jpg"
  ],
  "reviews": [
    {
      "calification": "1",
      "title": "Very bad customer service!",
      "review": "I purchased a 7 day advanced room (actually 2 months prior) and needed to cancel my trip. I called almost one month in advance and was told I can cancel but I would not receive a refund. I was never told that it was not refundable. 5 other reservations all said no problem but not here. Please don't do business with a company like this!"
    },
    {
      "calification": "5",
      "title": "An amazing historic hotel",
      "review": "We stayed 3 nights and it was great. The room was a great size; bed was very comfortable"
    },
    {
      "calification": "4",
      "title": "Super hotel when using Amtrak",
      "review": "This is a great little hotel located within walking distance of the Amtrak station. The room we had was super, new furniture fairly large and a wonderful updated bathroom. The Wifi was great and reliable. The breakfast is very good with waffles plus they had fruit etc. The staff could not have been more friendly or efficient. The property is good value and located near lots of pubs and restaurants"
    }
  ]
}

```
``` 
PUT
http://localhost:3001/api/hotel/update-hotel
```
```JSON
{
  "id": "622b79e1729329322017f1cc",
  "hotel_name": "Poramba Hostel",
  "hotel_desc": "Small, friendly and relaxed hostel, offering both shared and private rooms. In a very nice.",
  "hotel_location": "El Urú 120, Puerto Iguazú",
  "category": "4",
  "price": "60",
  "photos": [
    "https://i.ibb.co/0ym6qXw/poramba-hostel.jpg",
    "https://i.ibb.co/pjCZYFy/280495506.jpg",
    "https://i.ibb.co/S3h1MY6/las-areas-comunes-son.jpg"
  ],
  "reviews": [
    {
      "calification": "1",
      "title": "Very bad customer service!",
      "review": "I purchased a 7 day advanced room (actually 2 months prior) and needed to cancel my trip. I called almost one month in advance and was told I can cancel but I would not receive a refund. I was never told that it was not refundable. 5 other reservations all said no problem but not here. Please don't do business with a company like this!"
    },
    {
      "calification": "5",
      "title": "An amazing historic hotel",
      "review": "We stayed 3 nights and it was great. The room was a great size; bed was very comfortable"
    },
    {
      "calification": "4",
      "title": "Super hotel when using Amtrak",
      "review": "This is a great little hotel located within walking distance of the Amtrak station. The room we had was super, new furniture fairly large and a wonderful updated bathroom. The Wifi was great and reliable. The breakfast is very good with waffles plus they had fruit etc. The staff could not have been more friendly or efficient. The property is good value and located near lots of pubs and restaurants"
    }
  ]
}

```
``` 
DEL
http://localhost:3001/api/hotel/delete-hotel
```
```JSON
{
    "id": "622b79e1729329322017f1cc"
}
```
