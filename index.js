function clickTheButton() {

    document.getElementById('result').innerHTML = "";
    let name = document.getElementById('trainerName').value;
    let id = document.getElementById('trainerId').value;
    let cash = document.getElementById('trainerCash').value;

    //When cash is great than 65535
    while (cash >= 65535) {
        cash -= 65535;
        cleanLog(cash, "cash @");
    }

    //When id is greater than 65535
    while (id >= 65535) {
        id -= 65535;
        cleanLog(id, "id @");
    }

    let nameTotal = 0;

    for (let index = 0; index < 5; index++) {
        nameTotal += getCharValue(name[index]);
    }

    let cashTotal = (cash / 256) + (cash % 256);
    cashTotal = cashTotal.toFixed();

    let idTotal = (id / 256) + (cash % 256);
    idTotal = idTotal.toFixed();

    let finalValue = Number(nameTotal) + Number(cashTotal) + Number(idTotal);
    finalValue = finalValue.toString();
    cleanLog(finalValue, "test conversion");

    let passWord = ["", "", "", "", ""];
    let numberOfDigits = finalValue.length;
    switch (numberOfDigits) {
        case 0:
            passWord[0] = "0";
            passWord[1] = "0";
            passWord[2] = "0";
            passWord[3] = "0";
            passWord[4] = "0";
            break;
        case 1:
            passWord[0] = "0";
            passWord[1] = "0";
            passWord[2] = "0";
            passWord[3] = "0";
            passWord[4] = finalValue[0];
        case 2:
            passWord[0] = "0";
            passWord[1] = "0";
            passWord[2] = "0";
            passWord[3] = finalValue[0];
            passWord[4] = finalValue[1];
            break;
        case 3:
            passWord[0] = "0";
            passWord[1] = "0";
            passWord[2] = finalValue[0];
            passWord[3] = finalValue[1];
            passWord[4] = finalValue[2];
            break;
        case 4:
            passWord[0] = "0";
            passWord[1] = finalValue[0];
            passWord[2] = finalValue[1];
            passWord[3] = finalValue[2];
            passWord[4] = finalValue[3];
            break;
        case 5:
            passWord[0] = finalValue[0];
            passWord[1] = finalValue[1];
            passWord[2] = finalValue[2];
            passWord[3] = finalValue[3];
            passWord[4] = finalValue[4];
            break;
        default:
            passWord[0] = finalValue[0];
            passWord[1] = finalValue[1];
            passWord[2] = finalValue[2];
            passWord[3] = finalValue[3];
            passWord[4] = finalValue[4];
            break;
    }

    for (let index = 0; index < passWord.length; index++) {
        document.getElementById('result').innerHTML += passWord[index];
    }
    
    //Debug logs
    cleanLog(name, "trainer name");
    cleanLog(id, "trainer id");
    cleanLog(cash, "trainer cash");
    cleanLog(nameTotal, "name value");
    cleanLog(cashTotal, "cash value");
    cleanLog(idTotal, "id value");
    cleanLog(finalValue, "password");
    cleanLog(numberOfDigits, "number of digits");
    for (let index = 0; index < finalValue.length; index++) {
        cleanLog(finalValue[index], "pass");
    }
    
}

function cleanLog(value, name = "") {
    let upperCase = name.toUpperCase();
    console.log(upperCase + ": " + value)
}

/**
 * Returns a number bassed on the character passed as an argument.
 * @param {*} character Character passed that determines return value.
 * @returns Corresponding number based on given characters.
 */
function getCharValue(character) {

    switch (character) {
        //Uppercases
        case 'A':
            return 128;
        case 'B':
            return 129;
        case 'C':
            return 130;
        case 'D':
            return 131;
        case 'E':
            return 132;
        case 'F':
            return 133;
        case 'G':
            return 134;
        case 'H':
            return 135;
        case 'I':
            return 136;
        case 'J':
            return 137;
        case 'K':
            return 138;
        case 'L':
            return 139;
        case 'M':
            return 140;
        case 'N':
            return 141;
        case "O":
            return 142;
        case 'P':
            return 143;
        case 'Q':
            return 144;
        case 'R':
            return 145;
        case 'S':
            return 146;
        case 'T':
            return 147;
        case 'U':
            return 148;
        case 'V':
            return 149;
        case 'W':
            return 150;
        case 'X':
            return 151;
        case 'Y':
            return 152;
        case 'Z':
            return 153;

        //Lowercases
        case 'a':
            return 160;
        case 'b':
            return 161;
        case 'c':
            return 162;
        case 'd':
            return 163;
        case 'e':
            return 164;
        case 'f':
            return 165;
        case 'g':
            return 166;
        case 'h':
            return 167;
        case 'i':
            return 168;
        case 'j':
            return 169;
        case 'k':
            return 170;
        case 'l':
            return 171;
        case 'm':
            return 172;
        case 'n':
            return 173;
        case 'o':
            return 174;
        case 'p':
            return 175;
        case 'q':
            return 176;
        case 'r':
            return 177;
        case 's':
            return 178;
        case 't':
            return 179;
        case 'u':
            return 180;
        case 'v':
            return 181;
        case 'w':
            return 182;
        case 'x':
            return 183;
        case 'y':
            return 184;
        case 'z':
            return 185;

        //Other
        case '-':
            return 227;
        case '?':
            return 230;
        case '/':
            return 243;
        case '.':
            return 232;
        case ',':
            return 244;
        case '(':
            return 154;
        case ')':
            return 155;
        case ':':
            return 156;
        case ';':
            return 157;
        case '[':
            return 158;
        case ']':
            return 159;
        case '+':
            return 225;
        case '=':
            return 226;
        case '!':
            return 231;
        case '*':
            return 241;
        default:
            return 0;
    }
}