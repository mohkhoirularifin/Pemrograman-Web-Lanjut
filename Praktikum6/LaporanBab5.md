**TUGAS PERORANGAN/INDIVIDU**

**LAPORAN BAB 5**

**Displaying Data And Handling Events**

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

Bab 5 Directive
===============

>   Directive adalah sebuah attribute yang biasanya berawalan dengan prefix ng-
>   dan berfungsi sebagai **marker** layaknya class dan id ataupun sebagai
>   **event driven**. Bisa dikatakan juga bahwa directive adalah tag-khususnya
>   si Angular. Directive digunakan untuk modifikasi DOM, ada 2 cara untuk
>   memodifikasi directive yaitu directive structural dan directive attribute.
>   Jika menggunakan directive structural maka yang dimodifikasi adalah struktur
>   DOM sedangkan jika directive attribute maka yang dimodifikasi adalah
>   attribute DOM. Ada beberapa macam directive yang akan kita gunakan selama
>   pembahasan ini.

ngIf
====

>   Directive ngIf digunakan untuk sebuah kondisi percabangan. Ada beberapa
>   contoh penggunaan ngIf. Contoh Pertama

-   buka file

    ![](media/3b808018f6cdf93f3793b9b94211557d.png)

-   buka file

    ![](media/3c77683d62f55e2602c0f3be7f9bbc5f.png)

-   jalankan localhost maka hasilnya seperti berikut

    ![](media/dff46a96edd990e4364dfac5699bc6b2.png)

-   Jika array pada **app.component.ts (courses=[];)** dikosongkan maka hasilnya
    seperti berikut

    ![](media/ec6cfa3b64380ee4bc99a71bdba3ee19.png)

    ![](media/d0c1b2365b4dfc384f226149b7cd90de.png)

>   contoh kedua menggunakan else:

-   buka file app.component.html modifikasi kodenya menjadi berikut

    ![](media/021c06963e423a83d657f3dfc4f0757a.png)

-   jalankan localhost dengan kondisi array pada app.component

    -   dengan array kosong

        ![](media/c389a5d4d29291be12ee39fc32146c68.png)

>   hasilnya :

![](media/f0ce9e143bbc3e46e96af2ec5c9d3f4e.png)

-   dengan array ada isi

    ![](media/b2e84b7d346dbbe10e65c08e2d0d406f.png)

>   Hasilnya

![](media/d4097476988b7968adb5ae45e1097659.png)

>   cara ketiga :

-   buka file app.component.html modifikasi kodenya menjadi berikut

    ![](media/24e99e31b6ded2a9bad1eea6ffbf4269.png)

-   jalankan localhost dengan kondisi array pada app.component

    -   dengan array kosong

        ![](media/9fab83b3da559fa4218fd69600ca6b97.png)

>   hasilnya :

![](media/f4a2a372b4e9e211bd9873a798012840.png)

-   dengan array ada isi

    ![](media/99e299824a5e3d2fc2660b4cdb597070.png)

>   Hasilnya

![](media/3712e24f540091703a124de42ca11549.png)

Hidden Property
===============

>   Selain menggunakan directive ngIF kita juga dapat menggunakan property
>   Hidden untuk menampilkan salah satu data. Jika menggunakan ngIF element yang
>   bernilai salah atau false akan dihilangkan dari DOM sedangkan jika
>   menggunakan Hidden property jika element tersebut bernilai true maka element
>   tersebut yang akan dihidden. Untuk lebih jelasnya ikuti langkah berikut

-   buka app.component.html

    ![](media/2094a82cbe6d6aacc2b3a1ba3dc483b0.png)

-   jalankan localhost maka hasilnya seperti berikut

    ![](media/7fa147c3b623c9826270444d119b9d0c.png)

-   selain contoh diatas kita juga dapat memberikan property seperti berikut

    ![](media/60f370d9f50d0fe3570771d44332f3e6.png)

>   **dengan catatan pada app.component.ts pada courses terdapat array courses
>   dengan nilai 1 dan 2**

![](media/f5477dac747cca6b82c822712567a134.png)

-   jalankan localhost (berbeda hasil jika pada array courses tidak terdapat
    isinya)

    ![](media/3aeb4bd0f97be91eba77d33f2eb501fb.png)

>   Jika kita inspect element maka akan terlihat **property hidden** tidak
>   terdapat **kondisi true ataupun false**.

![](media/1f06c20850fb6fa7abc8affa7f469e19.png)

>   berbeda jika kita menggunakan **ngIF** terdapat **bindings** dengan nilai
>   **false**

![](media/c007d83a706cc4c66268f773bb0556c0.png)

![](media/c81368c66a6e3caf9e1a2acf68cb4b9a.png)

ngSwitchCase
============

