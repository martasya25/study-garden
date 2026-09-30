const SUPABASE_URL = "https://kbtdbhibpqhzwzurfcre.supabase.co";
const SUPABASE_KEY = "sb_publishable_rZ-QteLMpmRnq1F66GkWAg_2ek_0Pz1";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

/* =====================================================
   DATA GAME
===================================================== */

let game = {
    name: "Pelajar",
    avatar: "🧑‍🌾",
    xp: 0,
    coins: 50,
    water: 3,
    lives: 3,
    answered: 0,
    correct: 0,
    plants: []
};


/* =====================================================
   DATA SOAL
   15 SOAL SETIAP MATA PELAJARAN
===================================================== */

const questions = {

    /* =================================================
       MATEMATIKA
    ================================================= */

    "Matematika": [

        {
            question: "Berapakah hasil dari 12 + 8?",
            answers: ["18", "20", "22", "24"],
            correct: 1
        },

        {
            question: "Berapakah hasil dari 7 × 6?",
            answers: ["36", "40", "42", "48"],
            correct: 2
        },

        {
            question: "Berapakah hasil dari 100 ÷ 4?",
            answers: ["20", "25", "30", "40"],
            correct: 1
        },

        {
            question: "Jika x + 5 = 12, maka nilai x adalah...",
            answers: ["5", "6", "7", "8"],
            correct: 2
        },

        {
            question: "Luas persegi dengan sisi 5 cm adalah...",
            answers: ["10 cm²", "20 cm²", "25 cm²", "30 cm²"],
            correct: 2
        },

        {
            question: "Berapakah hasil dari 15 × 4?",
            answers: ["50", "60", "70", "80"],
            correct: 1
        },

        {
            question: "Berapakah hasil dari 144 ÷ 12?",
            answers: ["10", "11", "12", "14"],
            correct: 2
        },

        {
            question: "Berapakah hasil dari 25 + 37?",
            answers: ["52", "62", "72", "82"],
            correct: 1
        },

        {
            question: "Berapakah hasil dari 9²?",
            answers: ["18", "27", "72", "81"],
            correct: 3
        },

        {
            question: "Keliling persegi dengan sisi 8 cm adalah...",
            answers: ["16 cm", "24 cm", "32 cm", "64 cm"],
            correct: 2
        },

        {
            question: "Berapakah hasil dari 50 - 17?",
            answers: ["23", "33", "37", "43"],
            correct: 1
        },

        {
            question: "Jika 3x = 21, maka nilai x adalah...",
            answers: ["6", "7", "8", "9"],
            correct: 1
        },

        {
            question: "Berapakah hasil dari 2/4 jika disederhanakan?",
            answers: ["1/4", "1/2", "2/3", "3/4"],
            correct: 1
        },

        {
            question: "Luas persegi panjang dengan panjang 10 cm dan lebar 5 cm adalah...",
            answers: ["15 cm²", "30 cm²", "50 cm²", "100 cm²"],
            correct: 2
        },

        {
            question: "Berapakah hasil dari 5³?",
            answers: ["15", "25", "100", "125"],
            correct: 3
        }

    ],


    /* =================================================
       IPA
    ================================================= */

    "IPA": [

        {
            question: "Organ manusia yang digunakan untuk bernapas adalah...",
            answers: ["Jantung", "Paru-paru", "Lambung", "Ginjal"],
            correct: 1
        },

        {
            question: "Tumbuhan membuat makanan melalui proses...",
            answers: ["Respirasi", "Fotosintesis", "Evaporasi", "Transpirasi"],
            correct: 1
        },

        {
            question: "Planet yang dikenal sebagai Planet Merah adalah...",
            answers: ["Venus", "Mars", "Jupiter", "Saturnus"],
            correct: 1
        },

        {
            question: "Air membeku pada suhu...",
            answers: ["0°C", "10°C", "50°C", "100°C"],
            correct: 0
        },

        {
            question: "Sumber energi utama bagi bumi adalah...",
            answers: ["Bulan", "Angin", "Matahari", "Air"],
            correct: 2
        },

        {
            question: "Bagian tumbuhan yang berfungsi menyerap air adalah...",
            answers: ["Daun", "Bunga", "Akar", "Buah"],
            correct: 2
        },

        {
            question: "Hewan yang memakan tumbuhan disebut...",
            answers: ["Karnivora", "Herbivora", "Omnivora", "Insektivora"],
            correct: 1
        },

        {
            question: "Gaya yang menyebabkan benda jatuh ke bawah disebut gaya...",
            answers: ["Gesek", "Magnet", "Gravitasi", "Pegas"],
            correct: 2
        },

        {
            question: "Alat untuk mengukur suhu adalah...",
            answers: ["Barometer", "Termometer", "Mikroskop", "Higrometer"],
            correct: 1
        },

        {
            question: "Perubahan air menjadi uap disebut...",
            answers: ["Membeku", "Mencair", "Menguap", "Mengembun"],
            correct: 2
        },

        {
            question: "Organ yang berfungsi memompa darah adalah...",
            answers: ["Paru-paru", "Jantung", "Hati", "Ginjal"],
            correct: 1
        },

        {
            question: "Tulang berfungsi utama untuk...",
            answers: [
                "Menghasilkan makanan",
                "Menopang tubuh",
                "Mencerna makanan",
                "Menghasilkan udara"
            ],
            correct: 1
        },

        {
            question: "Hewan yang berkembang biak dengan bertelur disebut...",
            answers: [
                "Vivipar",
                "Ovipar",
                "Ovovivipar",
                "Mamalia"
            ],
            correct: 1
        },

        {
            question: "Gas yang dibutuhkan manusia untuk bernapas adalah...",
            answers: [
                "Karbon dioksida",
                "Oksigen",
                "Nitrogen",
                "Hidrogen"
            ],
            correct: 1
        },

        {
            question: "Benda yang dapat ditarik oleh magnet adalah...",
            answers: [
                "Kayu",
                "Plastik",
                "Besi",
                "Kertas"
            ],
            correct: 2
        }

    ],


    /* =================================================
       BAHASA INDONESIA
    ================================================= */

    "Bahasa Indonesia": [

        {
            question: "Lawan kata dari 'besar' adalah...",
            answers: ["Tinggi", "Kecil", "Panjang", "Lebar"],
            correct: 1
        },

        {
            question: "Sinonim kata 'indah' adalah...",
            answers: ["Buruk", "Cantik", "Kotor", "Lambat"],
            correct: 1
        },

        {
            question: "Kalimat yang digunakan untuk bertanya disebut...",
            answers: [
                "Kalimat berita",
                "Kalimat perintah",
                "Kalimat tanya",
                "Kalimat seru"
            ],
            correct: 2
        },

        {
            question: "Cerita yang berasal dari masyarakat dan diwariskan turun-temurun disebut...",
            answers: [
                "Cerita rakyat",
                "Berita",
                "Iklan",
                "Surat"
            ],
            correct: 0
        },

        {
            question: "Kata yang menunjukkan nama orang, tempat, atau benda disebut...",
            answers: [
                "Kata kerja",
                "Kata sifat",
                "Kata benda",
                "Kata sambung"
            ],
            correct: 2
        },

        {
            question: "Lawan kata 'rajin' adalah...",
            answers: [
                "Tekun",
                "Malas",
                "Cepat",
                "Pandai"
            ],
            correct: 1
        },

        {
            question: "Sinonim kata 'cerdas' adalah...",
            answers: [
                "Bodoh",
                "Lambat",
                "Pintar",
                "Malas"
            ],
            correct: 2
        },

        {
            question: "Tanda baca yang digunakan pada akhir kalimat tanya adalah...",
            answers: [
                ".",
                ",",
                "!",
                "?"
            ],
            correct: 3
        },

        {
            question: "Kata 'berlari' termasuk kata...",
            answers: [
                "Benda",
                "Kerja",
                "Sifat",
                "Bilangan"
            ],
            correct: 1
        },

        {
            question: "Kalimat yang berisi perintah disebut...",
            answers: [
                "Kalimat tanya",
                "Kalimat berita",
                "Kalimat perintah",
                "Kalimat pasif"
            ],
            correct: 2
        },

        {
            question: "Kata 'rumah' termasuk jenis kata...",
            answers: [
                "Kata benda",
                "Kata kerja",
                "Kata sifat",
                "Kata sambung"
            ],
            correct: 0
        },

        {
            question: "Lawan kata 'panjang' adalah...",
            answers: [
                "Tinggi",
                "Pendek",
                "Besar",
                "Lebar"
            ],
            correct: 1
        },

        {
            question: "Kalimat 'Tolong tutup pintu!' termasuk...",
            answers: [
                "Kalimat perintah",
                "Kalimat tanya",
                "Kalimat berita",
                "Kalimat ajakan"
            ],
            correct: 0
        },

        {
            question: "Orang yang menulis sebuah cerita disebut...",
            answers: [
                "Pembaca",
                "Penulis",
                "Pendengar",
                "Penyanyi"
            ],
            correct: 1
        },

        {
            question: "Kata yang digunakan untuk menjelaskan sifat benda disebut...",
            answers: [
                "Kata kerja",
                "Kata benda",
                "Kata sifat",
                "Kata bilangan"
            ],
            correct: 2
        }

    ],


    /* =================================================
       IPS
    ================================================= */

    "IPS": [

        {
            question: "Indonesia terletak di antara dua benua, yaitu...",
            answers: [
                "Asia dan Australia",
                "Asia dan Eropa",
                "Afrika dan Australia",
                "Eropa dan Afrika"
            ],
            correct: 0
        },

        {
            question: "Kegiatan membeli barang untuk memenuhi kebutuhan disebut...",
            answers: [
                "Produksi",
                "Distribusi",
                "Konsumsi",
                "Ekspor"
            ],
            correct: 2
        },

        {
            question: "Mata pencaharian masyarakat di daerah pesisir adalah...",
            answers: [
                "Nelayan",
                "Petani",
                "Penambang",
                "Peternak"
            ],
            correct: 0
        },

        {
            question: "Alat untuk menunjukkan lokasi suatu tempat disebut...",
            answers: [
                "Kamus",
                "Peta",
                "Kalender",
                "Kompas"
            ],
            correct: 1
        },

        {
            question: "Kegiatan menghasilkan barang atau jasa disebut...",
            answers: [
                "Produksi",
                "Konsumsi",
                "Distribusi",
                "Transportasi"
            ],
            correct: 0
        },

        {
            question: "Kegiatan menyalurkan barang dari produsen kepada konsumen disebut...",
            answers: [
                "Produksi",
                "Distribusi",
                "Konsumsi",
                "Investasi"
            ],
            correct: 1
        },

        {
            question: "Ibu kota Indonesia adalah...",
            answers: [
                "Bandung",
                "Surabaya",
                "Jakarta",
                "Medan"
            ],
            correct: 2
        },

        {
            question: "Pulau terbesar di Indonesia adalah...",
            answers: [
                "Jawa",
                "Bali",
                "Kalimantan",
                "Madura"
            ],
            correct: 2
        },

        {
            question: "Kegiatan menjual barang ke luar negeri disebut...",
            answers: [
                "Impor",
                "Ekspor",
                "Konsumsi",
                "Produksi"
            ],
            correct: 1
        },

        {
            question: "Kegiatan membeli barang dari luar negeri disebut...",
            answers: [
                "Ekspor",
                "Impor",
                "Distribusi",
                "Produksi"
            ],
            correct: 1
        },

        {
            question: "Gunung, sungai, dan danau termasuk kenampakan...",
            answers: [
                "Buatan",
                "Alam",
                "Sosial",
                "Ekonomi"
            ],
            correct: 1
        },

        {
            question: "Petani biasanya bekerja di daerah...",
            answers: [
                "Pantai",
                "Pegunungan atau pedesaan",
                "Pelabuhan",
                "Kota besar"
            ],
            correct: 1
        },

        {
            question: "Alat yang digunakan untuk menunjukkan arah adalah...",
            answers: [
                "Kompas",
                "Termometer",
                "Kalkulator",
                "Mikroskop"
            ],
            correct: 0
        },

        {
            question: "Pasar merupakan tempat bertemunya...",
            answers: [
                "Guru dan siswa",
                "Penjual dan pembeli",
                "Dokter dan pasien",
                "Petani dan nelayan"
            ],
            correct: 1
        },

        {
            question: "Kegiatan ekonomi yang menghasilkan barang disebut...",
            answers: [
                "Produksi",
                "Konsumsi",
                "Distribusi",
                "Transportasi"
            ],
            correct: 0
        }

    ],


    /* =================================================
       PPKn
    ================================================= */

    "PPKn": [

        {
            question: "Dasar negara Indonesia adalah...",
            answers: [
                "UUD 1945",
                "Pancasila",
                "Bhinneka Tunggal Ika",
                "Proklamasi"
            ],
            correct: 1
        },

        {
            question: "Semboyan bangsa Indonesia adalah...",
            answers: [
                "Tut Wuri Handayani",
                "Bhinneka Tunggal Ika",
                "Indonesia Raya",
                "Garuda Pancasila"
            ],
            correct: 1
        },

        {
            question: "Sila pertama Pancasila berbunyi...",
            answers: [
                "Kemanusiaan yang Adil dan Beradab",
                "Persatuan Indonesia",
                "Ketuhanan Yang Maha Esa",
                "Keadilan Sosial"
            ],
            correct: 2
        },

        {
            question: "Lambang negara Indonesia adalah...",
            answers: [
                "Garuda Pancasila",
                "Burung Merpati",
                "Harimau",
                "Elang"
            ],
            correct: 0
        },

        {
            question: "Musyawarah dilakukan untuk mencapai...",
            answers: [
                "Perselisihan",
                "Mufakat",
                "Persaingan",
                "Hukuman"
            ],
            correct: 1
        },

        {
            question: "Sila kedua Pancasila berbunyi...",
            answers: [
                "Persatuan Indonesia",
                "Kemanusiaan yang Adil dan Beradab",
                "Ketuhanan Yang Maha Esa",
                "Keadilan Sosial"
            ],
            correct: 1
        },

        {
            question: "Sila ketiga Pancasila adalah...",
            answers: [
                "Persatuan Indonesia",
                "Keadilan Sosial",
                "Ketuhanan Yang Maha Esa",
                "Kerakyatan"
            ],
            correct: 0
        },

        {
            question: "Sila keempat Pancasila berkaitan dengan...",
            answers: [
                "Musyawarah",
                "Olahraga",
                "Perdagangan",
                "Kebersihan"
            ],
            correct: 0
        },

        {
            question: "Sila kelima Pancasila berbunyi...",
            answers: [
                "Persatuan Indonesia",
                "Keadilan Sosial bagi Seluruh Rakyat Indonesia",
                "Ketuhanan Yang Maha Esa",
                "Kemanusiaan yang Adil"
            ],
            correct: 1
        },

        {
            question: "Contoh sikap menghargai perbedaan adalah...",
            answers: [
                "Mengejek teman",
                "Memaksakan pendapat",
                "Menghormati teman",
                "Bertengkar"
            ],
            correct: 2
        },

        {
            question: "Gotong royong merupakan contoh sikap...",
            answers: [
                "Kerja sama",
                "Permusuhan",
                "Persaingan",
                "Individualisme"
            ],
            correct: 0
        },

        {
            question: "Hak adalah sesuatu yang...",
            answers: [
                "Harus kita dapatkan",
                "Harus kita hindari",
                "Tidak boleh dilakukan",
                "Selalu dilarang"
            ],
            correct: 0
        },

        {
            question: "Kewajiban adalah sesuatu yang...",
            answers: [
                "Boleh diabaikan",
                "Harus dilakukan",
                "Tidak perlu dilakukan",
                "Hanya untuk orang lain"
            ],
            correct: 1
        },

        {
            question: "Contoh kewajiban siswa di sekolah adalah...",
            answers: [
                "Belajar dengan rajin",
                "Merusak fasilitas",
                "Datang terlambat",
                "Mengganggu teman"
            ],
            correct: 0
        },

        {
            question: "Sikap yang sesuai dengan persatuan adalah...",
            answers: [
                "Mementingkan diri sendiri",
                "Saling menghormati",
                "Mengejek perbedaan",
                "Memaksakan kehendak"
            ],
            correct: 1
        }

    ]

};



