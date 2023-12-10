function dayName(dayNumber) {
   const days = {
      1: "Понеділок",
      2: "Вівторок",
      3: "Середа",
      4: "Четвер",
      5: "П'ятниця",
      6: "Субота",
      7: "Неділя"
   };

   if (days.hasOwnProperty(dayNumber)) {
      return days[dayNumber];
   } else {
      return "Неправильний номер дня. Введіть число від 1 до 7.";
   }
}



function transformString(inputString) {
   const parts = inputString.split("_");

   for (let i = 0; i < parts.length; i++) {
       parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
   }

   const resultString = parts.join("");

   return resultString;
}



function fillArrayWithX() {
   const xArray = [];

   for (let i = 0; i < 10; i++) {
       xArray.push("x");
   }

   return xArray;
}



function checkNumber(someNumber) {
   const a = someNumber;

   let ggg;

   if (a > 0) {
      ggg = function() {
         console.log('один!');
      };
   } else {
      ggg = function() {
         console.log('два!');
      };
   }

   ggg();
}



const ggg = (func1, func2) => {
   const result1 = func1();
   const result2 = func2();
   return result1 + result2;
};

// Виклик функції
 ggg(
   () => { return 3; },
   () => { return 4; }
);



function compareArrays(arr1, arr2) {
   if (arr1.length !== arr2.length) {
       return false;
   }

   for (let i = 0; i < arr1.length; i++) {
       if (arr1[i] !== arr2[i]) {
           return false;
       }
   }

   return true;
}



function sliceArray(array, size) {
   const result = [];

   for (let i = 0; i < array.length; i += size) {
       result.push(array.slice(i, i + size));
   }

   return result;
}