>   Menyediakan ekspresi switch untuk menyamakan dengan ekspresi ngSwitch yang
>   tersedia. Ketika ekspresi sama, maka template NgSwitchCase menampilkan.

>   Untuk lebih jelasnya ikuti langkah berikut :

-   buka file app.component.html modifikasi codenya menjadi seperti berikut

    ![](media/96c4e06b0ca3906201b57a01a7704aaf.png)

>   Penjelasan Code

-   line 45 terdapat **event binding (click)=”viewMode=’list’”**

-   line 47 pada tag a ditambah **class binding
    [class.active]=”viewMode==’list’”**

-   line 52 pada tag div terdapat **property binding [ngSwitch]**

-   line 53, 54, 55 pada tag div ditambah **directive ngSwitchCase**

-   buka file app.component.ts tambahkan **property viewMode (line 12)**

    ![](media/a4c5858a80a79011cca874a2f1cc9a7d.png)

-   run localhost maka hasilnya seperti berikut saat diklik list view maka akan
    muncul list view content dan jika kita pilih ListView maka akan tampil
    tulisan List View Content

    ![](media/14ef6d085910ec19c609a2041a0c7f76.png)

ngFor
=====

>   ngFor adalah sebuah directive pada angular yang berfungsi untuk melakukan
>   looping terhadap beberapa data misal data kita adalah sebuah array, jadi
>   directive ini akan melopping array kita pada bagian template. Untuk lebih
>   jelasnya ikuti langkah-langkah berikut :

-   buka app.component.ts property CoursesFor yang berisikan array **(line 12)**

    ![](media/afb56579dc70f2650e96f107b21177b8.png)

-   buka file app.component.html tambahkan directive ngFor pada element li

    ![](media/da3e22f28d00e1acf3866f9acea0b975.png)

>   Penjelasan code

-   line 59 terdapat directive ngFor dengan let item dari property courseFor
    pada app.component.ts dan dengan index alias i

-   linr 60 adalah string interpolasi

-   jika dijalankan maka hasilnya seperti berikut

    ![](media/f9f96b88b90c13ff7034950775734a4f.png)

    -   kita juga dapat memberi tanda tertentu pada index yang bernilai ganjil
        dengan menggunakan isEven <https://angular.io/api/common/NgForOf>

        ![](media/ee0b69ee22f75d7b837e00c814fe0eef.png)

        ![](media/c5c4b83de2f410be63d5e673a532922b.png)

ngFor dan change Detection
==========================

>   Dengan memodifikasi directive ngFor kita dapat melakukan penambahan atau
>   pengurangan data. Untuk lebih jelasnya ikuti langkah berikut :

-   Pada percobaan ini kita akan menambahkan sebuah data array pada
    **coursesFor**

-   tambahkan button pada app.component.html (line 64)

    ![](media/b6693f5bfdf2a29655f580aeb07b0af7.png)

-   tambahkan method **onAdd()**

    ![](media/5b2eb9b00cacb4f5e5a6e9984e8fc8f9.png)

>   Penjelasan code

-   line 22-24 adalah sebuah method yang digunakan untuk melakukan push data
    (id:6, name:’courses6’) ke coursesFor

-   sehingga hasilnya seperti berikut (jika kita tekan button add maka akan
    ditambahkan sebuah data courses 6)

    ![](media/a4859185455e27f1ec3461343f87e851.png)

-   setelah kita berhasil menambahkan sebuah data array pada courseFor maka
    untuk selanjutnya kita akan mencoba untuk melakukan penghapusan data.

-   Tambahkan sebuah method onRemove pada app.component.ts

    ![](media/8366c6f99549a06b397486b7aaa5af47.png)

>   Penjelasan code

-   line 26 sebuah method dengan parameter item. Jika kita **console.log
    (item)** maka hasilnya pada saat kita hapus salah satu data maka hasilnya
    akan seperti berikut

    ![](media/7fd771c16bc9d16dd9b2b24c18e23c54.png)

-   line 27 sebuah variabel baru dengan nama index bertipe data number. Untuk
    lebih jelasnya kita bisa tambahkan **console.log(index)** pada **method
    onRemove** dan hasilnya pada saat kita hapus salah satu data maka akan
    seperti berikut

    ![](media/e0c3fa9940fc629bdec1c13b48d1d145.png)

-   Buka app.component.html dan tambahkan sebuah button untuk menghapus (line69)

    ![](media/d72cf2388b2383feac17722bccfa2a4a.png)

>   penjelasan code :

-   line 69 adalah sebuah button dimana terdapat event click yang memanggil
    method onRemove dengan parameter item

-   hasilnya seperti berikut (pada saat button remove diclick maka salah satu
    data akan hilang sementara)

    ![](media/809aa81779c1d8491d966c42f2cd6e65.png)

-   selain itu kita juga dapat melakukan perubahan status menggunakan event
    click

