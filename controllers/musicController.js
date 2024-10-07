const Music = require('../models/music');
const path = require('path');

const musicController = {
    index: (req, res) => {
        Music.getAll((err, result) => {
            if (err) throw err;
            res.render('index', { songs: result });
        });
    },

    add: (req, res) => {
        const { title, artist } = req.body;
        const file = req.file;

        if (file) {
            const filepath = '/uploads/' + file.filename;
            Music.add(title, artist, filepath, (err) => {
                if (err) throw err;
                res.redirect('/');
            });
        } else {
            res.status(400).send("No file uploaded.");
        }
    },
    delete: (req, res) => {
        const id = req.params.id;
        Music.delete(id, (err) => {
            if (err) throw err;
            res.redirect('/');
        });
    }
};

module.exports = musicController;