/* =====================================================
   VARIABEL QUIZ
===================================================== */

let currentSubject = "";
let currentQuestion = 0;
let selectedQuestions = [];
let answerLocked = false;


/* =====================================================
   LOAD GAME
===================================================== */

function loadGame() {

    const data = localStorage.getItem("studyGardenData");

    if (data) {

        try {

            const saved = JSON.parse(data);

            game = {
                ...game,
                ...saved
            };

            if (!Array.isArray(game.plants)) {
                game.plants = [];
            }

        } catch (error) {

            console.log("Data game lama rusak.");

        }
    }

    updateUI();
    renderPlants();

}


/* =====================================================
   SAVE GAME
===================================================== */

function saveGame() {

    localStorage.setItem(
        "studyGardenData",
        JSON.stringify(game)
    );

}


/* =====================================================
   UPDATE UI
===================================================== */

function updateUI() {

    const elements = {

        xp: game.xp,

        coins: game.coins,

        water: game.water,

        lives: game.lives,

        plantCount: game.plants.length,

        correctCount: game.correct,

        answeredText: game.answered + " soal",

        answeredText2: game.answered + " soal",

        correctText: game.correct + " soal",

        shopCoins: game.coins

    };


    Object.keys(elements).forEach(function(id) {

        const el =
            document.getElementById(id);

        if (el) {
            el.textContent = elements[id];
        }

    });


    const level =
        Math.floor(game.xp / 100) + 1;


    const levelText =
        document.getElementById("levelText");

    if (levelText) {
        levelText.textContent =
            "Level " + level;
    }


    const profileLevel =
        document.getElementById("profileLevel");

    if (profileLevel) {
        profileLevel.textContent = level;
    }


    const nameHeader =
        document.getElementById("nameHeader");

    if (nameHeader) {
        nameHeader.textContent = game.name;
    }


    const profileName =
        document.getElementById("profileName");

    if (profileName) {
        profileName.textContent = game.name;
    }


    const avatarHeader =
        document.getElementById("avatarHeader");

    if (avatarHeader) {
        avatarHeader.textContent = game.avatar;
    }


    const bigAvatar =
        document.getElementById("bigAvatar");

    if (bigAvatar) {
        bigAvatar.textContent = game.avatar;
    }


    const nameInput =
        document.getElementById("nameInput");

    if (
        nameInput &&
        document.activeElement !== nameInput
    ) {
        nameInput.value = game.name;
    }


    updateAchievements();

}


