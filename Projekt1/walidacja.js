function isEmpty(str) {
    return (!str || str.length === 0);
}
function validateSearch(form) {
    checkString(form.elements["f_fraza"].value, "Podaj frazę!");
}
function isWhiteSpace(str) {
    var ws = "\t\n\r ";
    for (i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (ws.indexOf(c) > -1) {
            return true;
        }
    }
    return false;
}
function checkString(str, msg) {
    if (isWhiteSpace(str) || isEmpty(str)) {
        alert(msg);
        return false;
    } else return true;
}
function checkEmail(str) {
    if (isWhiteSpace(str)) alert("Podaj właściwy e-mail"); else {
        at = str.indexOf("@");
        if (at < 1) {
            alert("Nieprawidłowy e-mail");
            return false;
        } else {
            var l = -1;
            for (var i = 0; i < str.length; i++) {
                var c = str.charAt(i);
                if (c == ".") l = i;
            }
            if ((l < (at + 2)) || (l == str.length - 1)) alert("Nieprawidłowy e-mail");
        }
        return true;
    }
}
function validateLogin(form) {
    checkString(form.elements["f_login"].value, "Podaj Login!");
    checkString(form.elements["f_haslo"].value, "Podaj hasło!");
}
function isSpecial(form) {
  str1 = form.elements[f_haslo].value;
  var special = "!#$%&_?";
  w = false;
  for (var i = 0; i < str1.length; i++) {
    for (var j = 0; j < special.length; j++) {
      if (str1.charAt(i) == special.charAt(j)) {
        w = true;
        break;
      }
    }
  }
  if (w == false) {
    alert("Nieprawidłowe hasło! Hasło musi zawierać od 8 do 20 znaków i znaki specjalne");
  }
  return w;
}
function isTheSame(form) {
  str1 = form.elements[f_haslo].value;
  str2 = form.elements[f_phaslo].value;
  if (str2 === str1) {
    return true;
  }
  else {
    alert("hasła nie są takie same!");
    return false;
  }
}
function validateRegister(form) {
  checkEmail(form.elements["f_mail"].value, "Nieprawidłowy adres e-mail!");
  checkString(form.elements["f_login"].value, "Podaj Login!");
  checkString(form.elements["f_haslo"].value, "Podaj hasło!");
  checkString(form.elements["f_phaslo"].value, "Potwierdź hasło!");
}
function validateOrder(form) {
  checkString(form.elements["f_ilosc"].value, "Podaj ilość!");
  checkString(form.elements["f_name"].value, "Podaj imię!");
  checkString(form.elements["f_surname"].value, "Podaj nazwisko!");
  checkString(form.elements["f_street"].value, "Podaj Ulicę!");
  checkString(form.elements["f_nrD"].value, "Podaj numer domu!");
  checkString(form.elements["f_nrM"].value, "Podaj numer mieszkania!");
  checkString(form.elements["f_code"].value, "Podaj kod pocztowy!");
  checkString(form.elements["f_town"].value, "Podaj miejscowość!");
}