-   buka file app.component.html tambahkan button (line 70)

    ![](media/6b3a427298de64dfa948a2097c391d79.png)

>   penjelasan code :

-   pada line 70 terdapat sebuah button dan event click dimana event click ini
    memanggil method onChange dengan parameter item

-   buka file app.component.ts buatlah sebuah method onChange dengan parameter
    item dan didalam method tersebut adanya perubahan string menjadi updated

    ![](media/81dd2ad1c615a331c4687b5df4f09e7d.png)

-   hasilnya

    ![](media/cffabd022daeb118b3f395baa9915dcb.png)

ngFor dan trackby
=================

>   Pada studi kasus berikut ini kita akan menampilkan isi array saat button
>   diclick. Pemasalahan yang muncul jika button click tersebut diclick
>   berkali-kali, maka secara tidak langsung data akan mereload ulang. Untuk
>   lebih jelasnya ikuti langkah berikut:

-   Buka file app.component.ts buatlah sebuah method dengan nama loadCourses
    (line

>   38) tapi sebelumnya buat sebuah property dengan nama coursesForOne (line 37)

![](media/578f2e74df9c387db984686c7615d69e.png)

-   buka file app.component.html dan tambahkan code seperti pada gambar

    ![](media/1aae37802cb0cf4500d9494380d1395d.png)

-   hasilnya saat button diclick

    ![](media/5e8e18119a3ff70540cea8b27c9d24f8.png)

-   sekarang kita lakukan analisa buka inspect element, saat button belum
    diclick seperti pada gambar berikut

    ![](media/6db44bf024a3479127b297f8b4576f34.png)

-   dan saat button diklik maka element ul akan muncul seperti pada gambar
    berikut

    ![](media/0be7fe1822098fa3631fbd473c5a58e2.png)

-   jika kita lakukan klik kembali maka button akan merespon kembali dengan
    menampilkan data yang sudah ada dalam arti mengunduh ulang yang sudah ada
    (jika kita lakukan klik kembali maka pada inspect element akan muncul
    highlight warna ungu dimasing-masing element li)

    ![](media/9c756cc8bec3d596218a38d30e2b46ea.png)

-   oleh karena itu kita membutuhkan **TrackBy** yang nanti digunakan untuk
    mengecek jika data sudah ada maka button tidak perlu melakukan actionnya
    kembali

-   untuk menambahkan **TrackBy** dengan cara menambahkan pada
    app.component.html pada **directive ngFor**

    ![](media/af609d015471196535a83c55d0e55b62.png)

-   selain itu tambahkan juga sebuah method trackCourse dengan parameter index
    dan itemone pada app.component.ts

    ![](media/0b9604578cc578cb4883f7be78a55cde.png)

>   Penjelasan code:

>   \- line 48 sebuah nilai kembalian jika itemone bernilai true maka itemone.id
>   akan ditampilkan dan jika itemone bernilai false maka itemone tidak
>   terdefinisi

-   jika berhasil maka pada saat button tampilkan data diklik untuk kedua
    kalinya pada inspect element tidak ada muncul highlight ungu pada
    masing-masing element li

6.1 The leading Asterik
=======================

>   leading asterik adalah tanda asterisk yang ada pada directive seperti
>   \*ngFor dsb. adapun maksud leading asterisk pada sebuah directive adalah
>   bahwa kita memberi tahu angular untuk menulis ulang markup tertentu, seperti
>   code berikut

![](media/9294cfbfb7248341741fa503ee0bd53b.png)

>   pada gambar diatas terdapat sebuah directive \*ngIF dimana fungsi dari
>   asterisk pada ngIf adalah memberi tahu angular untuk menulis ulang markup
>   dari div tersebut menggunakan ng template dengan menggunakan property
>   binding seperti pada gambar berikut

![](media/9c20a34543604ff6ae7259e07913c5bb.png)

>     
>   6.1 ngClass

>   jika pada percobaan sebelumnya kita membuat component favorite menggunakan 2
>   class binding yaitu class binding fa-star dan fa-star-o seperti pada gambar
>   berikut

![](media/4f7553f3619b7e2944d038e9c4b522df.png)

>   selain menggunakan class binding seperti diatas kita juga dapat menggunakan
>   attribute directive class seperti berikut

![](media/5825433049b1c5692245d60f9bf5c2d2.png)

Custom Directive
================

>   pada directive kita juga dapat membuat sebuah custom directive, sebagai
>   contoh kita ingin membuat semua inputan pada textbox secara otomatis menjadi
>   lowercase. Untuk lebih jelasnya ikuti langkah-langkah berikut :

-   pertama kita harus membuat directive dengan nama input-format terlebih
    dahulu dengan perintah seperti berikut

    ![](media/d328139fa656b8aa7e11bbb7363aa398.png)

>   Penjelasan :

