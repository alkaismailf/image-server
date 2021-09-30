Cara menggunakan aplikasi:

1. Buka aplikasi/folder image-server pada code editor favorit.
2. Pada terminal, jalankan node server.js untuk menjalankan servernya.
3. Selanjutnya anda sudah bisa melakukan testing untuk upload image.
4. Gambar yang sudah diupload akan tersimpan pada folder uploads.
5. Proses testing dilakukan dengan aplikasi postman dengan route sebagai berikut:


Routes						HTTP Method	Deskripsi
http://localhost:3000/fclub			GET		Melihat semua data klub bola
http://localhost:3000/fclub			POST		Buat data klub bola baru
http://localhost:3000/fclub			DELETE		Hapus semua data klub bola
http://localhost:3000/fclub/:name		GET		Menampilkan klub bola dengan nama yang ditentukan
http://localhost:3000/fclub/:name		POST		Tambahkan comment pada klub bola dengan nama yang ditentukan
http://localhost:3000/fclub/:name		DELETE		Hapus klub bola dengan nama yang ditentukan


Untuk melihat gambar yang sudah diupload dan proses routes lainnya, bisa dilihat dengan beberapa contoh route berikut:
Method 		Route						Deskripsi
GET		http://localhost:3000/uploads/juventus.jpg	Melihat gambar yang sudah diupload
GET		http://localhost:3000/fclub/real%20madrid	Menampilka data klub yang dipilih (dalam kasus ini real madrid)
DELETE		http://localhost:3000/fclub/barcelona		Menghapus Data klub yang dipilih (dalam kasus ini barcelona)
POST		http://localhost:3000/fclub			Membuat data klub baru dengan parameter


Parameter untuk route POST adalah:
KEY		TYPE
name		text/string
image		file/string
description	text/string
keywords	text/string
origin		text/string