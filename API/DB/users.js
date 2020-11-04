const moment = require("moment");

module.exports = [
  {
    firstName: "John K",
    lastName: "Doe",
    admin: false,
    phoneNumber: "09173450089",
    email: "abc@gmail.com",
    gender: "male",
    birthDate: moment().format("YYYY-MM-DD"),
    img: "images/man2.jpg",
    password: "123",
    disabled: false,
  },
  {
    firstName: "jasmine",
    lastName: "Smith",
    admin: false,
    phoneNumber: "09173864321",
    email: "abc@gmail.com",
    gender: "female",
    birthDate: moment().subtract(7, "years").format("dddd Do MMMM, YYYY"),
    img: "images/woman2.jpg",
    password: "123",
    disabled: false,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    admin: false,
    phoneNumber: "09378864321",
    email: "abc@gmail.com",
    gender: "female",
    birthDate: moment().subtract(17, "months").format("dddd Do MMMM, YYYY"),
    img: "images/woman1.jpg",
    password: "123",
    disabled: false,
  },
  {
    firstName: "Mike",
    lastName: "Ross",
    admin: true,
    phoneNumber: "09389964322",
    email: "abc@gmail.com",
    gender: "male",
    birthDate: moment().add(7, "years").format("dddd Do MMMM, YYYY"),
    img: "images/man1.jpg",
    password: "123",
    disabled: false,
  },
  {
    firstName: "Sina",
    lastName: "Abedi",
    admin: true,
    phoneNumber: "09038394538",
    email: "abc@gmail.com",
    gender: "male",
    birthDate: moment().subtract(7, "days").format("dddd Do MMMM, YYYY"),
    img: "images/users.png",
    password: "123",
    disabled: false,
  },
  {
    firstName: "John",
    lastName: "Wick",
    admin: true,
    phoneNumber: "09038394545",
    email: "abc@gmail.com",
    gender: "male",
    birthDate: moment("2010.01.01", "YYYY.MM.DD").fromNow(),
    // to remove "ago suffix", add true argument
    img: "images/JohnWick.jpg",
    password: "123",
    disabled: false,
  },
];
