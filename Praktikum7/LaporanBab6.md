**TUGAS PERORANGAN/INDIVIDU**

**LAPORAN BAB 6**

**TEMPLATE-DRIVEN FORMS**

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

**Bab 6**

**Template-Driven Forms**

>   Pada bab ini kita akan membahas penggunaan form dengan berbagai macam
>   inputan, menampilkan validasi error, dan perbedaan antara template-driven
>   forms dengan reactive form.

Membuat Form Boostrap
=====================

>   Pada sub bab ini kita akan membuat sebuah form dengan menggunakan bootstrap.

>   Untuk lebih jelasnya ikuti langkah berikut

-   buatlah sebuah component dengan nama contact

![](media/ad7166968ab5be904d4e5b53b743412f.png)

-   buka file contact.component.html dan tambahkan code berikut:

![](media/69e3a0632a1188d51e0b60ca82f87edd.png)

-   buka file app.component.html dan tambahkan code berikut

![](media/1f521586d716d4904e33802c804d5797.png)

-   jalankan servernya maka hasilnya seperti berikut

![](media/5d0d669f948d8f89f991365835115cd8.png)

Macam-Macam Form
================

>   Dalam penggunaan form pada angular dapat menggunakan template-driven dan
>   reactive form. perbedaan antara template-driven dan reactive form adalah
>   pada reactive form biasanya juga disebut model-driven, penggunaan reactive
>   form menghindari penggunaan directive seperti ngModel, required dsb. Pada
>   reactive form ini menggunakan reactive-pattern, testing dan validasi yang
>   bersifat synchrous. Untuk lebih jelasnya kita buat sebuah contoh penggunakan
>   reactive form.

-   generate 2 buah component dengan nama reactive-form dan template-driven

![](media/c212849ddbd827862644d736b87b0bb6.png)

![](media/1b2d1e767147a6c0cd06e4595ae336c6.png)

-   buka file reactive-form.component.html dan buatlah code seperti berikut

![](media/72eafbf08b329b7a6669bd320fbf696b.png)

![](media/0006099a8008d0ba2af2c18730ca8538.png)

-   buka file app.component.html dan tambahkan code berikut

![](media/dbe13d0dbac303e89623bbf735e907ef.png)

-   sehingga hasilnya seperti berikut

    ![](media/cc74b942bd86dd4b8dfd0eb0d05c587b.png)

    -   langkah berikutnya buatlah sebuah interface dengan nama
        mahasiswa.interface.ts dan tambahkan code berikut

    ![](media/fbca5aa0ca8a60a034280bba642e23f1.png)

![](media/3c6bdcd0e0525347ea131efffd0f0d83.png)

-   Dikarenakan untuk menggunakan reactive-forms diperlukan FormBuilder dan
    FormGroup dari module ReactiveFormsModule maka kita harus tambahkan
    ReactiveFormModule dan FormGroup pada app.module.ts seperti pada gambar
    berikut

![](media/e5914bc9b890d251f730f091ed41cf37.png)

-   buka file reactive-form.component.ts, import terlebih dahulu FormBuilder dan
    FormsGroup dan tambahkan beberapa code berikut

![](media/c4f91c77bb3370aa5d3f23abe3f2046a.png)

![](media/e4023a680af8c1e5d0f0ad7ed53a20ed.png)

>   Penjelasan code

-   line 14 adalah sebuah property yang merupakan sebuah FormGroup

-   line 16-19 pada constructor terdapat parameter mhs yang merupakan
    FormBuilder dan dimana didalam constructor tersebut terdapat method untuk
    generate form

-   line 25-33 adalah method yang digunakan untuk mengenerate form yang sesuai
    dengan structur form

![](media/6acb1a3c989e06a91e22399c13d7d6c0.png)

-   line 35-38 method yang digunakan untuk menampilkan isi dari inputan user ke
    dalam console

