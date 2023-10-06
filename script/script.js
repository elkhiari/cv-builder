const button = document.getElementById("download-pdf");

button.addEventListener("click", () => {
  const content = document.getElementById("element-to-convert");
  html2pdf()
    .set({
      html2canvas: { scale: 4 },
      filename: document.getElementById("fullNameSec").innerText + ".pdf",
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      background: "#fff",
    })
    .from(content)
    .save();
});

function updateProfile() {
  let repeat = false;
  document.querySelectorAll(".form").forEach((element) => {
    if (element.value) {
      document.getElementById(element.id + "Sec").innerHTML = element.value;
      repeat = true;
    }
  });
  if (!repeat) {
    showToas("Veuillez remplir au moins un champ", "red");
    return;
  }
  showToas("Données sauvegardées", "green");
}

function addLangue() {
  const langue = document.getElementById("langue").value;
  const niveau = document.getElementById("niveau").value;
  const langueSection = document.getElementById("langueSec");
  const langueList = document.getElementById("langueList");

  if (document.getElementById(langue + "C")) {
    showToas("Cette langue existe déjà", "red");
    return;
  }

  if (langue === "" || niveau === "") {
    showToas("Veuillez remplir tous les champs", "red");
    return;
  }
  if (langue.length > 20) {
    showToas("La langue ne doit pas dépasser 20 caractères", "red");
    return;
  }

  langueSection.innerHTML += `
      <li id=${langue + "C"}>
        <i class="fa-solid fa-circle text-[#27384C]"></i>
        <span class="font-bold ">${langue}</span>
        <div class="w-full rounded-full bg-slate-300">
          <div class="w-[${
            niveau >= 100 ? 100 : niveau
          }%] bg-[#27384C] h-2 rounded-full"></div>
        </div>
      </li>
    `;

  langueList.innerHTML += `
    <li id=${langue}  class="flex place-items-center justify-between w-full bg-white p-2 rounded shadow">
      <div class="w-2/3" >
        <span class="w-1/2">${langue}</span>
        <span class="w-1/2">${niveau}</span>
      </div>
      <span class="w-1/3 text-right cursor-pointer" >
        <i class="fa-solid fa-trash text-red-700"  onclick="deleteLangue(event)"></i>
      </span>
    </li>
  `;

  document.getElementById("langue").value = "";
  document.getElementById("niveau").value = "";
  showToas("langue ajoutée avec succès", "green");
}

function deleteLangue(event) {
  const langue = event.target.parentElement.parentElement.id;
  document.getElementById(langue).remove();
  document.getElementById(langue + "C").remove();
  showToas("langue supprimée avec succès", "green");
}

function addLangueProgrammation() {
  const langue = document.getElementById("langueProgrammation").value;
  const niveau = document.getElementById("niveauProgrammation").value;
  const langueSection = document.getElementById("langueProgrammationSec");
  const langueList = document.getElementById("langueProgrammationList");

  if (document.getElementById(langue + "C")) {
    showToas("Cette langue existe déjà", "red");
    return;
  }
  if (langue === "" || niveau === "") {
    showToas("Veuillez remplir tous les champs", "red");
    return;
  }
  if (langue.length > 20) {
    showToas("La langue ne doit pas dépasser 20 caractères", "red");
    return;
  }

  langueSection.innerHTML += `
  <li class="" id=${langue + "C"}>
      <div class='flex place-items-center'> 
        <i class="fa-solid fa-circle text-[#27384C]"></i>
        <span class="font-bold ml-3">${langue}</span>
        <span class="w-full  text-right"><i class="fa-brands fa-${langue} text-[#27384C]"></i></span>
      </div>
      <div class="w-full rounded-full bg-slate-300">
        <div class="w-[${
          niveau >= 100 ? 100 : niveau
        }%] bg-[#27384C] h-2 rounded-full"></div>
      </div>
  </li> `;

  langueList.innerHTML += `
    <li id=${langue}  class="flex place-items-center justify-between w-full bg-white p-2 rounded shadow">
      <div class="w-2/3" >
        <span class="w-1/2">${langue}</span>
        <span class="w-1/2">${niveau}</span>
      </div>
      <span class="w-1/3 text-right cursor-pointer" >
        <i class="fa-solid fa-trash text-red-700"  onclick="deleteLangue(event)"></i>
      </span>
    </li>
  `;
  document.getElementById("langueProgrammation").value = "";
  document.getElementById("niveauProgrammation").value = "";
  showToas("langue ajoutée avec succès", "green");
}

