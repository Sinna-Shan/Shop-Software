const User = require("../models/user");

const users = [
  {
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    nic: "1234567891v",
    mobile: "0712345671",
    role: "user",
  },
  {
    first_name: "Jane",
    last_name: "Smith",
    email: "jane.smith@example.com",
    nic: "1234567892v",
    mobile: "0712345672",
    role: "admin",
  },
  {
    first_name: "Michael",
    last_name: "Johnson",
    email: "michael.johnson@example.com",
    nic: "1234567893v",
    mobile: "0712345673",
    role: "user",
  },
  {
    first_name: "Emily",
    last_name: "Brown",
    email: "emily.brown@example.com",
    nic: "1234567894v",
    mobile: "0712345674",
    role: "admin",
  },
  {
    first_name: "Chris",
    last_name: "Wilson",
    email: "chris.wilson@example.com",
    nic: "1234567895v",
    mobile: "0712345675",
    role: "user",
  },
  {
    first_name: "Jessica",
    last_name: "Taylor",
    email: "jessica.taylor@example.com",
    nic: "1234567896v",
    mobile: "0712345676",
    role: "user",
  },
  {
    first_name: "David",
    last_name: "Lee",
    email: "david.lee@example.com",
    nic: "1234567897v",
    mobile: "0712345677",
    role: "admin",
  },
  {
    first_name: "Sarah",
    last_name: "Harris",
    email: "sarah.harris@example.com",
    nic: "1234567898v",
    mobile: "0712345678",
    role: "user",
  },
  {
    first_name: "Robert",
    last_name: "Clark",
    email: "robert.clark@example.com",
    nic: "1234567899v",
    mobile: "0712345679",
    role: "admin",
  },
  {
    first_name: "Laura",
    last_name: "Lewis",
    email: "laura.lewis@example.com",
    nic: "12345678910v",
    mobile: "0712345680",
    role: "user",
  },
  {
    first_name: "Daniel",
    last_name: "Walker",
    email: "daniel.walker@example.com",
    nic: "12345678911v",
    mobile: "0712345681",
    role: "admin",
  },
  {
    first_name: "Olivia",
    last_name: "King",
    email: "olivia.king@example.com",
    nic: "12345678912v",
    mobile: "0712345682",
    role: "user",
  },
  {
    first_name: "William",
    last_name: "Scott",
    email: "william.scott@example.com",
    nic: "12345678913v",
    mobile: "0712345683",
    role: "user",
  },
  {
    first_name: "Emma",
    last_name: "Adams",
    email: "emma.adams@example.com",
    nic: "12345678914v",
    mobile: "0712345684",
    role: "admin",
  },
  {
    first_name: "James",
    last_name: "Hill",
    email: "james.hill@example.com",
    nic: "12345678915v",
    mobile: "0712345685",
    role: "user",
  },
  {
    first_name: "Sophia",
    last_name: "Green",
    email: "sophia.green@example.com",
    nic: "12345678916v",
    mobile: "0712345686",
    role: "admin",
  },
  {
    first_name: "Matthew",
    last_name: "Baker",
    email: "matthew.baker@example.com",
    nic: "12345678917v",
    mobile: "0712345687",
    role: "user",
  },
  {
    first_name: "Ava",
    last_name: "Carter",
    email: "ava.carter@example.com",
    nic: "12345678918v",
    mobile: "0712345688",
    role: "user",
  },
  {
    first_name: "Joshua",
    last_name: "Mitchell",
    email: "joshua.mitchell@example.com",
    nic: "12345678919v",
    mobile: "0712345689",
    role: "admin",
  },
  {
    first_name: "Isabella",
    last_name: "Perez",
    email: "isabella.perez@example.com",
    nic: "12345678920v",
    mobile: "0712345690",
    role: "user",
  },
  {
    first_name: "Alexander",
    last_name: "Roberts",
    email: "alexander.roberts@example.com",
    nic: "12345678921v",
    mobile: "0712345691",
    role: "admin",
  },
  {
    first_name: "Mia",
    last_name: "Turner",
    email: "mia.turner@example.com",
    nic: "12345678922v",
    mobile: "0712345692",
    role: "user",
  },
  {
    first_name: "Ethan",
    last_name: "Phillips",
    email: "ethan.phillips@example.com",
    nic: "12345678923v",
    mobile: "0712345693",
    role: "admin",
  },
  {
    first_name: "Amelia",
    last_name: "Campbell",
    email: "amelia.campbell@example.com",
    nic: "12345678924v",
    mobile: "0712345694",
    role: "user",
  },
  {
    first_name: "Noah",
    last_name: "Parker",
    email: "noah.parker@example.com",
    nic: "12345678925v",
    mobile: "0712345695",
    role: "admin",
  },
  {
    first_name: "Chloe",
    last_name: "Evans",
    email: "chloe.evans@example.com",
    nic: "12345678926v",
    mobile: "0712345696",
    role: "user",
  },
  {
    first_name: "Logan",
    last_name: "Edwards",
    email: "logan.edwards@example.com",
    nic: "12345678927v",
    mobile: "0712345697",
    role: "admin",
  },
  {
    first_name: "Lily",
    last_name: "Collins",
    email: "lily.collins@example.com",
    nic: "12345678928v",
    mobile: "0712345698",
    role: "user",
  },
  {
    first_name: "Lucas",
    last_name: "Stewart",
    email: "lucas.stewart@example.com",
    nic: "12345678929v",
    mobile: "0712345699",
    role: "admin",
  },
  {
    first_name: "Grace",
    last_name: "Sanchez",
    email: "grace.sanchez@example.com",
    nic: "12345678930v",
    mobile: "0712345700",
    role: "user",
  },
  {
    first_name: "Benjamin",
    last_name: "Morris",
    email: "benjamin.morris@example.com",
    nic: "12345678931v",
    mobile: "0712345701",
    role: "admin",
  },
  {
    first_name: "Zoe",
    last_name: "Murphy",
    email: "zoe.murphy@example.com",
    nic: "12345678932v",
    mobile: "0712345702",
    role: "user",
  },
  {
    first_name: "Jacob",
    last_name: "Cook",
    email: "jacob.cook@example.com",
    nic: "12345678933v",
    mobile: "0712345703",
    role: "admin",
  },
  {
    first_name: "Ella",
    last_name: "Rogers",
    email: "ella.rogers@example.com",
    nic: "12345678934v",
    mobile: "0712345704",
    role: "user",
  },
  {
    first_name: "Elijah",
    last_name: "Reed",
    email: "elijah.reed@example.com",
    nic: "12345678935v",
    mobile: "0712345705",
    role: "admin",
  },
  {
    first_name: "Madison",
    last_name: "Bailey",
    email: "madison.bailey@example.com",
    nic: "12345678936v",
    mobile: "0712345706",
    role: "user",
  },
  {
    first_name: "Mason",
    last_name: "Bell",
    email: "mason.bell@example.com",
    nic: "12345678937v",
    mobile: "0712345707",
    role: "admin",
  },
  {
    first_name: "Liam",
    last_name: "Russell",
    email: "liam.russell@example.com",
    nic: "12345678938v",
    mobile: "0712345708",
    role: "user",
  },
  {
    first_name: "Harper",
    last_name: "Griffin",
    email: "harper.griffin@example.com",
    nic: "12345678939v",
    mobile: "0712345709",
    role: "admin",
  },
  {
    first_name: "Evelyn",
    last_name: "Diaz",
    email: "evelyn.diaz@example.com",
    nic: "12345678940v",
    mobile: "0712345710",
    role: "user",
  },
  {
    first_name: "Jayden",
    last_name: "Howard",
    email: "jayden.howard@example.com",
    nic: "12345678941v",
    mobile: "0712345711",
    role: "admin",
  },
  {
    first_name: "Aiden",
    last_name: "Ward",
    email: "aiden.ward@example.com",
    nic: "12345678942v",
    mobile: "0712345712",
    role: "user",
  },
  {
    first_name: "Sofia",
    last_name: "Cooper",
    email: "sofia.cooper@example.com",
    nic: "12345678943v",
    mobile: "0712345713",
    role: "admin",
  },
  {
    first_name: "Gabriel",
    last_name: "Morgan",
    email: "gabriel.morgan@example.com",
    nic: "12345678944v",
    mobile: "0712345714",
    role: "user",
  },
  {
    first_name: "Avery",
    last_name: "Flores",
    email: "avery.flores@example.com",
    nic: "12345678945v",
    mobile: "0712345715",
    role: "admin",
  },
];

(async () => {
  await User.destroy({ where: {}, cascade: true });
  await User.bulkCreate(users);
})();