/* =====================================================
   NAVIGASI
===================================================== */

function showPage(pageId, button) {

    document
        .querySelectorAll(".page")
        .forEach(function(page) {

            page.classList.remove("active");

        });


    const page =
        document.getElementById(pageId);

    if (page) {
        page.classList.add("active");
    }


    document
        .querySelectorAll(".nav button")
        .forEach(function(btn) {

            btn.classList.remove("active");

        });


    if (button) {
        button.classList.add("active");
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   MULAI QUIZ
===================================================== */

function startQuiz(subject) {

    if (!questions[subject]) {
        return;
    }

    currentSubject = subject;

    currentQuestion = 0;

    answerLocked = false;


    /*
       Salin semua soal
       lalu acak urutannya
    */

    const shuffled =
        [...questions[subject]]
        .sort(() => Math.random() - 0.5);


    /*
       Ambil hanya 5 soal
       untuk sesi ini
    */

    selectedQuestions =
        shuffled.slice(0, 5);


    const subjectBox =
        document.getElementById("subjectBox");

    const quizBox =
        document.getElementById("quizBox");


    subjectBox.style.display = "none";

    quizBox.style.display = "block";


    document.getElementById(
        "quizSubject"
    ).textContent = subject;


    showQuestion();

}



/* =====================================================
   TAMPILKAN SOAL
===================================================== */

function showQuestion() {

    answerLocked = false;


    const q =
        selectedQuestions[currentQuestion];


    document.getElementById(
        "questionNumber"
    ).textContent =
        currentQuestion + 1;


    document.getElementById(
        "questionText"
    ).textContent =
        q.question;


    document.getElementById(
        "progressFill"
    ).style.width =
        (
            (
                currentQuestion + 1
            ) /
            selectedQuestions.length *
            100
        ) + "%";


    const answerBox =
        document.getElementById("answerBox");


    answerBox.innerHTML = "";


    const feedback =
        document.getElementById("feedback");


    feedback.style.display = "none";

    feedback.innerHTML = "";


    const next =
        document.getElementById("nextButton");


    next.style.display = "none";


    q.answers.forEach(
        function(answer, index) {

            const button =
                document.createElement("button");


            button.type = "button";

            button.className =
                "answer-button";

            button.textContent =
                answer;


            button.addEventListener(
                "click",
                function() {

                    checkAnswer(index);

                }
            );


            answerBox.appendChild(button);

        }
    );

}


/* =====================================================
   CEK JAWABAN
===================================================== */

function checkAnswer(index) {

    if (answerLocked) {
        return;
    }


    answerLocked = true;


    const q =
        selectedQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            "#answerBox .answer-button"
        );


    buttons.forEach(function(button) {

        button.disabled = true;

    });


    game.answered++;


    const feedback =
        document.getElementById("feedback");


    if (index === q.correct) {

        buttons[index]
            .classList.add("correct");


        game.correct++;

        game.xp += 20;

        game.coins += 10;

        game.water += 1;


        feedback.style.display =
            "block";

        feedback.style.background =
            "#c8e6c9";

        feedback.style.color =
            "#1b5e20";


        feedback.innerHTML =
            "🎉 Jawaban benar! " +
            "+20 XP • +10 🪙 • +1 💧";

    }

    else {

        buttons[index]
            .classList.add("wrong");


        buttons[q.correct]
            .classList.add("correct");


        game.lives--;


        if (game.lives <= 0) {
            game.lives = 3;
        }


        feedback.style.display =
            "block";

        feedback.style.background =
            "#ffebee";

        feedback.style.color =
            "#c62828";


        feedback.innerHTML =
            "😅 Belum tepat! " +
            "Jawaban yang benar: <b>" +
            q.answers[q.correct] +
            "</b>";

    }


    saveGame();

    updateUI();


    const next =
        document.getElementById("nextButton");


    next.style.display = "block";


    /*
       Kalau soal terakhir,
       ubah tulisan tombol
    */

    if (
        currentQuestion ===
        selectedQuestions.length - 1
    ) {

        next.textContent =
            "🌱 Selesaikan Quiz";

    }

}


/* =====================================================
   SOAL BERIKUTNYA / SELESAI
===================================================== */

function nextQuestion() {

    if (!answerLocked) {

        alert(
            "Pilih jawaban terlebih dahulu! 😊"
        );

        return;

    }


    currentQuestion++;


    if (
        currentQuestion >=
        selectedQuestions.length
    ) {

        finishQuiz();

        return;

    }


    showQuestion();

}


/* =====================================================
   SELESAI QUIZ
===================================================== */

function finishQuiz() {

    /*
       BONUS SELESAI QUIZ
    */

    game.xp += 20;

    game.coins += 20;

    game.water += 1;


    /*
       TANAMAN BARU
    */

    const plantTypes = [

        {
            name: "Bibit Bunga",
            icon: "🌱"
        },

        {
            name: "Tanaman Hijau",
            icon: "🌿"
        },

        {
            name: "Bunga",
            icon: "🌷"
        },

        {
            name: "Bunga Matahari",
            icon: "🌻"
        }

    ];


    const randomPlant =
        plantTypes[
            Math.floor(
                Math.random() *
                plantTypes.length
            )
        ];


    game.plants.push({

        name: randomPlant.name,

        icon: randomPlant.icon,

        growth: 0

    });


    saveGame();

    updateUI();

    renderPlants();


    document.getElementById(
        "quizBox"
    ).style.display = "none";


    document.getElementById(
        "subjectBox"
    ).style.display = "block";


    alert(
        "🎉 Quiz selesai!\n\n" +
        "⭐ +20 XP bonus\n" +
        "🪙 +20 koin\n" +
        "💧 +1 air\n\n" +
        "🌱 Tanaman baru masuk ke kebun!"
    );

}



/* =====================================================
   KEMBALI KE PILIHAN MATA PELAJARAN
===================================================== */

function backToSubjects() {

    const subjectBox =
        document.getElementById("subjectBox");

    const materialBox =
        document.getElementById("materialBox");

    const materialContentBox =
        document.getElementById("materialContentBox");

    const quizBox =
        document.getElementById("quizBox");

    if (subjectBox) {
        subjectBox.style.display = "block";
    }

    if (materialBox) {
        materialBox.style.display = "none";
    }

    if (materialContentBox) {
        materialContentBox.style.display = "none";
    }

    if (quizBox) {
        quizBox.style.display = "none";
    }

    answerLocked = false;

    window.scrollTo(0, 0);
}

/* =====================================================
   RENDER TANAMAN
===================================================== */

function renderPlants() {

    const container =
        document.getElementById("plants");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    if (game.plants.length === 0) {

        container.innerHTML = `

            <div style="
                grid-column:1/-1;
                text-align:center;
                color:white;
                padding:50px 20px;
            ">

                <div style="font-size:70px">
                    🌱
                </div>

                <h2>
                    Kebun masih kosong
                </h2>

                <p style="margin-top:8px">
                    Jawab soal untuk
                    mendapatkan tanaman!
                </p>

            </div>

        `;

        return;
    }


    game.plants.forEach(
        function(plant, index) {

            let icon = plant.icon || "🌱";

            let stage = "Bibit";

            let size = 45;


            if (plant.growth >= 25) {

                icon = "🌿";

                stage = "Tunas";

                size = 55;

            }


            if (plant.growth >= 50) {

                icon = "🪴";

                stage = "Tanaman";

                size = 65;

            }


            if (plant.growth >= 75) {

                icon = "🌳";

                stage = "Tanaman Besar";

                size = 80;

            }


            if (plant.growth >= 100) {

                icon = "🌳";

                stage = "🌳 Siap Panen!";

                size = 90;

            }


            const element =
                document.createElement("div");


            element.className = "plant";


            element.innerHTML = `

                <div
                    class="plant-icon"
                    style="
                        font-size:${size}px;
                    "
                >
                    ${icon}
                </div>


                <div class="plant-name">
                    ${plant.name}
                </div>


                <div class="growth-text">
                    ${stage}
                </div>


                <div class="growth-bar">

                    <div
                        class="growth-fill"
                        style="
                            width:${plant.growth}%;
                        "
                    ></div>

                </div>


                <div class="growth-text">
                    ${plant.growth}% tumbuh
                </div>


${plant.growth >= 100 ? `
    <button
        type="button"
        class="water-button"
        style="
            background:#e91e63;
        "
        onclick="harvestPlant(${index})"
    >
        🌾 Panen +1 ❤️
    </button>
` : `
    <button
        type="button"
        class="water-button"
        onclick="waterPlant(${index})"
    >
        💧 Siram +20%
    </button>
`}


            `;


            container.appendChild(element);

        }
    );

}


/* =====================================================
   PANEN TANAMAN
===================================================== */

function harvestPlant(index) {

    const plant = game.plants[index];

    if (!plant) {
        return;
    }

    if (plant.growth < 100) {

        alert(
            "🌱 Tanaman ini belum siap dipanen!"
        );

        return;
    }

    /*
       Setiap panen mendapatkan
       +1 ❤️
    */

    game.lives += 1;

    /*
       Hapus tanaman yang sudah dipanen
    */

    game.plants.splice(index, 1);

    /*
       Bonus panen
    */

    game.xp += 10;
    game.coins += 10;

    saveGame();

    updateUI();

    renderPlants();

    alert(
        "🎉 Panen berhasil!\n\n" +
        "🌾 Tanaman berhasil dipanen!\n" +
        "❤️ +1 Nyawa\n" +
        "⭐ +10 XP\n" +
        "🪙 +10 Koin"
    );
}


/* =====================================================
   SIRAM TANAMAN
===================================================== */

function waterPlant(index) {

    if (game.water <= 0) {

        alert(
            "💧 Air kamu habis!\n\n" +
            "Jawab soal untuk mendapatkan air."
        );

        return;

    }


    if (
        game.plants[index].growth >=
        100
    ) {

        alert(
            "🌳 Tanaman ini sudah besar!"
        );

        return;

    }


    game.water--;

    game.plants[index].growth += 20;


    if (
        game.plants[index].growth >
        100
    ) {

        game.plants[index].growth =
            100;

    }


    game.xp += 5;


    saveGame();

    updateUI();

    renderPlants();

}


/* =====================================================
   TOKO
===================================================== */

function buyItem(name, icon, price) {

    if (game.coins < price) {

        alert(
            "🪙 Koin kamu tidak cukup!"
        );

        return;

    }


    game.coins -= price;


game.plants.push({

    name: name,

    icon: icon,

    growth: 0

});


    saveGame();

    updateUI();

    renderPlants();


    alert(
        icon +
        " " +
        name +
        " berhasil dibeli! 🌱"
    );

}


/* =====================================================
   PRESTASI
===================================================== */

function updateAchievements() {

    const a1 =
        document.getElementById(
            "achievement1"
        );

    const a2 =
        document.getElementById(
            "achievement2"
        );

    const a3 =
        document.getElementById(
            "achievement3"
        );

    const a4 =
        document.getElementById(
            "achievement4"
        );


    if (a1) {

        a1.textContent =
            game.answered >= 1
                ? "✅ Terbuka!"
                : "🔒 Belum terbuka";

    }


    if (a2) {

        a2.textContent =
            game.answered >= 10
                ? "✅ Terbuka!"
                : "🔒 Belum terbuka";

    }


    if (a3) {

        a3.textContent =
            game.correct >= 10
                ? "✅ Terbuka!"
                : "🔒 Belum terbuka";

    }


    if (a4) {

        a4.textContent =
            game.plants.length >= 5
                ? "✅ Terbuka!"
                : "🔒 Belum terbuka";

    }

}


/* =====================================================
   PILIH AVATAR
===================================================== */

function chooseAvatar(avatar) {

    game.avatar = avatar;


    document.getElementById(
        "bigAvatar"
    ).textContent = avatar;


    document.getElementById(
        "avatarHeader"
    ).textContent = avatar;

}


/* =====================================================
   SIMPAN PROFIL
===================================================== */

function saveProfile() {

    const input =
        document.getElementById(
            "nameInput"
        );


    if (!input) {
        return;
    }


    const name =
        input.value.trim();


    if (name.length > 0) {

        game.name = name;

    }


    saveGame();

    updateUI();


    alert(
        "💾 Profil berhasil disimpan!"
    );

}

/* =====================================================
   START APLIKASI
===================================================== */

document.addEventListener("DOMContentLoaded", function() {

    loadGame();

    // DETEKSI RESET PASSWORD
    supabaseClient.auth.onAuthStateChange(function(event) {

        if (event === "PASSWORD_RECOVERY") {
            showResetPasswordScreen();
        }

    });


    // TOMBOL SIMPAN PASSWORD BARU
    const updatePasswordButton =
        document.getElementById("updatePasswordButton");

    if (updatePasswordButton) {

        updatePasswordButton.addEventListener(
            "click",
            function() {
                updateNewPassword();
            }
        );

    }


    // FORM DAFTAR
    const registerForm =
        document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener(
            "submit",
            function(event) {

                event.preventDefault();
                registerUser();

            }
        );

    }


    // FORM LOGIN
    const loginForm =
        document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function(event) {

                event.preventDefault();
                loginUser();

            }
        );

    }




    // KIRIM LINK RESET
    const sendResetButton =
        document.getElementById("sendResetButton");

    if (sendResetButton) {

        sendResetButton.addEventListener(
            "click",
            function() {
                sendResetPassword();
            }
        );

    }


    // KEMBALI KE LOGIN
    const backToLoginButton =
        document.getElementById("backToLoginButton");

    if (backToLoginButton) {

        backToLoginButton.addEventListener(
            "click",
            function(event) {

                event.preventDefault();
                backToLogin();

            }
        );

    }

});