>   ng g d input-format =\> ng generate directive nama-directivenya

-   jika directive berhasil digenerate maka kita pastikan di app.module.ts pada
    \@NgModule terdapat nama directive yang kita buat tadi

    ![](media/e7342acba80d32e3f603f2c81af72caa.png)

-   buka input-format.directive.ts dan tambahkan decorator HostListener seperti
    pada gambar berikut

    ![](media/a0166208dc1fddf04ccfad486c9a7e00.png)

>   Penjelasan code :

-   line 1 kita tambahkan (mengimport) sebuah fungsi decorator HostListener agar
    dapat menggunakan event DOM yang menyediakan method untuk menangani sebuah
    event yang sedang berjalan. Untuk lebih jelasnya penggunaan HostListener
    buatlah 2 buah method dengan nama onfocus dan onblur

-   line 8 adalah sebuah method onfocus dengan menggunakan function decorator
    \@HostListener dengan parameter event windows focus
    (*https://developer.mozilla.org/en-US/docs/Web/Events/focus)*

-   line 9 sebuah method onblur dengan menggunakan function decorator
    \@HostListener dengan parameter event windows blur
    (*https://developer.mozilla.org/en-US/docs/Web/Events/focus)*

-   Buka file app.component.html dan tambahakn code berikut

    ![](media/94f396d0cceb734753614e054042c5bd.png)

>   Penjelasan code

-   line 89 terdapat appInputFormat adalah selector pada **input-
    format.directive.ts**

    ![](media/74dd82431e0f565504545a12be604058.png)

-   Kita jalan localhost:4200 setelah itu lakukan percobaan click pada textbox
    dan click diluar textbox. Amati dengan menggunakan console inspect element.
    Pada saat kita click pada textbox maka pada console akan muncul onFocus
    tetapi jika click diluar textbox maka console akan keluat onBlur

    ![](media/9d6ff2ab5ba535ddf1c58b438cda5ef7.png)

    ![](media/0c112986ce0ceb83e05cf50662e8d41b.png)

-   Setelah kita memahami fungsi dari decorator \@HostListener maka untuk
    berikutnya kita akan mencoba membuat logika untuk merubah value dari textbox
    menjadi lowercase

-   buka file input-format.directive.ts dan modifikasi codenya menjadi berikut

    ![](media/404b187e8eae693be35ee063dfb2a575.png)

    Penjelasan code

    -   line 8 kita membutuhkan sebuah reference untuk ke host element maka kita
        tambahkan (inject) pada constructor reference object ElementRef. Dengan
        kata lain ElementRef digunakan untuk mengakses DOM object

    -   line 11 sebuah property dengan nama value dengan tipe data string yang
        berisi sebuah property nativeElement pada class ElementRef

    -   line 12 untuk merubah inputan menjadi huruf kecil semua

-   Jalankan localhost dan berikan masukan dengan huruf besar semua setelah itu
    tekan tab, jika berhasil maka valuenya akan berubah menjadi huruf kecil
    semua

    ![](media/fb9b9329fcd8cb6aecbfb2503affd0cc.png)

    ![](media/eb91bba60a839fb7f634f29cd86c0969.png)

-   atau kita bisa menggunakan cara lain dengan menggunakan **property binding**

-   buka file app.component.html dan tambahkan property binding dengan nama
    format

    ![](media/3dbf3b2d78a18e802a9054c8d9bb3651.png)

-   buka file input-format.directive.ts tambahkan decorator input dan modifikasi
    codenya seperti pada gambar berikut

    ![](media/2ad28eda6d98368755c1e56145c51211.png)

>   Penjelasan code

-   line 7 adalah sebuah decorator input dengan nama property format

-   line 14 – 16 adalah sebuah kondisi dimana jika format sama dengan lowercase
    maka semua inputan akan dibuat menjadi huruf kecil semua sedangkan jika
    selain lowercase maka akan dibuat huruf besar

-   cat:format disini adalah kondisi di **app.component.html**

    ![](media/63951b12a7ce03b7cf88e1eafabaced5.png)

-   atau kita juga dapat menggunakan cara lain yaitu menggunakan nama selector
    sebagai property binding

-   buka app.component.hml modifikasi codenya menjadi berikut

    ![](media/4cde6fc829cc10093148cb06f6526326.png)

-   buka input-format.directive.ts dan tambahkan decorator input dengan
    parameter appInputFormat

    ![](media/746a17aaf83eed2b324ac0fb65131680.png)

-   Jika dijalankan sebagai contoh kita memasukkan kalimat dengan huruf kecil
    dan pada saat kita tab maka akan berubah menjadi huruf besar semua seperti
    berikut

    ![](media/a8fefa0583e6935383c084b5e50cc60c.png)

    ![](media/278eaf3e067e9c2100019d92bfe14304.png)
