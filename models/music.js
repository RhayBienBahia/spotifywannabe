const db = require('../config/db');

const Music = {
  getAll: function(callback) {
    db.query("SELECT * FROM songs", callback);
  },
  add: function(title, artist, filepath, callback) {
    db.query("INSERT INTO songs (title, artist, filepath) VALUES (?, ?, ?)", [title, artist, filepath], callback);
  },
  delete: function(id, callback) {
    db.query("DELETE FROM songs WHERE id = ?", [id], callback);
  }
};

module.exports = Music;