/* =====================================================
   PILIH LOGIN / DAFTAR
===================================================== */

function showAuthForm(type) {

    const loginForm =
        document.getElementById("loginForm");

    const registerForm =
        document.getElementById("registerForm");

    const loginTab =
        document.getElementById("loginTab");

    const registerTab =
        document.getElementById("registerTab");


    if (type === "register") {

        loginForm.style.display = "none";
        registerForm.style.display = "block";

        loginTab.classList.remove("active");
        registerTab.classList.add("active");

    } else {

        loginForm.style.display = "block";
        registerForm.style.display = "none";

        loginTab.classList.add("active");
        registerTab.classList.remove("active");

    }

}


/* =====================================================
   TAMPILKAN HALAMAN LUPA PASSWORD
===================================================== */

function showForgotPassword() {

    document.getElementById(
        "loginForm"
    ).style.display = "none";

    document.getElementById(
        "registerForm"
    ).style.display = "none";

    document.getElementById(
        "forgotPasswordScreen"
    ).style.display = "block";

    document.getElementById(
        "resetPasswordScreen"
    ).style.display = "none";

    document.getElementById(
        "authMessage"
    ).textContent = "";

}


/* =====================================================
   DAFTAR AKUN
===================================================== */

async function registerUser() {

    const name =
        document
            .getElementById("registerName")
            .value
            .trim();

    const email =
        document
            .getElementById("registerEmail")
            .value
            .trim();

    const password =
        document
            .getElementById("registerPassword")
            .value;

    const authMessage =
        document.getElementById("authMessage");


    // CEK DATA
    if (!name || !email || !password) {

        authMessage.textContent =
            "Semua data harus diisi.";

        return;
    }


    // CEK PASSWORD
    if (password.length < 6) {

        authMessage.textContent =
            "Password minimal 6 karakter.";

        return;
    }


    authMessage.textContent =
        "Mendaftarkan akun...";


    // DAFTAR KE SUPABASE AUTH
    const {
        data,
        error
    } = await supabaseClient.auth.signUp({

        email: email,

        password: password,

        options: {
            data: {
                nama_pengguna: name
            }
        }

    });


    // JIKA PENDAFTARAN GAGAL
    if (error) {

        console.error(
            "Register error:",
            error
        );

        authMessage.textContent =
            "Pendaftaran gagal: " +
            error.message;

        return;
    }


    // SIMPAN DATA KE DATA_PENGGUNA
    if (data.user) {

        const {
            error: profileError
        } = await supabaseClient
            .from("data_pengguna")
            .insert({

                nama_pengguna: name,
                email: email,
                level: 1,
                xp: 0,
                koin: 0,
                hati: 5

            });


        // JIKA GAGAL SIMPAN PROFIL
        if (profileError) {

            console.error(
                "Profile error:",
                profileError
            );

            authMessage.textContent =
                "Profil gagal disimpan: " +
                profileError.message;

            return;
        }

    }


    // PENDAFTARAN BERHASIL
    authMessage.textContent =
        "Pendaftaran berhasil! Silakan masuk.";


    // KOSONGKAN FORM
    document
        .getElementById("registerForm")
        .reset();


    // PINDAH KE LOGIN
    setTimeout(function() {

        showAuthForm("login");

    }, 1500);

}


