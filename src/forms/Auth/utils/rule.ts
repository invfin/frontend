import { reactive } from "vue";
import type { FormRules } from "element-plus";

export const REGEXP_PWD =
  /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/;

function emptyNotAllowed(value, callback) {
  if (value === "") {
    callback(new Error("Este campo no puede estar vacío"));
  }
}

function testPassword(value, callback) {
  if (!REGEXP_PWD.test(value)) {
    callback(
      new Error(
        "La contraseña debe tener de 8 a 18 dígitos, letras y símbolos."
      )
    );
  }
}

const loginRules = reactive(<FormRules>{
  password: [
    {
      validator: (rule, value, callback) => {
        emptyNotAllowed(value, callback);
        testPassword(value, callback);
        callback();
      },
      trigger: "blur"
    }
  ]
});

export { loginRules };