-   buka file reactive-form.component.html dan modifikasi codenya menjadi
    seperti berikut

![](media/3fbdb14d1938dcdb579dd94c5ad0f0f7.png)

![](media/50eeeed514039d1c97bfbede253108ce.png)

>   penjelasan code

-   pada line 3 dan 15 terdapat FormGroup yaitu mahasiswa dan pendidikan seperti
    pada mahasiswa.interface.ts

![](media/6acb1a3c989e06a91e22399c13d7d6c0.png)

-   pada line 3 terdapat event-binding yaitu ngSubmit dimana jika button submit
    diclik maka method onSubmit dengan parameter mahasiswa pada
    reactive-form.component.ts akan berjalan

-   line 9, 20, 30 adalah FormControlName sesuaikan dengan interface mahasiswa

-   jalan server localhost maka hasilnya seperti berikut

![](media/86d060dde7193031baf02c8f4409723e.png)

>   Percobaan diatas adalah penggunaan form menggunakan reactive-form untuk
>   berikutnya kita akan membuat form menggunakan template-driven. Untuk lebih
>   jelas ikuti langkah berikut ini:

-   untuk template-driven kita membutuhkan FormsModule pada app.module.ts, jadi
    buka file app.module.ts dan tambahkan FormsModule

![](media/2fa6d0266943dc4ad35be8b74e0816e4.png)

-   buka file template-driven.componentn.ts dan tambahkan struktur form seperti
    berikut

![](media/03919a4d054ccb22fc5995281c7c0782.png)

-   buka file template-driven.component.html dan tambahkan code berikut

![](media/79ddc467ad6e1e4e07f2a40654dba374.png)

![](media/5ba5640c30ad2096044c19868c23af00.png)

-   tambahkan method onSubmit pada template-driven.component.ts

![](media/9e7600e6dc613b546b5295c5a1308ea7.png)

-   buka file app.component.html tambahkan code berikut

![](media/798c8f71ac29b3f0b0f3ee5cf33ed82f.png)

-   hasil

![](media/c9716cd0355cf71c88510a6d895ab460.png)

>   jika kita lihat hasilnya sama tetapi penggunaan directivenya yang berbeda

ngModel
=======

>   ngModel adalah sebuah directive untuk binding data atau value ke variable,
>   semisalnya terdapat kode seperti berikut :

-   *[(ngModel)]=”nama”*

>   berarti value/nilai yang ada pada input yang memilki attribute tersebut akan
>   masuk kedalam variable nama. Sebagai pembuktian lakukan beberapa percobaan
>   berikut :

-   buka file contact-form.component.html dan tambahkan ngmodel seperti berikut

![](media/f12004bdc5da0007487af90a6d70ac0c.png)

-   buka file contact-form.component.ts dan tambahkan decorator input ( line 9
    dan 10)

![](media/da46ae8132e0a37c4fd2cd2f00ea7c1f.png)

-   coba jalan servernya dan lihat terdapat pesan error seperti pada gambar
    berikut

![](media/4dbabea8eb559c24e51c9ea3d4695b51.png)

>   penjelasan error : hal ini disebabkan jika kita menggunakan ngModel maka
>   kita harus menambahkan atribut name pada tag tersebut

-   tambahkan atribut name pada tag input

![](media/b19a807f457778ed5585a05a94caa383.png)

-   jalankan servernya ( cat:tidak perlu diklik button untuk menampilkan data
    karena tidak menggunakan event binding jadi inputan akan langsung tampil
    saat user memasukan data)

![](media/680d710d4187654f6470224131e4158a.png)

>   kita juga dapat melihat properties pada ngModel, Untuk lebih jelasnya ikuti
>   langkah bertikut

