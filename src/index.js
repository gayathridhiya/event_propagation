import "./styles.css";

const form = document.querySelector(".FormClass");
const div = document.querySelector(".DivClass");
const p = document.querySelector(".ParaClass");

//Event capturing
p.addEventListener(
  "click",
  (event) =>
    alert(
      "Target " +
        event.target.tagName +
        " CAPRTING IN P " +
        " Current_target " +
        event.currentTarget.tagName
    ),
  { capture: true }
);
div.addEventListener(
  "click",
  (event) =>
    alert(
      "Target " +
        event.target.tagName +
        " CAPTURING IN DIV " +
        " Current_target " +
        event.currentTarget.tagName
    ),
  { capture: true }
);
form.addEventListener("click", () => alert("F0rM"), { capture: true });

//Event bubbling
p.addEventListener("click", (event) =>
  alert(
    "Target " +
      event.target.tagName +
      " IN P " +
      " Current_target " +
      event.currentTarget.tagName
  )
);
div.addEventListener("click", (event) =>
  alert(
    "Target " +
      event.target.tagName +
      " IN DIV " +
      " Current_target " +
      event.currentTarget.tagName
  )
);
div.addEventListener("click", (event) => event.stopPropagation());
form.addEventListener("click", (event) =>
  alert(
    "Target " +
      event.target.tagName +
      " IN FORM " +
      " Current_target " +
      event.currentTarget.tagName
  )
);