/* =====================================================
   LOGIN
===================================================== */

async function loginUser() {

    const email =
        document
            .getElementById("loginEmail")
            .value
            .trim();

    const password =
        document
            .getElementById("loginPassword")
            .value;

    const authMessage =
        document.getElementById("authMessage");


    // CEK INPUT
    if (!email || !password) {

        authMessage.textContent =
            "Email dan password harus diisi.";

        return;
    }


    authMessage.textContent =
        "Memeriksa akun...";


    /* -------------------------------------------------
       CEK EMAIL DI DATA PENGGUNA
    ------------------------------------------------- */

    const {
        data: profile,
        error: profileError
    } = await supabaseClient
        .from("data_pengguna")
        .select("email")
        .eq("email", email)
        .maybeSingle();


    if (profileError) {

        console.error(
            "Profile check error:",
            profileError
        );

        authMessage.textContent =
            "Gagal mengecek data pengguna: " +
            profileError.message;

        return;
    }


    if (!profile) {

        authMessage.textContent =
            "Email yang digunakan belum terdaftar.";

        return;
    }


    /* -------------------------------------------------
       LOGIN SUPABASE AUTH
    ------------------------------------------------- */

    const {
        data,
        error
    } = await supabaseClient.auth.signInWithPassword({

        email: email,
        password: password

    });


    // JIKA LOGIN GAGAL
    if (error) {

        console.error(
            "Login error:",
            error
        );

        authMessage.textContent =
            "Password salah.";

        return;
    }


    /* -------------------------------------------------
       LOGIN BERHASIL
    ------------------------------------------------- */

    if (data.user) {

        await loadUserProfile(
            data.user.email
        );


        // SEMBUNYIKAN HALAMAN LOGIN
        document.getElementById(
            "authScreen"
        ).style.display = "none";


        // TAMPILKAN APLIKASI
        document.getElementById(
            "mainApp"
        ).style.display = "block";


        // KOSONGKAN FORM
        document
            .getElementById("loginForm")
            .reset();


        // HAPUS PESAN
        authMessage.textContent = "";

    }

}

