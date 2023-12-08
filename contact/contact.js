function createContactForm() {
  const contactInfoMain = document.createElement("section");
  contactInfoMain.className = "w3l-contact-info-main py-5";

  const container = document.createElement("div");
  container.className = "container py-md-5 py-4";

  const titleMain = document.createElement("div");
  titleMain.className = "title-main text-center mx-auto mb-4";

  const h3Element = document.createElement("h3");
  h3Element.className = "title-style";
  h3Element.textContent = "Contact Us";

  const subTitle = document.createElement("p");
  subTitle.className = "sub-title mt-2";
  subTitle.textContent =
    "Cum doctus civibus efficiantur in imperdiet deterruisset. Cras efficitur, metus gravida suscipit cursus, dui diam pre lorem id lectus.";
  subTitle.style.fontSize = "22px";

  titleMain.appendChild(h3Element);
  titleMain.appendChild(subTitle);

  const contact = document.createElement("div");
  contact.className = "contact-w3pvt-form mt-5 pt-lg-4";

  const form = document.createElement("form");
  form.method = "post";
  form.className = "w3layouts-contact-fm";

  const row = document.createElement("div");
  row.className = "row main-cont-sec";

  const leftColumn = document.createElement("div");
  leftColumn.className = "col-md-6 left-cont-contact";

  const formGroup1 = document.createElement("div");
  formGroup1.className = "form-group mb-3";
  const label1 = document.createElement("label");
  label1.textContent = "First Name";
  label1.htmlFor = "w3lFirstName";
  const input1 = document.createElement("input");
  input1.type = "text";
  input1.id = "w3lFirstName";
  input1.className = "form-control";
  formGroup1.appendChild(label1);
  formGroup1.appendChild(input1);

  const formGroup2 = document.createElement("div");
  formGroup2.className = "form-group mb-3";
  const label2 = document.createElement("label");
  label2.textContent = "Last Name";
  label2.htmlFor = "w3lLastName";
  const input2 = document.createElement("input");
  input2.type = "text";
  input2.id = "w3lLastName";
  input2.className = "form-control";
  formGroup2.appendChild(label2);
  formGroup2.appendChild(input2);

  const formGroup3 = document.createElement("div");
  formGroup3.className = "form-group mb-3";
  const label3 = document.createElement("label");
  label3.htmlFor = "w3lSender";
  label3.textContent = "Email";
  const input3 = document.createElement("input");
  input3.type = "email";
  input3.id = "w3lSender";
  input3.className = "form-control";
  formGroup3.appendChild(label3);
  formGroup3.appendChild(input3);

  const emailError = document.createElement("div");
  emailError.className = "error-message";
  emailError.style.color = "red";
  formGroup3.appendChild(emailError);

  leftColumn.appendChild(formGroup1);
  leftColumn.appendChild(formGroup2);
  leftColumn.appendChild(formGroup3);

  const rightColumn = document.createElement("div");
  rightColumn.className = "col-md-6 right-cont-contact";

  const formGroup4 = document.createElement("div");
  formGroup4.className = "form-group";
  const label4 = document.createElement("label");
  label4.textContent = "Write Message";
  label4.htmlFor = "w3lMessage";
  const textarea = document.createElement("textarea");
  textarea.id = "w3lMessage";
  textarea.className = "form-control";
  formGroup4.appendChild(label4);
  formGroup4.appendChild(textarea);

  rightColumn.appendChild(formGroup4);

  row.appendChild(leftColumn);
  row.appendChild(rightColumn);

  form.appendChild(row);

  const formGroup22 = document.createElement("div");
  formGroup22.className = "form-group-2 mt-3 text-right";

  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.className = "custom-btn btn-1";
  submitButton.textContent = "Send Now";

  submitButton.addEventListener("click", function () {
    validateForm();
  });

  formGroup22.appendChild(submitButton);

  form.appendChild(formGroup22);

  contact.appendChild(form);

  container.appendChild(titleMain);
  container.appendChild(contact);

  contactInfoMain.appendChild(container);

  document.body.appendChild(contactInfoMain);
}

function validateForm() {
  const inputs = document.querySelectorAll(
    '.w3layouts-contact-fm input[type="text"], .w3layouts-contact-fm textarea'
  );
  const emailInput = document.getElementById("w3lSender");
  const emailError = document.querySelector(
    ".w3layouts-contact-fm .error-message"
  );

  emailError.textContent = "";

  for (const input of inputs) {
    if (!input.value.trim()) {
      emailError.textContent = "Please fill in all fields.";
      return;
    }
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    return;
  }

  simulateFormSubmission();

  clearForm();
}

function simulateFormSubmission() {
  console.log("Simulating form submission...");
}

function clearForm() {
  const inputs = document.querySelectorAll(
    '.w3layouts-contact-fm input[type="text"], .w3layouts-contact-fm textarea'
  );

  for (const input of inputs) {
    input.value = "";
  }

  const emailInput = document.getElementById("w3lSender");
  emailInput.value = "";
  const emailError = document.querySelector(
    ".w3layouts-contact-fm .error-message"
  );
  emailError.textContent = "";
}

createContactForm();
