function validateForm() {
    const nama = document.getElementById('nama');
    const nim = document.getElementById('nim');
    const email = document.getElementById('email');
    const mk = document.getElementById('mk');
    const dosen = document.getElementById('dosen');
    const nimRegex = /^[0-9]+$/;
    if (nama.value == "") {
        alert("Nama tidak boleh kosong.");
        document.forms["formPendaftaran"]["nama"].focus();
        return false;
    } else if (nim.value == "") {
        alert("NIM tidak boleh kosong.");
        document.forms["formPendaftaran"]["nim"].focus();
        return false;
    } else if (!nimRegex.test(nim.value) || nim.value.length < 10) {
        alert("Masukkin NIM yang valid!");
        document.forms["formPendaftaran"]["nim"].focus();
        return false;
    } else if (email.value == "") {
        alert("Email tidak boleh kosong.");
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    } else if (mk.value == "") {
        alert("Mata kuliah tidak boleh kosong.");
        document.forms["formPendaftaran"]["mk"].focus();
        return false;
    } else if (dosen.value == "") {
        alert("Dosen mata kuliah tidak boleh kosong.");
        document.forms["formPendaftaran"]["dosen"].focus();
        return false;
    }
    alert("Berhasil disubmit!");
}

function generateDosen(mk) {
    const dosen = {
        'pbkk': ['Fajar Baskoro, S.Kom., M.T.', 'Agus Budi Raharjo, S.Kom., M.Kom., Ph.D.'],
        'rsbp': ['Shintami Chusnul Hidayati, S.Kom., M.Sc., Ph.D.', 'Prof. Drs. Ec. Ir. Riyanarto Sarno, M.Sc., Ph.D.'],
        'pweb': ['Fajar Baskoro, S.Kom., M.T.', 'Imam Kuswardayan, S.Kom., M.T.', 'Misbakhul Munir Irfan Subakti, S.Kom., M.Sc.', 'Siska Arifiani, S.Kom., M.Kom.'],
        'ki': ['Wahyu Suadi, S.Kom, M.Kom.', 'Tohari Ahmad, S.Kom., M.IT., Ph.D.', 'Bagus Jati Santoso, S.Kom., Ph.D.', 'Dr. Baskoro Adi Pratomo, S.Kom., M.Kom.'],
        'grafkom': ['Anny Yuniarti, S.Kom., M.Comp.Sc.', 'Dr. Eng. Darlis Herumurti, S.Kom., M.Kom.', 'Hadziq Fabroyir, Ph.D.', 'Siska Arifiani, S.Kom., M.Kom.'],
        'tg': ['Victor Hariadi, S.Si., M.Kom.'],
        'jarkom': ['Dr. Eng. Royyana Muslim Ijtihadie, S.Kom., M.Kom.', 'Bagus Jati Santoso, S.Kom., Ph.D.', 'Ir. Ary Mazharuddin Shiddiqi, S.Kom., M.Comp.Sc., Ph.D., IPM.', 'Dr. Baskoro Adi Pratomo, S.Kom., M.Kom.', 'Hudan Studiawan, S.Kom., M.Kom.']
    }
    const dosen_mk = dosen[mk];
    const target = document.getElementById('dosen');
    const placeholder = `<option value="" disabled selected>Pilih Dosen</option>`;
    target.innerHTML = placeholder;
    let i = 1;
    for (const dosen of dosen_mk) {
        option = `<option value=${i}>${dosen}</option>`;
        target.innerHTML += option;
        i += 1;
    }
}

const suggestedNames = [
    'Abdullah Yasykur Bifadhlil Midror', 'Akmal Sulthon Fathulloh', 'Akmal Ariq Romadhon', 'Akmal Nafis', 'Duevano Fairuz Pandya', 'Ken Anargya Alkausar', 'Muhammad Ahyun Irsyada', 'Ligar Arsa Arnata', 'Irsyad Fikriansyah Ramadhan', 'Nadya Zuhria Amana'
];

function showNameSuggestions() {
    const namaDropdown = document.getElementById('nama-suggestions');
    const inputNamaValue = document.getElementById('nama').value.toLowerCase();
    namaDropdown.innerHTML = '';

    if (inputNamaValue.length > 0) {
        suggestedNames.forEach(suggestedName => {
            const suggestedNameLowerCase = suggestedName.toLowerCase();
            if (suggestedNameLowerCase.startsWith(inputNamaValue) &&
                suggestedNameLowerCase.indexOf(inputNamaValue) === 0) {
                const option = document.createElement('option');
                option.value = suggestedName;
                option.textContent = suggestedName;
                option.addEventListener('click', function () {
                    document.getElementById('nama').value = suggestedName;
                    namaDropdown.innerHTML = '';
                });
                namaDropdown.appendChild(option);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const inputNama = document.getElementById('nama');
    inputNama.addEventListener('input', showNameSuggestions);
    mk.addEventListener('change', function () {
        generateDosen(mk.value);
    });
});
