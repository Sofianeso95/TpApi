/*
const db = require("../../db");

class User {
  constructor(d) {
    if (d== null) {
        this._id = null;
    this._created_at = null;
    this._modified_at =  null;
    this._firstname =    null;
    this._lastname = null;
    this._status =   null;
    this._active =  null;
    } else {

    this._id = d.id;
    this._created_at = d.created_at;
    this._modified_at = d.modified_at;
    this._firstname = d.firstname;
    this._lastname = d.lastname;
    this._status = d.status;
    this._active = d.active;
  }
    }


  get id() {
    return this._id;
  }
  get created_at() {
    return this._created_at;
  }
    get modified_at() {
    return this._modified_at;
    }

    get firstname() {
    return this._firstname;
    }
    get lastname() {
    return this._lastname;
    }
    get status() {
    return this._status;
    }
    get active() {
    return this._active;
    }


    set id(id) {
    this._id = id;
    }
    set created_at(created_at) {
    this._created_at = created_at;
    }
    set modified_at(modified_at) {
    this._modified_at = modified_at;
    }
    set firstname(firstname) {
    this._firstname = firstname;
    }
    set lastname(lastname) {
    this._lastname = lastname;
    }
    set status(status) {
    this._status = status;
    }
    set active(active) {
    this._active = active;
    }





    static all(callback) {
        db.query('SELECT * FROM users',
            function (err, users) {
                callback(users.map((user) => new User(user)))
            })
    }



    static getUserById(id, callback) {
        db.query('SELECT * FROM users WHERE id = ?', [id],
            function (err, user) {
                callback(new User(user))
            })
    }

    static createUser(firstname, lastname, status, active, results) {
        db.query('INSERT INTO users (firstname, lastname, status, active) VALUES (?,?,?,?)', [firstname, lastname, status, active], (err, results) => {
            if (err) {
                console.error('Erreur ', err);
            } else {
                console.log('Nouvel utilisateur:', firstname);
            }
        })
    }


    static UpdateUser(id, firstname, callback) {
        db.query('UPDATE users SET firstname = ? WHERE id = ?', [firstname, id],
            function (err, user) {
                callback(new User(user))
            })
    }

    static getDeleteUser(id, callback) {
        db.query('DELETE FROM users WHERE id = ?', [id],
            function (err, user) {
                callback(new User(user))
            })
    }
        


}
module.exports = User;
*/