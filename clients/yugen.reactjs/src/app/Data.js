const empty = [];
let data, data2;

export default empty;

data = {
    "worlds": [
        {
            "id": "1", 
            "name": "Almania", 
            "description": ""
        },
        {
            "id": "2",
            "name": "Eznes",
            "description": ""
        },
        {
            "id": "3",
            "name": "Pillowoh",
            "description": ""
        }
    ],
    "books": [
        {
            "id": "1",
            "name": "Mirror of Revealing",
            "description": "BookDescription1",
            "world_id": "Almania"
        },
        {
            "id": "2",
            "name": "Still Lock on the Run",
            "description": "BookDescription1",
            "world_id": "Almania"
        },
        {
            "id": "3",
            "name": "Randomlife",
            "description": "BookDescription1",
            "world_id": "Eznes"
        },
        {
            "id": "4",
            "name": "Great Dogs",
            "description": "BookDescription1",
            "world_id": "Eznes"
        },
    ]
};

data2 = {
    "chapters": [
        {
            "id": "1",
            "name": "Mists of Darkness",
            "description": "",
            "content": "",
            "book_id": "1"
        },
        {
            "id": "2",
            "name": "Silence on the Bridge",
            "description": "",
            "content": "",
            "book_id": "1"
        },
        {
            "id": "3",
            "name": "Strong Currents",
            "description": "",
            "content": "",
            "book_id": "2"
        }
    ],
    "characters": [
        {
            "id": "1",
            "name": "Ali Perscia",
            "first": "Ali",
            "last": "Perscia",
            "age": "",
            "traits": "",
            "book_id": [
                "1",
                "2"
            ],
            "world_id": "1"
        },
        {
            "id": "2",
            "name": "Rayn Storm",
            "first": "Rayn",
            "last": " Storm",
            "age": "",
            "traits": "",
            "book_id": [
                "1",
                "2"
            ],
            "world_id": "1"
        },
        {
            "id": "3",
            "name": "Bilnt Cosas",
            "first": "Bilnt",
            "last": " Cosas",
            "age": "",
            "traits": "",
            "book_id": [
                "2"
            ],
            "world_id": "2"
        },
        {
            "id": "4",
            "name": "Likcak Cosas",
            "first": "Likcak",
            "last": " Cosas",
            "age": "",
            "traits": "",
            "book_id": [
                "2"
            ],
            "world_id": "2"
        },
    ],
    "religions": [],
    "species": [],
    "languages": [],
    "spells": [],
    "traditions": [],
    "vehicles": [],
    "stories": [],
    "laws": [],
    "organizations": [],
    "professions": [],
    "materials": [],
    "buildings": [],
    "locations": [],
};

let chapters, characters, religions, species, languages, spells, traditions, vehicles, 
    stories, laws, organizations, professions, materials, buildings, locations;
chapters = {
    "chapters": [
        {
            "id": "1",
            "name": "Mists of Darkness",
            "description": "",
            "content": "",
            "book_id": "1"
        },
        {
            "id": "2",
            "name": "Silence on the Bridge",
            "description": "",
            "content": "",
            "book_id": "1"
        },
        {
            "id": "3",
            "name": "Strong Currents",
            "description": "",
            "content": "",
            "book_id": "2"
        }
    ],
};
characters = {  "characters": [
        {
            "id": "1",
            "name": "Ali Perscia",
            "first": "Ali",
            "last": "Perscia",
            "age": "",
            "traits": "",
            "book_id": [
                "1",
                "2"
            ],
            "world_id": "1"
        },
        {
            "id": "2",
            "name": "Rayn Storm",
            "first": "Rayn",
            "last": " Storm",
            "age": "",
            "traits": "",
            "book_id": [
                "1",
                "2"
            ],
            "world_id": "1"
        },
        {
            "id": "3",
            "name": "Bilnt Cosas",
            "first": "Bilnt",
            "last": " Cosas",
            "age": "",
            "traits": "",
            "book_id": [
                "2"
            ],
            "world_id": "2"
        },
        {
            "id": "4",
            "name": "Likcak Cosas",
            "first": "Likcak",
            "last": " Cosas",
            "age": "",
            "traits": "",
            "book_id": [
                "2"
            ],
            "world_id": "2"
        },
    ],
};
religions = {"religions": [],};
species = {"species": [],};
languages = {"languages": [],};
spells = {"spells": [],};
traditions = {"traditions": [],};
vehicles = {"vehicles": [],};
stories = {"stories": [],};
laws = {"laws": [],};
organizations = {"organizations": [],};
professions = {"professions": [],};
materials = {"materials": [],};
buildings = {"buildings": [],};
locations = {"locations": [],};

export { data, data2 };
export { 
    chapters, characters, religions, species, languages, spells, traditions, vehicles, 
    stories, laws, organizations, professions, materials, buildings, locations 
};