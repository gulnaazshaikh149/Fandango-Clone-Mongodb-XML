conn = new Mongo("localhost:27017");
db = conn.getDB("Fandango");
coll_shaikh = db.getCollection("shaikh");
coll_shaikh2 = db.getCollection("shaikh2");

// Object IDs for theaters
var theater1 = new ObjectId()
var theater2 = new ObjectId()

// Inserting theaters into the shaikh2 collection
doc = {_id: theater1, name: "Movies 10", location: "2609 West Henrietta Road, Rochester, NY 14623"}
coll_shaikh2.insertOne(doc)

doc = {_id: theater2, name: "Cinemark Tinseltown Rochester and Imax", location: "2291 Buffalo Road, Rochester, NY 14624"}
coll_shaikh2.insertOne(doc)


// Inserting movies into shaikh collection

//theatre1
doc = {title: "TALK TO ME", genre: "Horror", PG: "R" , Duration: "1 hr 34 min", theater: theater1, showtimes: ["2:20 PM", "8:30 PM"]}
coll_shaikh.insertOne(doc)

doc = {title: "Oppenheimer", genre: "Drama", PG: "R" , Duration: "3 hour", theater: theater1, showtimes: ["11:40 AM","3:25 PM", "7:10 PM"]}
coll_shaikh.insertOne(doc)

doc = {title: "Barbie 2023", genre: "Comedy", PG: "PG-13" ,Duration: "1 hr 54 min", theater: theater1, showtimes: ["12:10 PM","2:40 PM","5:15 PM","7:50 PM"]}
coll_shaikh.insertOne(doc)

//theatre2
doc = {title: "JAWAN 2023", genre: "Action", PG: "PG-13" , Duration: "2 hr 45 min", theater: theater2, showtimes: ["10:15 AM", "4:55 PM", "8:40 PM"]}
coll_shaikh.insertOne(doc)

doc = {title: "STRAYS 2023", genre: "Comedy", PG: "R" , Duration: "1 hr 33 min", theater: theater2, showtimes: ["5:30 PM", "10:45 PM"]}
coll_shaikh.insertOne(doc)

doc = {title: "Haunted Mansion", genre: "Comedy", PG: "PG-13" , Duration: "2 hr 2 min", theater: theater2, showtimes: ["10:20 AM", "1:15 PM"]}
coll_shaikh.insertOne(doc)

//Adding another movie from the Movies.pdf which is running by BOTH the theatres
doc = {title: "Barbie 2023", genre: "Comedy", PG: "PG-13" , Duration: "1 hr 54 min", theater: theater2, showtimes: ["12:20 PM","3:20 PM","6:30 PM", "9:20 PM"]}
coll_shaikh.insertOne(doc)

// Print Confirmation
print("Insert Successful");

// Displaying the documents in the database
print("Movies in the Database")
cursor = coll_shaikh.find();
while (cursor.hasNext()) {
	doc=cursor.next();
	printjson(doc);
}