/* =====================================================
   LOGOUT
===================================================== */

async function logoutUser() {

    // KELUAR DARI SUPABASE
    const { error } =
        await supabaseClient.auth.signOut();

    if (error) {

        console.error(
            "Logout gagal:",
            error
        );

        alert(
            "Logout gagal: " +
            error.message
        );

        return;
    }


    // SEMBUNYIKAN APLIKASI
    document.getElementById(
        "mainApp"
    ).style.display = "none";


    // TAMPILKAN HALAMAN MASUK / DAFTAR
    document.getElementById(
        "authScreen"
    ).style.display = "flex";


    // TAMPILKAN FORM LOGIN
    document.getElementById(
        "loginForm"
    ).style.display = "block";


    // SEMBUNYIKAN FORM DAFTAR
    document.getElementById(
        "registerForm"
    ).style.display = "none";


    // SEMBUNYIKAN LUPA PASSWORD
    document.getElementById(
        "forgotPasswordScreen"
    ).style.display = "none";


    // SEMBUNYIKAN RESET PASSWORD
    document.getElementById(
        "resetPasswordScreen"
    ).style.display = "none";


    // RESET TAB
    document.getElementById(
        "loginTab"
    ).classList.add("active");

    document.getElementById(
        "registerTab"
    ).classList.remove("active");


    // HAPUS PESAN LOGIN
    document.getElementById(
        "authMessage"
    ).textContent = "";


    // KEMBALI KE ATAS
    window.scrollTo(0, 0);

}


/* =====================================================
   TAMPILKAN / SEMBUNYIKAN PASSWORD
===================================================== */

function togglePassword(inputId, button) {

    const input =
        document.getElementById(inputId);


    if (input.type === "password") {

        input.type = "text";

        button.textContent = "🙈";

    } else {

        input.type = "password";

        button.textContent = "👁️";

    }

}


/* =====================================================
   KEMBALI KE LOGIN
===================================================== */

function backToLogin() {

    document.getElementById(
        "forgotPasswordScreen"
    ).style.setProperty(
        "display",
        "none",
        "important"
    );

    document.getElementById(
        "loginForm"
    ).style.display = "block";

    document.getElementById(
        "forgotPasswordMessage"
    ).textContent = "";

    document.getElementById(
        "authMessage"
    ).textContent = "";

}


/* =====================================================
   KIRIM LINK RESET PASSWORD
===================================================== */

async function sendResetPassword() {

    const email =
        document
            .getElementById("forgotPasswordEmail")
            .value
            .trim();

    const message =
        document.getElementById(
            "forgotPasswordMessage"
        );


    // CEK EMAIL
    if (!email) {

        message.textContent =
            "Masukkan email terlebih dahulu.";

        return;
    }


    message.textContent =
        "Mengirim link reset password...";


    // KIRIM LINK RESET DARI SUPABASE
    const {
        error
    } = await supabaseClient.auth
        .resetPasswordForEmail(
            email,
            {
                redirectTo:
                    window.location.origin +
                    window.location.pathname
            }
        );


    // JIKA GAGAL
    if (error) {

        console.error(
            "Reset password error:",
            error
        );

        message.textContent =
            "Gagal mengirim link: " +
            error.message;

        return;
    }


    // BERHASIL
    message.textContent =
        "Link reset password sudah dikirim. Cek email kamu.";

}


/* =====================================================
   RESET PASSWORD
===================================================== */

function showResetPasswordScreen() {

    document.getElementById(
        "loginForm"
    ).style.display = "none";

    document.getElementById(
        "registerForm"
    ).style.display = "none";

    document.getElementById(
        "forgotPasswordScreen"
    ).style.display = "none";

    document.getElementById(
        "resetPasswordScreen"
    ).style.display = "block";

    document.getElementById(
        "authMessage"
    ).textContent = "";

}


/* =====================================================
   SIMPAN PASSWORD BARU
===================================================== */

async function updateNewPassword() {

    const password =
        document.getElementById(
            "newPassword"
        ).value;

    const confirmPassword =
        document.getElementById(
            "confirmNewPassword"
        ).value;

    const message =
        document.getElementById(
            "resetPasswordMessage"
        );


    // CEK INPUT
    if (!password || !confirmPassword) {

        message.textContent =
            "Password baru harus diisi.";

        return;
    }


    // CEK PANJANG PASSWORD
    if (password.length < 6) {

        message.textContent =
            "Password minimal 6 karakter.";

        return;
    }


    // CEK KECOCOKAN PASSWORD
    if (password !== confirmPassword) {

        message.textContent =
            "Password tidak sama.";

        return;
    }


    message.textContent =
        "Menyimpan password baru...";


    // UPDATE PASSWORD DI SUPABASE
    const {
        error
    } = await supabaseClient.auth.updateUser({

        password: password

    });


    // JIKA GAGAL
    if (error) {

        console.error(
            "Update password error:",
            error
        );

        message.textContent =
            "Gagal mengubah password: " +
            error.message;

        return;
    }


    // BERHASIL
    message.textContent =
        "Password berhasil diubah! Silakan masuk kembali.";


    // KOSONGKAN INPUT
    document.getElementById(
        "newPassword"
    ).value = "";

    document.getElementById(
        "confirmNewPassword"
    ).value = "";


    // KELUARKAN AKUN
    await supabaseClient.auth.signOut();


    // KEMBALI KE LOGIN
    setTimeout(function() {

        document.getElementById(
            "resetPasswordScreen"
        ).style.display = "none";

        document.getElementById(
            "loginForm"
        ).style.display = "block";

        document.getElementById(
            "loginTab"
        ).classList.add("active");

        document.getElementById(
            "registerTab"
        ).classList.remove("active");

        message.textContent = "";

    }, 1500);

}


/* =====================================================
   AMBIL DATA PROFIL DARI DATABASE
===================================================== */

async function loadUserProfile(email) {

    const {
        data,
        error
    } = await supabaseClient
        .from("data_pengguna")
        .select("*")
        .eq("email", email)
        .single();


    // JIKA GAGAL
    if (error) {

        console.error(
            "Gagal mengambil profil:",
            error
        );

        return;
    }


    // MASUKKAN DATA DATABASE KE GAME
    game.name =
        data.nama_pengguna;

    game.xp =
        data.xp;

    game.coins =
        data.koin;

    game.lives =
        data.hati;

    game.level =
        data.level;


    // PERBARUI TAMPILAN
    updateUI();

}

/* =====================================================
   DATA MATERI PER MATA PELAJARAN
===================================================== */

const subjectMaterials = {

    "Matematika": [
        {
            id: "persamaan-linear",
            icon: "🔢",
            name: "Persamaan Linear"
        },
        {
            id: "fungsi",
            icon: "📈",
            name: "Fungsi"
        }
    ],

    "IPA": [
        {
            id: "ekosistem",
            icon: "🌳",
            name: "Ekosistem"
        },
        {
            id: "sistem-pernapasan",
            icon: "🫁",
            name: "Sistem Pernapasan"
        }
    ],

    "Bahasa Indonesia": [
        {
            id: "teks-eksplanasi",
            icon: "📖",
            name: "Teks Eksplanasi"
        },
        {
            id: "teks-argumentasi",
            icon: "✍️",
            name: "Teks Argumentasi"
        }
    ],

    "Bahasa Inggris": [
        {
            id: "procedure-text",
            icon: "🇬🇧",
            name: "Procedure Text"
        },
        {
            id: "narrative-text",
            icon: "📚",
            name: "Narrative Text"
        }
    ],

    "IPS": [
        {
            id: "interaksi-sosial",
            icon: "👥",
            name: "Interaksi Sosial"
        },
        {
            id: "perubahan-sosial",
            icon: "🌍",
            name: "Perubahan Sosial"
        }
    ]

};


