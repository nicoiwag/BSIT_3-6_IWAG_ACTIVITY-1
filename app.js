const express = require('express');
const conn = require('./conn');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/register', (req, res) => {
    const fisrtname = req.body.fn;
    const lastname = req.body.ln;
    const age = req.body.age;
    const date_of_birth = req.body.dob;
    const gender = req.body.gender;
    const civil_status = req.body.civil_status;
    const nationality = req.body.nationality;
    const address = req.body.address;
    const ccontact_number = req.body.contact;
    const email_add = req.body.email;
    const occupation = req.body.occupation;

    const insert = `INSERT INTO tbl_students VALUES
    ('0',
    '${fisrtname}',
    '${lastname}',
    '${age}',
    '${date_of_birth}',
    '${gender}',
    '${civil_status}',
    '${nationality}',
    '${address}',
    '${ccontact_number}',
    '${email_add}',
    '${occupation}'
    )`;

    conn.query(insert, (err) => {
        if (err) throw err;
        res.send(
            `<script>
             alert('data inserted');
             location.href = '/'
            </script>`
        );
    });

    console.log(fisrtname, lastname, age, date_of_birth, gender, civil_status, nationality, address, ccontact_number, email_add, occupation);
});

app.listen(8000);