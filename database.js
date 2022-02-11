const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE resturants (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            desc text, 
            min_price REAL,
            path text
            )`,
            (err) => {
                if (err) {
                    // Table already created
                } else {
                    // Table just created, creating some rows
                    const insert = 'INSERT INTO resturants (name, desc, min_price, path) VALUES (?,?,?,?)'
                    db.run(insert, ["Golden Choice Burger", "Die Burger-Bun Farbe kann variieren - mit Un-Beef-Patty, Barbecuesauce, knusprigem Un-Bacon, Jalapenos, Un-Käsesauce, Salat, Tomaten, Gewürzgurken, roten Zwiebeln, Senf-Burger-Mayonnaise, Lauchzwiebeln und Cocktail-Mayonnaise", 100, "rest1.jpg"])
                    db.run(insert, ["Maredo", "Maredo Resturant is very beautiful", 200, "rest2.jpg"])
                    db.run(insert, ["Golden Choice Restaurant", "Sushi, Chinesisch, Japanisch", 100, "rest3.jpg"])
                    db.run(insert, ["Rosenthaler Grill", "Döner, Türkisch", 80, "rest4.jpg"])
                    db.run(insert, ["Good'n Vegan", "Burger, Vegan, Poke bowl", 120, "rest5.jpg"])
                    db.run(insert, ["Dong Do Restaurant", "Asiatisch, Thailändisch, Vietnamesisch", 120, "rest6.jpg"])
                }
            });

        db.run(`CREATE TABLE dishes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name text, 
                desc text, 
                price REAL,
                path text,
                resturant_id INTEGER
                )`,
            (err) => {
                if (err) {
                    // Table already created
                } else {
                    // Table just created, creating some rows
                    const insert = 'INSERT INTO dishes (name, desc, price, path, resturant_id) VALUES (?,?,?,?,?)'
                    db.run(insert, ["New Classic Burger", "Die Burger-Bun Farbe kann variieren - mit Un-Beef-Patty, Barbecuesauce, knusprigem Un-Bacon, Jalapenos, Un-Käsesauce, Salat, Tomaten, Gewürzgurken, roten Zwiebeln, Senf-Burger-Mayonnaise, Lauchzwiebeln und Cocktail-Mayonnaise", 12.5, "dish.png", 1])
                    db.run(insert, ["Fries", "Pommes frites mit Trüffelmayonnaise und Un-Parmesan", 5.5, "dish.png", 1])

                    db.run(insert, ["The Happy Chicken Burger", "Die Burger-Bun Farbe kann variieren - mit Un-Schnitzel, Knoblauch-Mayonnaise, Salat, Tomaten, Jalapenos, Senf-Burger-Mayonnaise, Gewürzgurken, Röstzwiebeln und Knoblauch-Mayonnaise", 12.5, "dish.png", 2])
                    db.run(insert, ["I beleaf in you Salad", "mit Salat, Un-Parmesan, Caesar-Dressing, Chips und Tomaten", 7.5, "dish.png", 2])
                }
            });
    }
});


module.exports = db