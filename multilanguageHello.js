// write a function which takes two argument: name and the language and it
// returns a personalized greeting in the selected language 
// If no language is provided it defaults to English. 

// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'

// example:
greeting("bob", "spanish") 
// returns 
'Bienvenido, bob'

function greeting(name, lang) {
    if (lang == "english") return "Welcome, " + name;
    else if (lang == "czech") return "Vitejte, " + name;
    else if (lang == "danish") return "Velkomst, " + name;
    else if (lang == "dutch") return "Vitejte, " + name;
    else if (lang == "estonian") return "Tere tulemast, " + name;
    else if (lang == "finnish") return "Tervetuloa, " + name;
    else if (lang == "flemish") return "Welgekomen, " + name;
    else if (lang == "french") return "Bienvenue, " + name;
    else if (lang == "german") return "Willkommen, " + name;
    else if (lang == "irish") return "Failte, " + name;
    else if (lang == "italian") return "Benvenuto, " + name;
    else if (lang == "latvian") return "Gaidits, " + name;
    else if (lang == "lithuanian") return "Laukiamas, " + name;
    else if (lang == "polish") return "Witamy, " + name;
    else if (lang == "spanish") return "Bienvenido, " + name;
    else if (lang == "swedish") return "Valkommen, " + name;
    else if (lang == "welsh") return "Croeso, " + name;
}

console.log(greeting("Ksenias", "spanish"));
console.log(greeting("Marco", "polish"));
