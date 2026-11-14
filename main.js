/* Drop — homepage behaviour: signup forms and the "Would you switch?" quiz. */

/*
 * FORM SETUP
 * Signups are sent to this Formspree form. To use a different one, replace the URL below.
 * Both forms send to the same place, with a "form" field saying which one it was.
 */
const FORM_ENDPOINT = "https://formspree.io/f/xzeelzwr";

/* ---------------------------------------------------------------- forms */
const quizAnswers = {};

const setStatus = (form, msg, tone) => {
  const el = form.querySelector(".form-status");
  el.textContent = msg;
  if (tone) el.dataset.tone = tone; else delete el.dataset.tone;
};

const validate = (form) => {
  let firstBad = null;
  for (const field of form.querySelectorAll("input, select")) {
    if (field.type === "hidden") continue;
    const ok = field.checkValidity();
    if (ok) field.removeAttribute("aria-invalid");
    else field.setAttribute("aria-invalid", "true");
    if (!ok && !firstBad) firstBad = field;
  }
  return firstBad;
};

const messageFor = (field) => {
  if (field.type === "email") return field.value ? "That email doesn’t look right. Check for typos." : "Add your email so we can reach you.";
  if (field.type === "checkbox") return "Please confirm the age line before signing up.";
  if (field.tagName === "SELECT") return "Pick your hair type so we can match you with the right bars.";
  return "Fill in your first name so we know who you are.";
};

for (const form of document.querySelectorAll("[data-form]")) {
  form.addEventListener("input", (e) => {
    if (e.target.getAttribute("aria-invalid") && e.target.checkValidity()) {
      e.target.removeAttribute("aria-invalid");
      setStatus(form, "");
    }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const bad = validate(form);
    if (bad) { setStatus(form, messageFor(bad), "error"); bad.focus(); return; }

    if (form.dataset.form === "beta") {
      form.elements.quiz_current.value = quizAnswers.current || "";
      form.elements.quiz_priority.value = quizAnswers.priority || "";
    }

    if (!FORM_ENDPOINT) {
      setStatus(form, "Signups open soon. This form isn’t connected yet.", "error");
      console.warn("Drop: set FORM_ENDPOINT in main.js to start collecting signups.");
      return;
    }

    const btn = form.querySelector("button[type=submit]");
    const label = btn.textContent;
    btn.setAttribute("aria-busy", "true");
    btn.disabled = true;
    btn.textContent = "Sending…";
    setStatus(form, "");

    try {
      const data = new FormData(form);
      data.append("form", form.dataset.form);
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      setStatus(form, form.dataset.form === "beta"
        ? "You’re in the tester pool. Watch your inbox for next steps."
        : "You’re on the list. We’ll email you before launch.");
    } catch {
      setStatus(form, "That didn’t go through. Check your connection and try again.", "error");
    } finally {
      btn.removeAttribute("aria-busy");
      btn.disabled = false;
      btn.textContent = label;
    }
  });
}

/* ---------------------------------------------------------------- quiz */
(() => {
  const quiz = document.querySelector("[data-quiz]");
  if (!quiz) return;
  const steps = [...quiz.querySelectorAll(".quiz__q")];
  const result = quiz.querySelector("[data-result]");
  const bars = [...quiz.querySelectorAll(".quiz__progress span")];
  const hairSelect = document.querySelector('[data-form="beta"] select[name="hair"]');

  const verdicts = {
    results: ["You’d switch for better hair.", "Same here. That’s the whole point of Drop: a bar that works as well as the shampoo you use now. Try it and tell us if it does."],
    plastic: ["You’re ready to drop the bottle.", "Every bar is one less plastic bottle. Help us make sure it’s a bar you’ll want to keep using."],
    travel: ["You’d switch for easier travel.", "Small, solid, and nothing to spill in your bag. Try it on your next trip."],
    ingredients: ["You want to know what’s inside.", "We’ll post the full ingredient list before launch, with a simple explanation of each one. Testers see it first."],
  };

  const show = (i) => {
    steps.forEach((s, n) => (s.hidden = n !== i));
    bars.forEach((b, n) => b.classList.toggle("is-done", n < i));
    steps[i]?.querySelector("input")?.focus({ preventScroll: true });
  };

  quiz.addEventListener("change", (e) => {
    const input = e.target;
    if (input.type !== "radio") return;
    quizAnswers[input.name] = input.value;
    const i = steps.indexOf(input.closest(".quiz__q"));
    // Let the selected state register visually before advancing.
    setTimeout(() => {
      if (i < steps.length - 1) return show(i + 1);
      steps.forEach((s) => (s.hidden = true));
      bars.forEach((b) => b.classList.add("is-done"));
      const [title, body] = verdicts[quizAnswers.priority] || verdicts.results;
      result.querySelector("[data-verdict]").textContent = title;
      const curlNote = ["curly", "coily"].includes(quizAnswers.hair)
        ? " Our first bars are made for normal hair. Testers with your hair type help us decide what to make next."
        : "";
      result.querySelector("[data-verdict-body]").textContent = body + curlNote;
      if (hairSelect && quizAnswers.hair) hairSelect.value = quizAnswers.hair;
      result.hidden = false;
      result.focus({ preventScroll: true });
    }, 220);
  });

  quiz.querySelector("[data-restart]").addEventListener("click", () => {
    quiz.reset();
    for (const k of Object.keys(quizAnswers)) delete quizAnswers[k];
    result.hidden = true;
    show(0);
  });
})();
