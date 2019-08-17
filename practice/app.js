const isEmails = email => email.includes("@");

console.log(isEmails("abce@gmail.com"));

const creditCardNum = "1234";

const displayName = `${"*".repeat(10)}${creditCardNum}`;

//startsWith
//endsWith

const arrayOf = Array.of(1, 2, 3, 4);
console.log(arrayOf);

//array-like object to array => Array.from(obj);

//Object Destructuring
const settings = {
  notifications: {
    follow: true,
    alerts: true,
    unfollow: true
  },
  color: {
    theme: "dark",
    chosen_color: "red"
  }
};

if (settings.notifications.follow) {
  //do sth
}

/*
const {
  notifications: { follow = false } = {},
  color,
  color: { chosen_color: chosenColor = "blue" }
} = settings;

if (follow) {
  //do sth
}

console.log(color);
console.log(chosenColor);
*/

//to update, by calling api etc..
let chosenColor = "blue";

// do sth or call api

({
  notifications: { follow = false } = {},
  color,
  color: { chosen_color: chosenColor = "blue" }
} = settings);

console.log(color);
console.log(chosenColor);

//Array Destructuring
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
//or
//function returns array
//const days = () => ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const [mon, tue, wed, thu = "default"] = days;

console.log(mon, tue, wed);

/////////////////////

// function saveSetting({ follow, alert, color = "red" }) {
//   console.log(color);
// }
// saveSetting();

function saveSettings({ notifications, color2: { theme } }) {
  console.log(theme);
}

saveSettings({
  notifications: {
    follow: true,
    alert: true,
    mkt: false
  },
  color2: {
    theme: "blue"
  }
});

//variable swapping
//let mon = "Sat";
//let sat = "Mon";
//
//[sat, mon] = [mon, sat];

//ommiting
const daysss = ["mon", "tue", "wed", "thu22", "fri33", "sat", "sun"];
const [, , , tuee, frii] = daysss;
console.log(tuee, frii);
