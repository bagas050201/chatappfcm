# chatappfcm
Repository Front-end Assignment 3 Mobile Computing 

## Anggota Kelompok ##
* Aldian Asmara (1313618032)
* Muhammad Bagas Pradana (1313618015)

## Dibuat Dengan ##
- [React Native](https://reactnative.dev/) 
- [React Native Firebase](https://rnfirebase.io/)

## App Features ##
- [x] chatappfcm dapat melakukan chatting dengan orang lain secara realtime
- [x] Tidak hanya bertukar pesan teks saja, chatappfcm juga dapat mengirim pesan berupa gambar yang diambil dari folder file atau folder galery di handphone anda.

## Information ##
:blue_book: Repository Back-end kami bisa dilihat : [Disini](https://github.com/aldiaaan/chat-app-backend)

:clapper: Video demonstrasi dari aplikasi chatappfcm ini : [youtube](https://youtu.be/u6XuDwigng8)

## Cara Menjalankan ##
* ### Prasyarat ###
  - [x] Pastikan telah menginstall **Node.js**. Jika belum, bisa di-download terlebih dahulu melalui : [link ini](https://nodejs.org/en/)
  - [x] Pastikan telah meginstall **Android Studio**. Jika belum, bisa di-download terlebih dahulu melalui : [link ini](https://developer.android.com/studio)
  - [x] Pastikan telah menyelesaikan environment dari **Android SDK dan ANDROID_HOME**. Jika belum, bisa menyesuaikan terlebih dahulu melalui : [link ini](https://reactnative.dev/docs/environment-setup)

* ### Instalasi ###
1. clone atau download repository ini
2. pastikan terminal ada di root project (ada package.json)
3. jalankan perintah ini untuk mendownload package yg dibutuhkan : **npm install**
4. pecah terminal menjadi 2. terminal pertama jalankan run server : **react-native start**
5. terminal kedua jalankan run Android : **react-native run-android**

* ### Error Handling ###
  Kami sudah menjamin bahwa code ini telah bersih dan bisa digunakan. Namun ada kalanya accident terjadi diluar perkiraan. Maka kami memperkirakan ada 3 eror yang sering terjadi yaitu :
  
  **1. Code terlihat banyak yang berwarna merah di teks editor**
  
  <p align="justify">
    ini disebabkan karena eslint bersifat sensitif terhadap code yang tidak sesuai dengan ketentuannya. Namun pada dasarnya hal ini tidak berpengaruh terhadap code itu sendiri, code tetap dapat dijalankan dengan normal. Cara mengatasinya adalah tambahkan kalimat ini dibagian paling atas dari code :
  </p>
  
  ```
  /* eslint-disable prettier/prettier */ 
  ```
  
  **2. Failed to install the app. Make sure you have the android development environment set up..**
  
  <p align="justify">
  Ini merupakan permasalahan yang paling sering terjadi dalam menjalankan aplikasi React Native. Error ini disebabkan oleh instalasi environment android di komputer kurang baik / tidak sesuai / tidak terdeteksi oleh komputer. Akibat dari eror ini ialah aplikasi gagal untuk di install di Emmulator atau di Handphone sungguhan. Cara mengatasinya adalah dengan membuat sebuah file baru bernama **local.properties**. Berikut adalah caranya :
  </p>
  
  ```
  ./android/ (buka folder android pada project ini)   
  ```
   ```
  Buat sebuah file bernama local.properties   
  ```
  ```
  isikan file local.properties dengan code ini :
   - Pengguna Windows
       sdk.dir=C:\\Users\\UserName\\AppData\\Local\\Android\\sdk
   - Pengguna MacOS
       sdk.dir = /Users/USERNAME/Library/Android/sdk
   - Pengguna Linux 
       sdk.dir = /home/USERNAME/Android/Sdk
  ```
  ```
  jalankan ulang program sesuai dengan penjelasan dibagian instalasi. Jika masih terdapat kendala bisa melihat 
  problem ketiga dibawah ini
  ```
  
   **3. Jenis error yang berkaitan dengan folder android, node_modules dan package-lock.json**
   
   <p align="justify">
   Untuk problem nomor 3 ini kami tidak yakin akan terjadi, dikarenakan kami sudah menbuat sedemikian rupa sehingga dapat dijalankan normal disegala device. Namun problem yang terjadi di nomor 3 ini disebabkan oleh ketidaksinkronan antara ketiga folder tersebut satu sama lainnya. Bisa disebabkan karena proses instalasi (npm install) yang mengalami problem atau menghapus package tanpa disengaja. Berikut adalah pemecahan masalahnya :
  </p>
  
  1. cara pertama adalah melakukan cleaning pada folder android. Cara ini biasanya dilakukan saat yang error adalah folder android. Caranya yaitu :
   ```
   1. cd android (masuk ke folder ini lewat terminal)    
   2. gradlew clean (ketikan perintah ini setelah berhasil masuk ke folder android project ini)    
   3. cd .. (kembali ke folder root project)    
   4. (jalankan aplikasi react native dari awal seperti yang sudah dijelaskan di instalasi diatas)    
  ``` 
  2. Cara yang kedua adalah dengan menghapus folder node_modules dan package-lock.json. Cara ini digunakan jika yang error berhubungan dengan modules package. caranya adalah :
  ```
   1. Hapus folder node_modules dan folder package-lock.json   
   2. jalankan perintah ini di root project : npm install
   3. tunggu beberapa saat hingga file node_modules dan package-lock.json berhasil didownload ulang. Kemudian jalankan 
   aplikasi dari awal.
  ``` 

## Screenshot Aplikasi ##

<p align="center"> 
    <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhncgpGXcLsFiMWFdgzwlyZoK0BxHfLo0NVerpSrFzO9Nk-tvSMJZR9PgVkN2zmNGZCAkeAAFBqTxGiry9OIFGQ8ux2hMWtgPJXUhh_sfBRmtkTPtKNG2_OBPfZ_bM0g6AW6gLbt4IWEj42wMZh58ksQPZLOK0sRxubmPqhsY6y19tNhOyEv07fcGXL=w259-h560" align="center"></img>
</p>

<p align="center"> 
    <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhVlL7pb_lbZ0oLDEYDPVISiMf6ihnqutlNFy5Drw9IulpjMlYXBUp4U3BjV2Gfr9YZoyEuQ8dU06JQnlLq_GPoxbXP6XhvDvFXi7Ep6kvFGAYAhHi5EdQRCnMLWkKHUIU1_m3JHS09xCVugMJnnRvMjOgNJNkzjGmQDGFJ5uAOIaTdVx9X0IExA8Ac=w260-h564" align="center"></img>
</p>

## Contributors ##

* **Aldian Asmara** - *Ilmu Komputer Universitas Negeri Jakarta* - [aldiaaan](https://github.com/aldiaaan)
* **Muhammad Bagas Pradana** - *Ilmu Komputer Universitas Negeri Jakarta* - [bagas050201](https://github.com/bagas050201)