/* =====================================================
   PILIH MATA PELAJARAN
===================================================== */

function showMaterials(subject) {

    const subjectBox =
        document.getElementById("subjectBox");

    const materialBox =
        document.getElementById("materialBox");

    const materialList =
        document.getElementById("materialList");

    const materialSubjectTitle =
        document.getElementById("materialSubjectTitle");

    const materials =
        subjectMaterials[subject];

    if (!subjectBox || !materialBox || !materialList) {

        console.error(
            "Elemen materi tidak ditemukan."
        );

        return;
    }

    if (!materials) {

        console.error(
            "Mata pelajaran tidak ditemukan:",
            subject
        );

        return;
    }

    subjectBox.style.display = "none";

    materialBox.style.display = "block";

    materialSubjectTitle.textContent =
        "📚 " + subject;

    materialList.innerHTML = "";

    materials.forEach(function(material) {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "subject-button";

        button.innerHTML = `
            <span>${material.icon}</span>

            <b>${material.name}</b>

            <small>${subject}</small>
        `;

        button.addEventListener(
            "click",
            function() {

                openMaterial(
                    material.id,
                    subject
                );

            }
        );

        materialList.appendChild(button);

    });

    window.scrollTo(0, 0);
}


/* =====================================================
   ISI MATERI
===================================================== */

const materialContents = {

    "persamaan-linear": {
        title: "Persamaan Linear",
        icon: "🔢",
        content: `
            <h3>📖 Pengertian</h3>
            <p>
                Persamaan linear adalah persamaan matematika
                yang memiliki variabel dengan pangkat tertinggi satu.
            </p>

            <h3>📌 Bentuk Umum</h3>
            <p>
                Bentuk umum persamaan linear satu variabel adalah:
            </p>

            <p><b>ax + b = 0</b></p>

            <h3>✏️ Contoh</h3>
            <p>
                2x + 6 = 12
            </p>
            <p>
                2x = 6<br>
                x = 3
            </p>

            <h3>💡 Kesimpulan</h3>
            <p>
                Nilai variabel dapat ditemukan dengan melakukan
                operasi matematika yang sama pada kedua ruas.
            </p>
        `
    },

    "fungsi": {
        title: "Fungsi",
        icon: "📈",
        content: `
            <h3>📖 Pengertian</h3>
            <p>
                Fungsi adalah hubungan antara dua himpunan yang
                memasangkan setiap anggota domain dengan tepat satu
                anggota kodomain.
            </p>

            <h3>📌 Bentuk Fungsi</h3>
            <p>
                Fungsi biasanya ditulis sebagai:
            </p>

            <p><b>f(x) = ax + b</b></p>

            <h3>✏️ Contoh</h3>
            <p>
                Jika f(x) = 2x + 3, maka:
            </p>
            <p>
                f(2) = 2(2) + 3 = 7
            </p>

            <h3>💡 Kesimpulan</h3>
            <p>
                Fungsi digunakan untuk menunjukkan hubungan antara
                suatu nilai masukan dengan nilai keluaran.
            </p>
        `
    },

    "ekosistem": {
        title: "Ekosistem",
        icon: "🌳",
        content: `
            <h3>📖 Pengertian</h3>
            <p>
                Ekosistem adalah hubungan timbal balik antara makhluk
                hidup dengan lingkungan di sekitarnya.
            </p>

            <h3>🌱 Komponen Ekosistem</h3>
            <p>
                Komponen biotik adalah makhluk hidup seperti manusia,
                hewan, tumbuhan, dan mikroorganisme.
            </p>

            <p>
                Komponen abiotik adalah benda tidak hidup seperti air,
                tanah, udara, cahaya matahari, dan suhu.
            </p>

            <h3>🔗 Rantai Makanan</h3>
            <p>
                Rantai makanan menunjukkan proses perpindahan energi
                melalui kegiatan makan dan dimakan.
            </p>

            <p>
                Contoh: <b>Rumput → Belalang → Katak → Ular</b>
            </p>
        `
    },

    "sistem-pernapasan": {
        title: "Sistem Pernapasan",
        icon: "🫁",
        content: `
            <h3>📖 Pengertian</h3>
            <p>
                Sistem pernapasan adalah sistem organ yang digunakan
                tubuh untuk mengambil oksigen dan mengeluarkan karbon
                dioksida.
            </p>

            <h3>🫁 Organ Pernapasan</h3>
            <p>
                Organ pernapasan manusia meliputi hidung, faring,
                laring, trakea, bronkus, bronkiolus, dan paru-paru.
            </p>

            <h3>💨 Proses Pernapasan</h3>
            <p>
                Udara masuk melalui hidung kemudian menuju saluran
                pernapasan hingga sampai ke paru-paru.
            </p>

            <h3>💡 Kesimpulan</h3>
            <p>
                Oksigen dibutuhkan tubuh untuk membantu menghasilkan
                energi, sedangkan karbon dioksida dikeluarkan sebagai
                hasil sisa metabolisme.
            </p>
        `
    },

    "teks-eksplanasi": {
        title: "Teks Eksplanasi",
        icon: "📖",
        content: `
            <h3>📖 Pengertian</h3>
            <p>
                Teks eksplanasi adalah teks yang menjelaskan proses
                terjadinya suatu fenomena alam, sosial, atau budaya.
            </p>

            <h3>📌 Struktur</h3>
            <p>
                Struktur teks eksplanasi terdiri dari:
            </p>

            <p>
                1. Pernyataan umum<br>
                2. Deretan penjelas<br>
                3. Interpretasi atau penutup
            </p>

            <h3>✏️ Ciri-ciri</h3>
            <p>
                Teks eksplanasi berisi fakta dan menjelaskan hubungan
                sebab-akibat atau proses terjadinya suatu fenomena.
            </p>
        `
    },

    "teks-argumentasi": {
        title: "Teks Argumentasi",
        icon: "✍️",
        content: `
            <h3>📖 Pengertian</h3>
            <p>
                Teks argumentasi adalah teks yang berisi pendapat
                penulis yang disertai alasan dan bukti untuk
                meyakinkan pembaca.
            </p>

            <h3>📌 Struktur</h3>
            <p>
                Struktur teks argumentasi dapat terdiri dari:
            </p>

            <p>
                1. Pendapat atau pernyataan<br>
                2. Alasan dan bukti<br>
                3. Kesimpulan
            </p>

            <h3>💡 Ciri-ciri</h3>
            <p>
                Teks argumentasi menggunakan alasan yang logis serta
                dapat didukung oleh fakta dan data.
            </p>
        `
    },

    "procedure-text": {
        title: "Procedure Text",
        icon: "🇬🇧",
        content: `
            <h3>📖 Pengertian</h3>
            <p>
                Procedure text adalah teks yang menjelaskan langkah-
                langkah untuk melakukan atau membuat sesuatu.
            </p>

            <h3>📌 Tujuan</h3>
            <p>
                Tujuannya adalah memberikan petunjuk agar pembaca
                dapat melakukan suatu kegiatan dengan benar.
            </p>

            <h3>📝 Struktur</h3>
            <p>
                Struktur procedure text biasanya terdiri dari:
            </p>

            <p>
                1. Goal atau tujuan<br>
                2. Materials atau bahan<br>
                3. Steps atau langkah-langkah
            </p>

            <h3>💡 Contoh</h3>
            <p>
                Procedure text dapat digunakan untuk menjelaskan cara
                membuat makanan, minuman, atau menggunakan suatu alat.
            </p>
        `
    },

    "narrative-text": {
        title: "Narrative Text",
        icon: "📚",
        content: `
            <h3>📖 Pengertian</h3>
            <p>
                Narrative text adalah teks yang menceritakan suatu
                cerita atau peristiwa secara berurutan.
            </p>

            <h3>📌 Tujuan</h3>
            <p>
                Narrative text bertujuan untuk menghibur pembaca
                melalui sebuah cerita.
            </p>

            <h3>📝 Struktur</h3>
            <p>
                Struktur narrative text terdiri dari:
            </p>

            <p>
                1. Orientation<br>
                2. Complication<br>
                3. Resolution
            </p>

            <h3>💡 Contoh</h3>
            <p>
                Cerita rakyat, dongeng, legenda, dan fabel termasuk
                contoh narrative text.
            </p>
        `
    },

    "interaksi-sosial": {
        title: "Interaksi Sosial",
        icon: "👥",
        content: `
            <h3>📖 Pengertian</h3>
            <p>
                Interaksi sosial adalah hubungan timbal balik antara
                individu dengan individu, individu dengan kelompok,
                atau kelompok dengan kelompok.
            </p>

            <h3>📌 Syarat Interaksi Sosial</h3>
            <p>
                Interaksi sosial terjadi apabila terdapat kontak
                sosial dan komunikasi.
            </p>

            <h3>🤝 Contoh</h3>
            <p>
                Contohnya adalah berdiskusi dengan teman, bekerja sama
                dalam kelompok, dan melakukan kegiatan bersama
                masyarakat.
            </p>
        `
    },

    "perubahan-sosial": {
        title: "Perubahan Sosial",
        icon: "🌍",
        content: `
            <h3>📖 Pengertian</h3>
            <p>
                Perubahan sosial adalah perubahan yang terjadi dalam
                kehidupan masyarakat, baik dalam pola perilaku,
                nilai, norma, maupun lembaga sosial.
            </p>

            <h3>📌 Penyebab</h3>
            <p>
                Perubahan sosial dapat disebabkan oleh perkembangan
                teknologi, perubahan jumlah penduduk, penemuan baru,
                dan pengaruh budaya lain.
            </p>

            <h3>💡 Contoh</h3>
            <p>
                Penggunaan teknologi digital untuk berkomunikasi
                merupakan salah satu contoh perubahan dalam kehidupan
                masyarakat.
            </p>
        `
    }
};


