**TUGAS PERORANGAN/INDIVIDU**

**LAPORAN BAB 8**

**DIRECTIVES**

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

**Praktikum – Bagian 1: Building a Bootstrap Form**

1.  Buat component baru dengan nama signup-form dengan perintah **ng g c
    signup-form**

    ![](media/29ec7ccacd5eae412631edb9211355b4.png)

2.  Modifikasi app.component.html menjadi seperti berikut:

    ![](media/fc8c1be2b5061f7d497a191c849287f5.png)

3.  Modifikasi file signup-form.component.html menjadi seperti berikut:

    ![](media/1935554c680917efa0bd4a19040e8b8e.png)

4.  Jalankan dan Catat hasilnya (soal 1)

    ![](media/55093a7ea7a1e2db213087245a35dabe.png)

**Praktikum – Bagian 2: Control Programmatically**

1.  Modifikasi file signup-form.component.ts seperti dibawah ini:

    ![](media/cc1de8332898c291983dcfab58b2ec60.png)

2.  Modifikasi signup-form.component.html menjadi seperti berikut:

    ![](media/12688c0f1a73f4a59985fae4120d433d.png)

3.  Jalankan dan Catat hasil inspect elemen pada bagian console (soal 2), Akan
    muncul eror seperti berikut:

    ![](media/883b8b1ddd7f5562b8423a0cce5c260f.png)

4.  Modifikasi file app.module.ts tambahkan kode berikut:

    ![](media/e8b1c4857cc2d8d05256adda6872827e.png)

    ![](media/4d14136b9afb491fc66d970788b777e7.png)

5.  Jalankan dan Catat hasilnya di bagian console pada browser (soal 3)

    ![](media/0c68a4f1066dcb8f06f6e0109f5b1461.png)

**Praktikum - Bagian 3: Adding Validation**

1.  Modifikasi signup-form.component.ts menjadi seperti berikut:

    ![](media/4203dd854480f6c53f69b598a2ffdf78.png)

2.  Modifikasi signup-form.component.html menjadi seperti berikut:

    ![](media/0d7484032c3fc1d207facb4246633925.png)

3.  Jalankan, apakah validasi formnya berfungsi dan Catat hasilnya (soal 4)

    ![](media/799de540259483872ed80e96466333e2.png)

4.  Tambahkan get username pada file signup-form.component.ts seperti berikut:

    ![](media/595b949a6216ef8fc3480b5bed8aa90f.png)

5.  Modifikasi file signup-form.component.html menjadi seperti berikut:

    ![](media/a820a8bbafaf4f50b5c82becf2bb6419.png)

6.  Jalankan dan Catat hasilnya (soal 5)

    ![](media/7da1bc705f2498bd440903a994c1a78d.png)

    **Praktikum - Bagian 4: Specific Validation Errors**

7.  Modifikasi signup-form.component.ts menjadi seperti berikut:

    ![](media/47d3a8a1782ad558f6f74008969648b0.png)

8.  Modifikasi signup-form.component.html menjadi seperti berikut:

    ![](media/8d515e773dcce9353924fca62818962f.png)

9.  Jalankan dan Catat hasilnya (soal 6)

    ![](media/7fd1286ce2e14142c3bf966a272e3e63.png)

10. Modifikasi signup-form.component.html menjadi seperti berikut:

    ![](media/f097e94b6f29a90f063daf18477bb8ce.png)

11. Jalankan dan Catat hasilnya (soal 7)

    ![](media/d462cd610c8f663ce5396a428d19f8fd.png)

**Praktikum - Bagian 5: Custome Validation**

1.  Buat file baru pada folder signup-form dengan nama
    **username.validators.ts** dan isi dengan script sebagai berikut:

    ![](media/d22de775b9104fb0162270e4ffdd0c0e.png)

2.  Modifikasi signup-form.component.ts menjadi seperti berikut:

    ![](media/5a5b26e82ede41cc3053db823ff9b0ca.png)

3.  Modifikasi signup-form.component.html menjadi seperti berikut:

    ![](media/13b9835fa6c72c1cec05fb5eecf6fb77.png)

4.  Jalankan dan Catat hasilnya (soal 8)

    ![](media/c436bf4574f1eb389e5a9a429d6e627a.png)

**Praktikum - Bagian 6: Asyncronus Validation**

1.  Modifikas file username.validators.ts seperti berikut:

    ![](media/73a1cb219d948bd1c770b493012cb4a6.png)

2.  Modifikasi signup-form.component.ts menjadi seperti berikut:

    ![](media/7e33cfec72125e4fe1da9a3b8b74a255.png)

3.  Modifikasi signup-form.component.html, tambahkan \<div\> seperti berikut:

    ![](media/684a3d3b1ea7afa9946f7cc9c1e869b2.png)

4.  Jalankan dan Catat hasilnya (soal 9)

    ![](media/bfba9cba9b07aca6b8c63219e3741ed3.png)

**Praktikum - Bagian 7: Displaying a Loader Image**

1.  Modifikasi signup-form.component.html, tambahkan \<div\> seperti berikut:

    ![](media/666d559852c96f1e1770c2180703eb4b.png)

2.  Jalankan dan Catat hasilnya (soal 10)

    ![](media/442d77a6d146c3a943f115ccd470c93c.png)

**Praktikum - Bagian 8: Validating Form on Submit**

1.  Modifikasi signup-form.component.ts, dengan menambahkan method login()
    seperti berikut:

    ![](media/8987451e73858450ed58cbc48ca14390.png)

2.  Modifikasi signup-form.component.html seperti berikut:

    ![](media/adce7b3ab4b6fe263aab7686c88874f6.png)

3.  Jalankan dan Catat hasilnya (soal 11)

    ![](media/f0e4c01532ba3f799ced90b1a7951a44.png)