function addProject() {
  const project = document.getElementById("project").value;
  const projectSection = document.getElementById("projectSec");
  const projectList = document.getElementById("projectList");

  if (document.getElementById(project.substr(7, 7) + "C")) {
    showToas("Ce projet existe déjà", "red");
    return;
  }
  if (project === "") {
    showToas("Veuillez remplir tous les champs", "red");
    return;
  }
  if (project.length < 15) {
    showToas("Le projet doit  dépasser 15 caractères", "red");
    return;
  }

  projectSection.innerHTML += `
    <li id=${project.substr(7, 7).replace(" ", "") + "C"}>
      <i class="fa-solid fa-circle text-[#27384C]"></i>
      <span class="font-bold ">${project}</span>
    </li>
  `;

  projectList.innerHTML += `
    <li id=${project
      .substr(7, 7)
      .replace(
        " ",
        ""
      )}  class="flex place-items-center justify-between w-full bg-white p-2 rounded shadow">
      <div class="w-2/3" >
        <span class="w-1/2">${project}</span>
      </div>
      <span class="w-1/3 text-right cursor-pointer" >
        <i class="fa-solid fa-trash text-red-700"  onclick="deleteLangue(event)"></i>
      </span>
    </li>
  `;

  document.getElementById("project").value = "";
  showToas("Projet ajouté avec succès", "green");
}

function addExperience() {
  const experience = document.getElementById("experience").value;
  const discription = document.getElementById("discription").value;
  const localisationEx = document.getElementById("localisationEx").value;
  const debutDate = document.getElementById("debutDate").value;
  const finDate = document.getElementById("finDate").value;
  const experienceSection = document.getElementById("experienceSec");
  const experienceList = document.getElementById("experienceList");

  if (document.getElementById(experience.substr(7, 7) + "C")) {
    showToas("Cette expérience existe déjà", "red");
    return;
  }
  if (
    experience === "" ||
    discription === "" ||
    localisationEx === "" ||
    debutDate === "" ||
    finDate === ""
  ) {
    showToas("Veuillez remplir tous les champs", "red");
    return;
  }
  if (
    experience.length < 15 ||
    discription.length < 15 ||
    localisationEx > 20 ||
    experience.length > 40 ||
    discription.length > 80
  ) {
    showToas("15>experience>40, 15>discription>80, localisation<20 ", "red");
    return;
  }

  if (new Date(debutDate).getTime() >= new Date(finDate).getTime()) {
    showToas("La date de début doit être inférieure à la date de fin", "red");
    return;
  }

  experienceSection.innerHTML += `
  <li id=${experience.substr(7, 7).replace(" ", "") + "C"}>
    <h1 class="font-bold text-[#27384C] text-lg text-left">${experience}</h1>
    <p class="text-[#27384C] text-sm text-left">${discription}</p>
    <div class="flex space-x-9">
      <p><i class="fa-solid fa-location-dot text-[#27384C] mr-2"></i><span>${localisationEx}</span></p>
      <p><i class="fa-solid fa-calendar text-[#27384C] mr-2"></i><span>${debutDate.replace(
        "-",
        "/"
      )} - ${finDate.replace("-", "/")}</span></p>
    </div>
</li>
  `;

  experienceList.innerHTML += `
    <li id=${experience
      .substr(7, 7)
      .replace(
        " ",
        ""
      )}  class="flex place-items-center justify-between w-full bg-white p-2 rounded shadow">
      <div class="w-2/3" >
        <span class="w-1/2">${experience}</span>
        <span class="w-1/2">${localisationEx}</span>
      </div>
      <span class="w-1/3 text-right cursor-pointer" >
        <i class="fa-solid fa-trash text-red-700"  onclick="deleteLangue(event)"></i>
      </span>
    </li>
  `;

  document.getElementById("experience").value = "";
  document.getElementById("discription").value = "";
  document.getElementById("localisationEx").value = "";
  document.getElementById("debutDate").value = "";
  document.getElementById("finDate").value = "";
  showToas("Expérience ajoutée avec succès", "green");
}