/* =====================================================
   BUKA ISI MATERI
===================================================== */

let currentMaterialId = "";
let currentMaterialSubject = "";

function openMaterial(materialId, subject) {

    const materialBox =
        document.getElementById("materialBox");

    const contentBox =
        document.getElementById("materialContentBox");

    const contentTitle =
        document.getElementById("materialContentTitle");

    const content =
        document.getElementById("materialContent");

    const quizButton =
        document.getElementById("startMaterialQuizButton");

    if (
        !materialBox ||
        !contentBox ||
        !contentTitle ||
        !content ||
        !quizButton
    ) {
        console.error(
            "Elemen isi materi tidak ditemukan."
        );
        return;
    }

    const material =
        materialContents[materialId];

    if (!material) {
        console.error(
            "Materi tidak ditemukan:",
            materialId
        );
        return;
    }

    currentMaterialId = materialId;
    currentMaterialSubject = subject;

    materialBox.style.display = "none";
    contentBox.style.display = "block";

    contentTitle.textContent =
        material.icon + " " + material.title;

    content.innerHTML =
        material.content;

    quizButton.onclick = function() {
        startMaterialQuiz(
            currentMaterialId,
            currentMaterialSubject
        );
    };

    window.scrollTo(0, 0);
}


/* =====================================================
   MULAI KUIS DARI MATERI
===================================================== */

async function startMaterialQuiz(materialId, subject) {

    console.log(
        "Mulai kuis materi:",
        materialId,
        subject
    );

    try {

        // Cari nama materi dari data yang sudah ada
        const material =
            materialContents[materialId];

        if (!material) {
            alert("Materi tidak ditemukan.");
            return;
        }

        // Cari materi di database
const { data: materiData, error: materiError } =
    await supabaseClient
        .from("data_materi")
        .select("id_materi, nama_materi")
        .eq("nama_materi", material.title)
        .limit(1)
        .maybeSingle();

        if (materiError) {
            console.error(
                "Gagal mengambil data materi:",
                materiError
            );

            alert("Data materi belum tersedia di database.");
            return;
        }

        // Ambil soal berdasarkan id materi
        const { data: soalData, error: soalError } =
            await supabaseClient
                .from("data_soal_kuis")
                .select(`
                    id_soal,
                    pertanyaan,
                    pilihan_a,
                    pilihan_b,
                    pilihan_c,
                    pilihan_d,
                    jawaban_benar,
                    tingkat_kesulitan
                `)
                .eq("id_materi", materiData.id_materi);

        if (soalError) {
            console.error(
                "Gagal mengambil soal:",
                soalError
            );

            alert("Soal belum bisa diambil dari database.");
            return;
        }

        if (!soalData || soalData.length === 0) {
            alert("Belum ada soal untuk materi ini.");
            return;
        }

        console.log(
            "Soal dari database:",
            soalData
        );

        // Simpan soal untuk kuis
       selectedQuestions = soalData.map(function(soal) {

    return {
        question: soal.pertanyaan,

        options: {
            A: soal.pilihan_a,
            B: soal.pilihan_b,
            C: soal.pilihan_c,
            D: soal.pilihan_d
        },

        answer: soal.jawaban_benar
    };

});


        currentSubject = subject;
        currentQuestion = 0;
        answerLocked = false;

        // Tampilkan halaman kuis
        document.getElementById(
            "materialContentBox"
        ).style.display = "none";

        document.getElementById(
            "quizBox"
        ).style.display = "block";

        showQuestion();

        window.scrollTo(0, 0);

    } catch (error) {

        console.error(
            "Error mulai kuis:",
            error
        );

        alert(
            "Terjadi kesalahan saat membuka kuis."
        );
    }
}

/* =====================================================
   KEMBALI DARI KUIS KE MATA PELAJARAN
===================================================== */

function backToSubjectsFromQuiz() {

    const quizBox =
        document.getElementById("quizBox");

    const subjectBox =
        document.getElementById("subjectBox");

    const materialBox =
        document.getElementById("materialBox");

    const materialContentBox =
        document.getElementById("materialContentBox");

    if (quizBox) {
        quizBox.style.display = "none";
    }

    if (subjectBox) {
        subjectBox.style.display = "block";
    }

    if (materialBox) {
        materialBox.style.display = "none";
    }

    if (materialContentBox) {
        materialContentBox.style.display = "none";
    }

    answerLocked = false;

    window.scrollTo(0, 0);
}

/* =====================================================
   KEMBALI KE DAFTAR MATERI
===================================================== */

function backToMaterials() {

    const contentBox =
        document.getElementById("materialContentBox");

    const materialBox =
        document.getElementById("materialBox");

    if (!contentBox || !materialBox) {
        console.error(
            "Elemen kembali ke materi tidak ditemukan."
        );
        return;
    }

    contentBox.style.display = "none";

    materialBox.style.display = "block";

    window.scrollTo(0, 0);
}

/* =====================================================
   CEK JAVASCRIPT
===================================================== */

console.log(
    "SCRIPT STUDY GARDEN BERHASIL DIBACA"
);

console.log(
    "showMaterials:",
    typeof showMaterials
);

console.log(
    "openMaterial:",
    typeof openMaterial
);
