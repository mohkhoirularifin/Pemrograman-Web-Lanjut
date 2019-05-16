**TUGAS PERORANGAN/INDIVIDU**

**LAPORAN BAB 9**

**HTTP SEVICE**

**Disusun Sebagai:**

MATA KULIAH: PEMROGRAMAN WEB LANJUT

**Oleh:**

**Moh. Khoirul Arifin/1741720051**

**TI-2B**

![](media/29ead6ace402fb3f4cef7f2678b2ecf2.png)

**PROGRAM STUDI D-IV TEKNIK INFORMATIKA**

**JURUSAN TEKNOLOGI INFORMASI**

**POLITEKNIK NEGERI MALANG**

**2019**

**Praktikum - Bagian 2 : Getting Data**

1.  Buat component baru dengan nama posts dengan perintah **ng g c posts**

    ![](media/c90513aceab5bbbbd62371c067ab36ae.png)

2.  Untuk menggunakan HTTPService, kita perlu melakukan import HttpModule pada
    app.module.ts.

    ![](media/8a73694b6f7998193d9733ebbd0ed023.png)

    Setelah kita menambahkan HttpModule pada bagian imports, maka secara
    otomatis akan menambah imports pada bagian paling atas

    ![](media/d3e8f190751688c1ac705a7eadb3ed23.png)

>   Hint :

Jika HttpModule tidak muncul secara otomatis maka anda harus menginstal terlebih
dahulu dengan perintah **npm i \@angular/http**

![](media/72a87a24c6711efc0a8ad7d926dcf227.png)

![](media/597ce5f29f9500aa0c133c03f2945a81.png)

Setelah \@angular/http terinstall, maka anda dapat menjalankan praktikum pada
langkah 2.

1.  Modifikasi file **posts.component.ts** menjadi seperti berikut:

    ![](media/3ab09f76f76029d252846dff105ae17f.png)

    Class Http pada contructor digunakan untuk melakukan HTTP request ke back
    end.

2.  Ubah file app.component.html seperti berikut :

    ![](media/0560793fe710b157533a188d1622f5a1.png)

3.  Jalankan dan Catat hasilnya (soal 1)

    ![](media/8012ea6093771551e704d5108eb31032.png)

4.  Bagaimana jika anda lupa melakukan import HttpModule pada langkah ke-2 ?
    Lakukan commenting pada HttpModule seperti pada kode berikut :

    ![](media/15a7f55a16bf54af3ae86e1ac60c293b.png)

5.  Apa yang terjadi pada console? Berikan penjelasan atas error yang terjadi.
    (soal 2)

    ![](media/fd34c53cfe16aca32430425c9cd72ea1.png)

6.  Lengkapi kode program pada **posts.component.ts** menjadi :

    ![](media/a6d2146f6e7d2c1225bfcf0c269c4f1f.png)

7.  Jalankan pada browser dan jelaskan yang muncul pada console. (soal 3)

    ![](media/62708eced10ebd4f4d2e2d8901708c02.png)

8.  Jelaskan perbedaan yang terjadi pada console jika kode pada
    **posts.component.ts** diubah menjadi : (soal 4)

    ![](media/fbe9e6a4cc63db330f4b028ec535b183.png)

    ![](media/de4a1a4e1de3e553cc0fb0876e67e2df.png)

9.  Untuk menampilkan data pada halaman browser, ubah kode program pada
    **posts.component.html** seperti berikut :

    ![](media/b52742688f46e753cf7ea03af29381d5.png)

10. Ubah kode program pada **posts.component.ts :**

    ![](media/d3db34f1d9c91806b374f263058ee28f.png)

11. Jalankan dan jelaskan apa yang muncul pada browser. (soal 5)

    ![](media/45fa808f34c4904312ce0e7e20773227.png)

**Praktikum - Bagian 3 : Creating Data**

Perintah-perintah yang digunakan untuk melakukan HTTP Request diwakili oleh
beberapa kata kerja sebagai berikut digambarkan pada gambar 3.

![](media/a91bd53119b72122684a629841a50881.png)

Gambar 3. HTTP Request

1.  Kita akan menambahkan sebuah text area untuk memasukkan data melalui
    browser, seperti gambar berikut :

    ![](media/d19d2cd6f12dbc38d43d3ac9086ca381.png)

2.  Pertama, tambahkan input elemen pada **posts.component.html** :

    ![](media/5de0b2e610c9ea350dc6e12a725c482d.png)

3.  Modifikasi kode program pada **posts.component.ts**

    ![](media/ecbf4cbe4fe6b44dac34b354c5bffb86.png)

4.  Simpan dan jalankan pada browser.

    ![](media/e3893c44c60a6b47bb50b1b69b386551.png)

5.  Jelaskan dengan kalimatmu sendiri bagaimana jalannya program setiap baris
    pada fungsi **createPost**. (soal 6)

**Praktikum - Bagian 4 : Updating Data**

1.  Kita akan menambahkan sebuah button Update untuk mengubah data melalui
    browser, seperti gambar berikut :

    ![](media/cbdc2ee8ae43495b1e7fcbf057a204a2.png)

2.  Tambahkan button Update dengan modifikasi kode program seperti di bawah ini

    ![](media/2f8af9cfc6338389a893ba78e5125e0f.png)

3.  Tambahkan fungsi updatePost pada posts.ts seperti di bawah :

    ![](media/2d35b7982b06792d9ece3db15aa29973.png)

4.  Simpan dan jalankan pada browser.

    ![](media/d3658d8e9d80578d12c677590066eea5.png)

5.  Apa fungsi patch pada potongan kode program pada langkah 3? (soal 7)

**Praktikum - Bagian 5 : Deleting Data**

1.  Kita akan menambahkan sebuah button Delete di sebelah button Update untuk
    menghapus data melalui browser, seperti gambar berikut :

    ![](media/a61f94563931fc6cffbacd9cb2101456.png)

2.  Tambahkan button Delete dengan modifikasi kode program seperti di bawah ini
    :

    ![](media/0a7f4258e2ebb1358b665f80ecf0f522.png)

3.  Tambahkan fungsi deletePost pada posts.ts seperti di bawah :

    ![](media/080efed60172fc8ce68c10965017408c.png)

4.  Simpan dan jalankan pada browser.

    ![](media/389af4cd40b121a2cb057c75a238a747.png)

5.  Apa fungsi splice pada potongan kode program pada langkah 3? (soal 8)