function toggleSection(event) {
  const contentSection = document.getElementById(event.target.id + "C");

  const isHidden = contentSection.classList.contains("hidden");

  document.querySelectorAll(".fa-chevron-down").forEach((element) => {
    document.getElementById(element.id + "C").classList.add("hidden");
    element.classList.remove("fa-chevron-down");
    element.classList.add("fa-chevron-up");
  });

  if (isHidden) {
    contentSection.classList.remove("hidden");
    contentSection.style.animation = "fadeIn 1s";
    event.target.classList.add("fa-chevron-down");
    event.target.classList.remove("fa-chevron-up");
  } else {
    contentSection.classList.add("hidden");
    event.target.classList.remove("fa-chevron-down");
    event.target.classList.add("fa-chevron-up");
  }
}

function addEducation() {
  const education = document.getElementById("education").value;
  const ecole = document.getElementById("ecole").value;
  const dateD = document.getElementById("dateD").value;
  const dateF = document.getElementById("dateF").value;
  const educationSection = document.getElementById("educationSec");
  const educationList = document.getElementById("educationList");

  if (document.getElementById(education.substr(7, 7) + "C")) {
    showToas("Cette éducation existe déjà", "red");
    return;
  }

  if (
    education === "" ||
    ecole === "" ||
    dateD === "" ||
    dateF === "" ||
    dateD === dateF
  ) {
    showToas("Veuillez remplir tous les champs", "red");
    return;
  }

  if (new Date(dateD).getTime() >= new Date(dateF).getTime()) {
    showToas("La date de début doit être inférieure à la date de fin", "red");
    return;
  }

  educationSection.innerHTML += `
  <li id=${education.substr(7, 7).replace(" ", "") + "C"}>
    <h1 class="font-bold text-[#27384C] text-lg text-left">
      <span>
        ${education}
      </span>
    </h1>
    <div class="flex space-x-5">
      <p class=" text-sm text-left">
        <i class="fa-solid fa-school text-[#27384C] mr-2"></i>
        <span>
          ${ecole}
        </span>
      </p>
      <p class="text-sm">
        <i class="fa-solid fa-calendar text-[#27384C] mr-2"></i>
        <span>
          ${dateD.replace("-", "/")} - ${dateF.replace("-", "/")}
        </span>
      </p>
    </div>
  </li>

  `;

  educationList.innerHTML += `
    <li id=${education.substr(7, 7).replace(" ", "")}  class="flex place-items-center justify-between w-full bg-white p-2 rounded shadow">
      <div class="w-2/3" >
        <span class="w-1/2">${education}</span>
        <span class="w-1/2">${ecole}</span>
      </div>
      <span class="w-1/3 text-right cursor-pointer" >
        <i class="fa-solid fa-trash text-red-700"  onclick="deleteLangue(event)"></i>
      </span>
    </li>
  `;

  document.getElementById("education").value = "";
  document.getElementById("ecole").value = "";
  document.getElementById("dateD").value = "";
  document.getElementById("dateF").value = "";
  showToas("Education ajoutée avec succès", "green");
}


function uploadImage(event) {
  const file = event.target.files[0];
  fileToBase64(file)
    .then((result) => {
      document.getElementById(event.target.id + "img").src = result;
    })
    .catch((err) => {
      console.log(err);
    });
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

function showToas(text, color) {
  const toast = document.getElementById("toast");
  toast.classList.remove("hidden");
  toast.classList.add("bg-" + color + "-500");
  toast.style.animation = "fadeIn 1s";
  toast.innerHTML = `
    <i class="fa-solid ${
      color === "green" ? "fa-check" : "fa-exclamation"
    } text-white"></i>
    <span class="text-white">${text}</span>
  `;
  setTimeout(() => {
    toast.classList.add("hidden");
    toast.classList.remove("bg-" + color + "-500");
  }, 4000);
}
