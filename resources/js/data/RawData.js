const STATES = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu & Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman & Nicobar",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman & Diu",
    "New Delhi",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
];

const RELATION = [
    "S/O",
    "W/O",
    "D/O"
];

const QUALIFICATION = [
    "KIDS",
    "5TH CLASS",
    "10TH CLASS",
    "10TH Pass",
    "12TH PASS",
    "8TH CLASS",
    "8TH PASS",
    "GRADUATE",
    "POST GRADUATE"
];

const COURSE_CATEGORY = [
    "COMPUTER COURSE",
    'TEACHER TRAINING COURSE',
    'NIELIT COURSES',
    'BOUTIQUE COURSES',
    'BEAUTICIAN COURSES',
    'UG AND PG COURSE',
    'YOGA COURSES',
    'NDLM COURSES',
    'ADVANCE COURSES'
];

const ORIGINAL_MARKSHEET = [
    { label: 'COMPUTER', value: 'marksheet/orignal/computer.jpeg' },
    { label: 'ADVANCE', value: 'marksheet/orignal/advance.jpeg' },
    { label: 'WOMEN', value: 'marksheet/orignal/women.jpeg' },
    { label: 'YOGA', value: 'marksheet/orignal/yoga.jpeg' },
]

const DUPLICATE_MARKSHEET = [
    { label: 'COMPUTER', value: 'marksheet/computer_header.jpg' },
    { label: 'CHILDHOOD', value: 'marksheet/childhood_header.jpg' },
    { label: 'SOLAR', value: 'marksheet/solar_header.jpg' },
    { label: 'WOMEN', value: 'marksheet/women_header.jpg' },
    { label: 'ADVANCE', value: 'marksheet/advance_header.jpg' },
]

const CERTIFICATE_TYPE = [
    { label: 'ADVANCE DIPLOMA', value: 'diploma/advance.jpg' },
    { label: 'CHILDHOOD DIPLOMA', value: 'diploma/childhood.jpg' },
    { label: 'COMPUTER DIPLOMA', value: 'diploma/computer.jpg' },
    { label: 'SOLAR DIPLOMA', value: 'diploma/solar.jpg' },
    { label: 'WOMEN DIPLOMA', value: 'diploma/women.jpg' },
    { label: 'YOGA DIPLOMA', value: 'diploma/yoga.jpg' },
    { label: 'COMPUTER CERTIFICATE', value: 'certificate/computer-org.jpg' },
]


export { STATES, RELATION, QUALIFICATION, COURSE_CATEGORY, ORIGINAL_MARKSHEET, DUPLICATE_MARKSHEET, CERTIFICATE_TYPE }