-   buka file contact.component.html modifikasi code berikut ini: penjelasan
    code :

    -   line 31 ngModel adalah directive

    -   line 32 \#firstname=”ngModel” adalah property dari ngModel atau template
        variable **(\#namavariabel)**

    -   line 33 (change)=”log(firstName)” adalah untuk melakukan perubahan pada
        method log dengan parameter firstName

![](media/e6ee18af383a876f7fb8871a243e29b6.png)

>   Pada textarea tambahkan juga ngModel seperti pada gambar berikut line 43

![](media/1b9b18559346407708d253dd45b09e40.png)

-   buka file contact.component.ts modifikasi code berikut ini

![](media/d684db6d88508940da93009903f3f54c.png)

-   jalankan server dan lihat pada inspect maka akan muncul property dari
    ngModel

![](media/b8864c3b2246488dc4477fbae93247ad.png)

>   Penjelasan gambar

-   jika kita click pada (…) pada control maka akan muncul FormControl dan
    dimana terdapat instance dari FormControl Class di angular. Sebagai contoh
    ada property dirty yang digunakan untuk menentukan jika nilai dari inputan
    field berubah. jika kita click maka nilainya true hal ini karenakan kita
    memasukkan value di input field dan ada perubahan inputan sehingga dirty
    bernilai true

-   sedangkan kebalikan dari property dirty adalah pristine dan bernilai false

Validasi
========

>   Pada sub bab ini kita akan membuat sebuah validasi dengan menggunakan
>   bantuan directive, untuk lebih jelasnya ikuti langkah berikut

-   buka file contact.component.html dan tambahkan code berikut

![](media/a43973a9de55abcbd8d52e9c112fe2dd.png)

>   Penjelasan code

-   line 31 required berarti harus diisi

-   line 37 adalah alert, jika kondisi menggunakan directive ngif dimana jika
    firstName bernilai false atau dengan kata lain tidak ada isinya maka akan
    muncul alert.

![](media/def1053396f8c757c007ca8e78ebff31.jpg)

valid adalah sebuah property pada ngModel seperti pada gambar berikut ( cat :
nilai valid berupa true dikarenakan ada isinya pada inputan textfield)

-   jalankan localhost dan lihat hasilnya

![](media/cb65e595873b884692fa02b2e50028a0.png)

-   jika kita jalankan maka secara default alert akan muncul. Untuk itu kita
    membutuhkan sebuah kondisi lagi. Buka file contact.component.html dan
    tambahkan code berikut (line 39)

![](media/eb0de1add5575f199b27394ce65b1729.png)

>   Penjelasan code:

-   pada line 39 terdapat directive ngIf terdapat 2 kondisi yaitu touched dan
    valid, jika kedua kondisi ini tidak terpenuhi maka akan muncul alert

-   jalankan localhost pada saat dijalankan maka secara default alert tidak akan
    muncul dan pada saat field nama dikosongkan maka akan muncul alert “Nama
    harus diisi”

![](media/5f524d4a2e37d3d0f6fd5eb309a765d6.png)

![](media/97624c17f40d25f7345c35502a2fba91.png)

spesific validasi error
=======================

>   Ada beberapa macam untuk validasi error seperti minlength, maxlength,
>   pattern dan required. Untuk lebih jelasnya ikuti langkah-langkah berikut :

-   buka file conctact.component.html dan tambahkan beberapa code berikut

![](media/90b46dc2cdccba675564a3c862643edd.png)

>   penjelasan code :

-   line 32 minlength adalah min abjad yang harus diisi

-   line 33 maxlenth adalah max panjang abjad

-   line 34 pattern adalah yang harus diisi

-   line 44 ngif (error required) adalah sebuah kondisi jika line 42 tidak
    terpenuhi

-   line 45 ngif (error minlength) adalah sebuah kondisi dimana nama kurang dari
    3 abjad

-   linr 47 ngif (error pattern) adalah sebuah kondisi dimana jika inputan user
    tidak sesuai dengan patternnya

-   jalankan localhost jika kita masukkan angka 1

![](media/72bd8da07bb6d9240c7fd0ad5827c976.png)

>   jika kita inspect element maka pada bagian property errors terdapat
>   jenis-jenis validasi yang digunakan seperti pada gambar berikut

![](media/dc6c23c3d9300a365a4a73296a68bb8b.png)

styling Invalid input field
===========================

>   Kita dapat menambahkan sebuah style pada input fieldnya sebagai contoh jika
>   terdapat error maka selain menampilkan. Untuk lebih jelasnya ikuti langkah
>   berikut

-   jika kita inspect element pada tab element dan kita click pada bagian form
    validation, maka pada element akan menunjukkan sebuah code angular
    ng-content class ng-invalid,ng-dirty dan ng-touched.

-   pada sub bab ini kita akan memodifikasi agar selain muncul alert pada form
    input akan merah juga

![](media/ae182d8dbb22c98e9da601bc10d21dba.png)

-   buka file contact.component.css dan tambahkan code berikut

![](media/48ac876a4a8fbf201d17cf731d7a73f4.png)

-   jalankan localhost jika kita inputkan salah

![](media/1505a975dc78490e73adb58cd1747014.png)

ngForm
======

>   ngForm adalah directive Angular yang penting untuk membuat template-driven
>   forms. Mari kita mulai dengan ngForm dulu. Berikut adalah kutipan tentang
>   ngForm dari dokumentasi Angular.

>   Directive NgForm melengkapi elemen form dengan fitur tambahan. Ini memegang
>   kendali yang kamu buat untuk elemen dengan directive ngModel dan atribut
>   name, dan memonitor properti mereka, termasuk keabsahannya. Ini juga
>   memiliki properti valid sendiri yang mana hanya benar *jika setiap kontrol
>   yang terkandung* itu benar. Untuk lebih jelasnya ikuti langkah-langkah
>   berikut :

-   buka file contact.component.ts dan tambahkan sebuah method submit seperti
    pada gambar berikut (line 23-25)

![](media/749530b6a441cac479889f162392965b.png)

-   buka file contact.component.html dan buatlah sebuah template variabel ngForm
    atau property ngForm dengan nama form (\#form) yang nanti digunakan sebagai
    parameter dari method submit seperti pada gambar berikut (line 24)

![](media/5ce26736d62c1affc08ba91ab82f62c6.png)

-   pada button rubah codenya menjadi \<button type="submit" class="btn btn-
    primary"\>

![](media/9d0081dfc9e81bcac8aaa3bf304262ad.png)

-   jalankan localhost dan inspect element, masukkan pada field nama adalah
    pisang dan

>   tambahkan pada text area kata-kata setelah itu tekan button. Maka pada saat
>   di inspect element pada ngform property value:object terdapat nilai dari
>   yang diinputkan user seperti pada gambar berikut

![](media/7bcc4e994ebe41ee5d3a8c2fc7c3c6c4.png)

ngModelGroup
============

>   Terkadang kita bekerja dengan banyak form dan kita ingin membuat beberapa
>   group dalam form tersebut sebagai contoh kita ingin inputan nama sebagai
>   modelGroup sendiri maka lakukan hal berikut:

-   buka file contact.component.html dan tambahkan code (line 26-27) dan copy
    paste inputan nama ke dalam div ngModelGroup seperti pada gambar

![](media/e443794367241e6836481ec5aba723d5.png)

-   jika kita ingin membuat validasi pada ngFormGroup maka kita dapat
    menambahkan template variabel seperti pada gambar berikut

![](media/df1613b8488cde3d51bc62d9b7c41b0f.png)

![](media/b802ba64b562126baf58f12946290a66.png)

Disabling the submit button
===========================

>   Kita dapat membuat atau mengkondisikan button submit seperti button submit
>   tidak akan dapat diklik jika nilai validnya sama dengan false. Untuk lebih
>   jelasnya ikuti langkah berikut **( kondisikan contact.component.html seperti
>   semula sebelum menggunakan ngFormGroup )**

-   buka file contact.component.html dan tambahkan code berikut pada tag button

![](media/19c7ee867d9e186f2da11844c809dec1.png)

-   jalankan localhost jika berhasil secara default button akan disable, button
    akan enable saat terdapat inputan

![](media/768d461f050eabd28bcc6e9cfc5637ff.png)

![](media/1ae0613b94a250f9dab6ab95d760eaae.png)

bekerja dengan check box
========================

>   Kita juga dapat menambahkan check box pada angular seperti berikut

-   buka file contact.component.html dan tambahkan code check box seperti pada
    gambar berikut (line 66-73)

![](media/d4af585ae9da92fd4ea1fcc0585ab036.png)

>   penjelasan code

-   line 66-70 adalah checkbox

-   line 68 terdapat property ngModel dengan name dengan nama isSubscribe

-   line 72 digunakan untuk menampilkan data menggunakan json

-   jalankan localhost

![](media/af075a3749cad1076fa8cefa1c6e9797.png)

bekerja dengan drop-down list
=============================

>   selain menggunakan check box kita juga dapat menggunakan dropdown list.
>   Untuk lebih jelasnya ikuti langkah berikut

-   buka file contact.component.html tambahkan code untuk dropdown list seperti
    pada gambar berikut (line 72-77)

![](media/e5a73b28fd9eef6ad799552e20aede9f.png)

>   Penjelasan code :

-   line 72-77 adalah check box

-   line 74 terdapat property name=”conctactMethod” dari ngModel

-   line 75 terdapat directive ngfor dengan property binding [value] dan
    menampilkan data dengan string interpolar {{method.name}}

-   buka file contact.component.ts dan tambahkan code berikut (line 21-24)

![](media/c33259d5535197f35690f9a28ddc91d7.png)

-   jalankan localhost maka hasilnya seperti berikut

![](media/b481a56cfcb3dc8da39dc2f398c7ae6e.png)

>   Penjelasan Gambar: jika kita lihat pada gambar diatas saat kita memilih
>   email maka pada json -\> contactMethod bernilai 1 seperti pada
>   contact.component.ts

>   {id:1,name:’email’}. Selain itu kita juga dapat menampilkan property id dan
>   property nama dengan menggunakan property ngValue seperti berikut

![](media/acef09c3a1a8da781b8bbf11f53c88d2.png)

>   sehingga hasilnya seperti berikut

![](media/13b2aaf506355aa511d8e5dbe27f3d1f.png)

>   selain itu juga kita dapat menggunakan multiple (line 74) jika ingin memilih
>   keduanya seperti pada gambar berikut

![](media/73d5a0236a00492186baca0f1e04e7e9.png)

>   sehingga hasilnya seperti berikut (tekan control untuk dapat memilih
>   keduanya)

![](media/96ea89c31aea518998a41e3a8199256b.png)

bekerja dengan radio button
===========================

>   Selain menggunakan check box dan dropdown list kita juga dapat menggunakan
>   radio button, seperti berikut

-   buka file contact.component.html dan tambahkan code berikut (line 83-94)

-   catatan jika kita tidak menambahkan ngModel (line 85 dan line 91) pada input
    maka saat kita memilih salah satu radio button value tidak bisa muncul

![](media/0a8a8f72f70d45dcec276b45051cd736.png)

-   jalankan localhost (menggunakan ngModel)

![](media/54132416f8454b464f8e189f9c0122f2.png)

-   jalankan localhost (tanpa menggunakan ngModel)

![](media/fea1056d98671b74ccac0fc2d4aafa8b.png)

>   atau kita bisa menggunakan directive ngFor untuk menampilkan value seperti
>   berikut

![](media/4d76185c86463432ee9f1be592f52a84.png)

>   sehingga hasilnya juga sama

![](media/ae2d2121e5b27ac7fc169a1549e837ba.png)
