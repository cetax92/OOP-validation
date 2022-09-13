let config = {
  ime_prezime: {
    requiered: true,
    minlength: 3,
    maxlength: 50,
  },

  korisnicko_ime: {
    requiered: true,
    minlength: 5,
    maxlength: 50,
  },

  email: {
    requiered: true,
    email: true,
    minlength: 5,
    maxlength: 50,
  },

  broj_telefona: {
    minlength: 9,
    maxlength: 30,
  },
  postal_code: {
    minlength: 3,
    maxlength: 5,
    numberonly: true,
  },

  lozinka: {
    requiered: true,
    minlength: 7,
    maxlength: 25,
    matching: "ponovi_lozinku",
  },

  ponovi_lozinku: {
    requiered: true,
    minlength: 7,
    maxlength: 25,
    matching: "lozinka",
  },
};

let validator = new Validator(config);
