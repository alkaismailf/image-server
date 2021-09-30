// import model Fclub
const Fclub = require('../models/fclubModel');
const multer = require('multer');

// function GET '/fclub'
const getAllClub = (req, res) => {
    Fclub.find({}, (err, data) => {
        if (err){
            return res.json({Error:err});
        } 
        return res.json(data);
    })
};

// function POST '/fclub'
const newClub = (req, res) => {
    // cek nama club apakah sudah ada di database
    Fclub.findOne({name:req.body.name}, (data) => {
        // jika club belum ada, tambahkan
        if(data===null){
            // buat data club baru pake model Fclub dan req.body
            const newClub = new Fclub({
                name: req.body.name,
                image: req.file.path,
                description: req.body.description,
                keywords: req.body.keywords,
                origin: req.body.origin,
            })

            // simpan ke database
            newClub.save((err, data) => {
                if (err) throw res.json({Error:err});
                return res.json(data);
            });
        // jika club sudah ada di database, return pesan notifikasi data sudah ada
        } else {
            return res.json({message: 'Club sudah ada'});
        }
    })
};

// function DELETE '/fclub'
const deleteAllClub = (req, res) => {
    Fclub.deleteMany({}, err => {
        if (err) {
            return res.json({message: "Delete keseluruhan gagal"});
        }
        return res.json({message: "Delete keseluruhan Berhasil"});
    })
};

// function GET '/fclub/:name'
const getOneClub = (req, res) => {
    let name = req.params.name; // mendapatkan nama club

    // cari club dengan nama tersebut
    Fclub.findOne({name: name}, (err, data) => {
        if(err || !data) {
            return res.json({message: "Club tidak ada"});
        }
        else return res.json(data); // return object club jika ada
    })
};

// function POST '/fclub/:name'
const newComment = (req, res) => {
    let name = req.params.name; // ambil nama club yg mau ditambahkan comment
    let newComment = req.body.comments; // ambil comment

    // buat object comment untuk di push
    const comment = {
        text: newComment,
        date: new Date()
    }

    //cari object club
    Fclub.findOne({name:name}, (err, data) => {
        if(err || !data || !newComment) {
            return res.json({message: "Club tidak ada."});
        }
        else {
            // tambahkan comment ke array comment pada object club
            data.comments.push(comment);
            // simpan di database
            data.save(err => {
                if (err) {
                    return res.json({message: "Comment gagal ditambahkan.", error:err});
                }
                return res.json(data);
            })
        }
    })
};

// function DELETE '/fclub/:name'
const deleteOneClub = (req, res) => {
    let name = req.params.name; //ambil nama yang akan di delete

    Fclub.deleteOne({name:name}, (err, data) => {
        if(err || !data) {
            return res.json({message: "Club tidak ada."});
        }
        else return res.json({message: "Club berhasil dihapus."}); // delete jika ada
    })
};

// function untuk menentukan destinasi file yang diupload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

// function menentukan proses upload image dan banyaknya file yang dapat diupload
const uploadImg = multer({storage: storage}).single('image');

module.exports = {
    getAllClub, 
    newClub, 
    deleteAllClub,
    getOneClub,
    newComment,
    deleteOneClub,
    uploadImg,
 };