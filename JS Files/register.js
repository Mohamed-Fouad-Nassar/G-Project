let cancerTypeInput = document.getElementById("cancer");
console.log(cancerTypeInput);

const cancerTypes = [
  "I haven't cancer",
  "Breast cancer",
  "Leukemia cancer",
  "Prostate cancer",
  "Lymphoma cancer",
  "Melanoma cancer",
  "Pancreatic  cancer",
  "Multiple myeloma cancer",
  "Bladder cancer",
  "Non Hodgkin lymphoma cancer",
  "Kidney cancer",
  "Sarcoma cancer",
  "Thyroid cancer",
  "Uterine cancer",
  "Brain tumor cancer",
  "Carcinoma cancer",
  "Squamous cell carcinoma cancer",
  "Kaposi sarcoma cancer",
  "Non-Small cell lung cancer",
  "Transitional cell carcinoma cancer",
  "Acute lymphoblastic leukemia cancer",
  "Oro-pharyngeal cancer",
  "Gastrointestinal carcinoid tumor cancer",
  "Astrocytoma cancer",
  "Colorectal cancer",
];

for (let i = 0; i < cancerTypes.length; i++) {
  // loop on array elements
  let option = document.createElement("option");
  option.innerText = cancerTypes[i];
  option.setAttribute("value", `${cancerTypes[i]}`);
  cancerTypeInput.appendChild(option);
}
