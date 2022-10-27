/*
    0 - first_name
    1 - last_name
    2 - role
    3 - img
    4 - email
    5 - dept
    6 - phone
    7 - location
*/

const dept_arr = ["Product Engineer", "Quality Assurance", "HR"];
const branch_arr = ["Madhapur", "Kondapur"];
const exp_arr = ["Intern", "Full Time"];
const reg_form_param = [
    "reg_fname",
    "reg_lname",
    "reg_email",
    "reg_phone",
    "reg_dept",
    "reg_role",
    "reg_location",
]
reg_form_sel_param = ["Department *", "Role *", "Location *"]

var data = [
    [
        "Raghavendra",
        "Hareesh",
        "Intern",
        "assets/har.jpg",
        "Raghavendra.p@technovert.com",
        "Product Engineer",
        "+91 76759 43743",
        "Kondapur"
    ],

    [
        "Karthik Sai",
        "Varma",
        "Intern",
        "assets/kar.jpg",
        "Karthik.p@technovert.com",
        "Product Engineer",
        "+91 89788 03288",
        "Kondapur"
    ],

    [
        "Bharath",
        "Vaddadi",
        "Intern",
        "assets/bar.jpeg",
        "Bharath.v@technovert.com",
        "Product Engineer",
        "+91 88971 83308",
        "Kondapur"
    ],
    [
        "Shyam",
        "Sundar",
        "Intern",
        "assets/shyam.jpeg",
        "Shyam.s@technovert.com",
        "Product Engineer",
        "+91 89785 07286",
        "Kondapur"
    ],
    [
        "xyz",
        "zzz",
        "Intern",
        "assets/nil.jpg",
        "xy.@technovert.com",
        "Product Engineer",
        "+91 85274 19632",
        "Madhapur"
    ],

    [
        "abc",
        "ccc",
        "Full Time",
        "assets/nil.jpg",
        "ab.c@technovert.com",
        "HR",
        "+91 99999 88888",
        "Madhapur"
    ],

    [
        "def",
        "fff",
        "Intern",
        "assets/nil.jpg",
        "de.f@technovert.com",
        "Quality Assurance",
        "+91 79241 67842",
        "Kondapur"
    ],
    [
        "Person",
        "",
        "Full Time",
        "assets/nil.jpg",
        "person.n@technovert.com",
        "Product Engineer",
        "+91 78945 63210",
        "Madhapur"
    ],
];
